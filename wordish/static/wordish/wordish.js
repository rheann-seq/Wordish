$(document).ready(function () {
	var attempt = $("#attempt_num").val();
	console.log("attempt_num: " + attempt);
	var delay = 0;
	for (var j = 0; j < 5; j++) {
		console.log("#cell_" + attempt + "_" + j);
		var bg_color = $("#cell_" + attempt + "_" + j).css("background-color");
		console.log(bg_color);

		$("#cell_" + attempt + "_" + j).addClass("cell-transition rotate-360");
		delay_Secs = delay.toString() + "s";
		$("#cell_" + attempt + "_" + j).css("transition-delay", delay_Secs);
		delay = delay + 0.5;
	}

	if (localStorage.getItem("theme") === "dark") {
		$("body").addClass("dark-theme");
	}

	$("#toggle_theme").on("click", function () {
		$("body").toggleClass("dark-theme");
		if ($("body").hasClass("dark-theme")) {
			localStorage.setItem("theme", "dark");
		} else {
			localStorage.removeItem("theme");
		}
	});
});

# Wordish
### Welcome to Wordish!

## How to play this game?
Guess the hidden word in 6 tries.

Each guess must be a valid 5 letter word, you cannot enter random letters. Hit the enter button to submit the guess.

After your submission, the color of the tiles will change as in the examples below.

![image](https://github.com/rheann-seq/Wordish/assets/83914142/ec0c71c6-1c40-48d1-8502-cced243b907c)

## How to run Wordish locally?

1. Install Python 3 if you haven't already done so
2. Create and activate a virtual environment (optional) <br>
    Choose a location in which to create the virtual environment. I call it “venv” and don’t put it 
    in my repo, but if you put it anywhere in your repo, be sure to put the name of the virtual 
    environment directory into your .gitignore. (Our default .gitignore contains venv.)
    cd <location for your virtual environment folder>
    MAC: `python3 -m venv venv` <br>
    MS: `python -m  venv venv` <br>

    Activate your virual env: <br>
    MAC zsh: `source venv/bin/activate` <br>
    MS cmd.exe: `venv\Scripts\activate.bat` <br>
    Linux csh: `source venv/bin/activate.csh` <br><br>
    (See https://docs.python.org/3/library/venv.html for other shells)
3. Got to the project folder and run the following commands:
   ````
   python manage.py migrate
   ````
   ````
   python manage.py runserver
   ````
4. Open the url: http://127.0.0.1:8000/ and you're all set to play!

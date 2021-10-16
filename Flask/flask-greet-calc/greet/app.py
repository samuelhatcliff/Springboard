
from flask import Flask
app = Flask(__name__)


@app.route('/welcome')
def say_goodbye():
    return "welcome"


@app.route('/home')
def say_goodbye():
    return "welcome home"


@app.route('/back')
def say_goodbye():
    return "welcome back"

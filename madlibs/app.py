from flask import Flask, render_template, request
from flask_debugtoolbar import DebugToolbarExtension
from random import choice
from stories import story

app = Flask(__name__)
app.config['SECRET_KEY'] = "secret"

debug = DebugToolbarExtension(app)


@app.route('/')
def home_page():
    prompts = story.prompts
    return render_template("formquestions.html", prompts=prompts)
    

@app.route('/story')
def write_story():
    result = story.generate(request.args)
    return render_template("story.html", result=result)

# @app.route('/result')
# def result():
    
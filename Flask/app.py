from flask import Flask, request, render_template, redirect
from random import choice, sample

from flask_debugtoolbar import DebugToolbarExtension


COMPLIMENTS = ["cool", "clever", "tenacious", "awesome", "Pythonic"]

MOVIES = ['amadeus', 'chicken run', 'dances with wolves']





app = Flask(__name__)
app.config['SECRET_KEY'] = "oh-so-secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

@app.route('/form')
def show_form():
    return render_template("form.html")

@app.route('/movies')
def show_all_movies():
    '''show list of all movies in fake db'''
    return render_template('movies.html', movies=MOVIES)

@app.route('/movies/new', methods=["POST"])
def add_movie():
    title = request.form['title']
    MOVIES.append(title)
    return render_template('movies.html', movies=MOVIES)


@app.route('/form2')
def show_form2():
    return render_template("form2.html")

@app.route('/greet_2')
def get_greeting_2():
    username = request.args['username']
    wants_compliments = request.args.get("wants_compliments")
    nice_things = sample(COMPLIMENTS, 3)
    return render_template("greet_2.html", username=username, wants_compliments=wants_compliments, compliments=nice_things)

@app.route('/old-home-page')
def redirect_to_home():
    '''redirects to new home page'''
    return redirect("/")

@app.route('/')
def home_page():
    html = """
    <html>
        <body>
            <h1>Home Page</h1>
            <p>This is the home page</p>
        </body>
    </html>
"""
    return html

@app.route('/greet')
def get_greeting():
    username = request.args['username']
    nice_thing= choice(COMPLIMENTS)
    return render_template("greet.html", username=username, compliment=nice_thing)

@app.route('/hello')
def say_hello():
    return render_template('hello.html')


@app.route('/goodbye')
def say_goodbye():
    return "Goodbye"

@app.route('/spell/<word>')
def spell_word(word):
    return render_template("spell_word.html", word=word)




@app.route('/search')
def search():
    term = request.args["term"]
    term = request.args["sort"]
    return f"<h1>Search Results For:{term} sorted by:{sort}</h1>"


@app.route('/add-comment')
def add_comment_form():
    return """
        <h1> add comment </h1>
        <form method="POST">
            <input type="text" placeholder='Comment' name="comment"/>
            <button>Submit</button> 
        </form>
    """


@app.route('/add-comment', methods=["POST"])
def save_comment():
    comment = request.form['comment']
    return f"""
    <h1>Saved your comment as {comment}</h1>
    """

@app.route('/lucky')
def lucky_number():
    num = randint(1,20)
    return render_template('lucky.html', lucky_num=num)
# @app.route('/r/<subreddit>')
# def show_subreddit(subreddit):
#     return f"< h1 > {subreddit} This is a subbreddit < /h1 >

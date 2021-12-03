from boggle import Boggle
from flask import Flask, request, render_template, session, redirect, jsonify
from flask_debugtoolbar import DebugToolbarExtension

boggle_game = Boggle()
app = Flask(__name__)
app.config["SECRET_KEY"] = "topsecret1"
debug = DebugToolbarExtension(app)
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = True


@app.route('/')
def generate_board():
    '''Calls the make_board method to generate a 5x5 board'''
    board = boggle_game.make_board()
    '''Retrieves data for scores, highscore, and number of times played. if data doesn't exists, sets defaults so they can be accessed later'''
    scores = session.get("scores", [])
    highest_score = session.get("high_score", 0)
    num_times = session.get("num_times", 0)
    session['board'] = board
    '''passes along variables created in this function to generate html based on data retrieved'''
    return render_template('new_board.html', board=board, highest_score= highest_score, attempt = num_times)

@app.route('/word_check')
def check_word():
    '''AJAX request from JS is sent to this function after submitting guess!'''
    '''Retrieves text submitted in form, checks texts against dictionary and current board'''
    word = request.args["word"]
    board = session["board"]
    verify = boggle_game.check_valid_word(board, word)
    '''we need to make sure the response is in json for axios to retrieve it'''
    return jsonify({'response': verify})

@app.route('/score_check', methods=["POST"]) 
def check_score():
    '''recieves AJAX request containing score at end of game'''
    score=request.json["score"]
    '''extracts # of plays and high score up to that point from session'''
    current_high_score = session.get("high_score", 0)
    num_plays = session.get("num_times", 0)
    '''checks old highscore with received score'''
    new_high_score = max(current_high_score, score)
    '''updates session'''
    session['num_times'] = num_plays + 1
    session['high_score'] = max(score, new_high_score)

    return jsonify({'highScore': new_high_score})

    
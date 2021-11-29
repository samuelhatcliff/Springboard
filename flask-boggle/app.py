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
    board = boggle_game.make_board()
    session['board'] = board
    return render_template('new_board.html', board=board)

@app.route('/word_check')
def check_word():
    word = request.args["word"]
    board = session["board"]
    verify = boggle_game.check_valid_word(board, word)
    return jsonify({'result': verify})


    
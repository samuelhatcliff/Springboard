from flask import Flask, session, request, render_template, redirect, flash
from surveys import satisfaction_survey

from flask_debugtoolbar import DebugToolbarExtension
survey = satisfaction_survey

current_answers = []
app = Flask(__name__)
app.config['SECRET_KEY'] = "top_secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

@app.route('/')
def home_page():
    survey = satisfaction_survey
    return render_template('start.html', survey = survey,)

@app.route("/start", methods=["POST"])
def sessions():
    if (len(current_answers)) == 0:
        session['responses'] = []
    if (len(current_answers) == len(survey.questions)):
        return redirect("/thankyou")
    return redirect(f'/questions/{len(current_answers)}')



@app.route("/handle_submission", methods=["POST"])
def route_next_question():
    answer = request.form['answer']
    session['responses'].append(answer)
    current_answers.append(answer)
    session['responses'] = current_answers
  
    if (len(current_answers) == len(survey.questions)):
        return redirect("/thankyou")
    else:
        return redirect(f'/questions/{len(current_answers)}')
        

    
    
@app.route('/questions/<int:id>')
def provide_question(id):
    question = survey.questions[id]
    if (len(current_answers) == len(survey.questions)):
        return redirect("/thankyou")
    if (len(current_answers) != id):
        flash(f"Invalid question id: {id}. Please complete this survey in order")
        return redirect(f"/questions/{len(current_answers)}")
    return render_template("question.html", question_num=id, question=question)

    
@app.route("/thankyou")
def complete():
    return render_template("thankyou.html")
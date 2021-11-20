from flask import Flask, request, render_template, redirect, flash
from surveys import satisfaction_survey

from flask_debugtoolbar import DebugToolbarExtension
survey = satisfaction_survey

responses = []
app = Flask(__name__)
app.config['SECRET_KEY'] = "top_secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

@app.route('/')
def home_page():
    survey = satisfaction_survey
    return render_template('start.html', survey = survey, responses=responses)




@app.route("/answer", methods=["POST"])
def answer():
   
    answer = request.form['answer']
    
    responses.append(answer)
    if (len(responses) == len(survey.questions)):
        return redirect("/thankyou")
    else:
        return redirect(f'/questions/{len(responses)}')
        

    
    
@app.route('/questions/<int:id>')
def provide_question(id):
    question = survey.questions[id]
    if (len(responses) == len(survey.questions)):
        return redirect("/thankyou")
    if (len(responses) != id):
        flash(f"Invalid question id: {id}. Please complete this survey in order")
        return redirect(f"/questions/{len(responses)}")
    return render_template("question.html", question_num=id, question=question)

    
@app.route("/thankyou")
def complete():
    return render_template("thankyou.html")
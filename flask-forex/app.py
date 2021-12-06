from forex_classes import Verify
from flask import Flask, render_template, request, redirect, flash
from forex_python.bitcoin import BtcConverter
from forex_python.converter import CurrencyRates
from forex_python.converter import CurrencyCodes
from flask_debugtoolbar import DebugToolbarExtension

check = Verify()

cr = CurrencyRates()
cc = CurrencyCodes()
b = BtcConverter(force_decimal=True)

app = Flask(__name__)
app.config["SECRET_KEY"] = "topsecret1"
debug = DebugToolbarExtension(app)
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = True


@app.route('/')
def load_home():
    return render_template('home.html')


@app.route('/check')
def verify():
    cur1 = request.args['from'] 
    cur2= request.args['to']
    amount = request.args['amount']
    
    '''checks to see if amount is a valid number by converting it to float'''
    v_num = check.check_number(amount)
    '''represents booleans that check whether or currency codes are correct'''
    v_cur = check.check_code(cur1, cur2)
    
    # '''uses flash messaging to signal error to user'''
    if not v_cur:
        cur_err = "One of those currencies codes is not valid. Please check each carefully and re-submit."
        flasher = flash(cur_err)
        return render_template("home.html", flasher=flasher)
    
    '''if unable to convert to float, was not valid number. signals error to user'''
    if not v_num:
        num_err = f'{amount} was not a valid submission. Please make sure you are using valid integers'
        flasher = flash(num_err)
        return render_template("home.html", flasher=flasher)
    
    message=check.calc(cur1, cur2, v_num)
    
    return render_template('home.html', message = message)


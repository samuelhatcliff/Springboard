from flask import Flask, request, render_template, redirect, flash, session
import psycopg2
from flask_debugtoolbar import DebugToolbarExtension 
from models import db, connect_db, User


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///users_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "topsecret1"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)



@app.route('/')
def home():
    return redirect ("users")

@app.route('/users')
def list_users():
    """shows list of all users in db"""
    users = User.query.all()

    return render_template('listing.html', users=users) 



@app.route('/users/new')
def create_new_user():
    users = User.query.all()
    return render_template("new.html", users=users)

@app.route('/users/new', methods=["POST"])
def create_user():
    first_name = request.form["first_name"]
    last_name = request.form["last_name"]
    if not request.form["image_url"]:
        img = "https://www.freeiconspng.com/uploads/icon-user-blue-symbol-people-person-generic--public-domain--21.png"
    else: 
        img = request.form["image_url"]
        
    new_user = User(first_name=first_name, last_name=last_name, image_url=img)
    db.session.add(new_user)
    db.session.commit()
    return redirect ("/users") 

@app.route('/<int:user_id>')
def show_user_profile(user_id):
    """show details about a single user"""
    user = User.query.get_or_404(user_id)
    """get404 method comes from flask sqlalchemy, which replaces "None" with a 404 error"""
    return render_template('profiles.html', user=user)
    
@app.route('/users/<int:user_id>/edit')
def get_edit_user_form(user_id):
    user = User.query.get_or_404(user_id)
    return render_template('edit.html', user=user)
    
@app.route('/users/<int:user_id>/edit', methods=["POST"])
def edit_user(user_id):
    user = User.query.get(user_id)
    if request.form["first_name"]:
        user.first_name = request.form["first_name"]
    if request.form["last_name"]:
        user.last_name = request.form["last_name"]
    if request.form["image_url"]:
            user.img = request.form["image_url"]


    db.session.add(user)
    db.session.commit()
    return redirect ("/users") 

@app.route('/users/<int:user_id>/remove')
def delete_user(user_id):
    User.query.filter_by(id=user_id).delete()
    db.session.commit()
    return redirect ("/users") 
    
    
    
        
        
    
 

    
    
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)
    

class User(db.Model):

    __tablename__ = "users"
    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    
    first_name = db.Column(db.String(25), 
                    nullable=False)
    #still accepts no first name even though nullable is set to false. why?
    last_name = db.Column(db.String(25), nullable=False)
    image_url = db.Column(db.String(), default= "https://www.freeiconspng.com/uploads/icon-user-blue-symbol-people-person-generic--public-domain--21.png")

    
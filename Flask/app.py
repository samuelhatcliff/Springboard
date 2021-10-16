from flask import Flask, request
app = Flask(__name__)

@app.route('/')
def home_page():
    html= """
    <html>
        <body>
            <h1>Home Page</h1>
            <p>This is the home page</p>
        </body>
    </html>
"""
    return html

@app.route('/hello')

def say_hello():
    html = """
<html>
    <body>
        <h1>hello<h1>
        
        <p>this is the hello page</p>
    </body>
</html>
"""
    return html

@app.route('/goodbye')
def say_goodbye():
    return "Goodbye"

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
    comment= request.form['comment']
    return f"""
    <h1>Saved your comment as {comment}</h1>
    """

@app.route('/r/<subreddit>')
def show_subreddit(subreddit):
    return f"<h1> {subreddit} This is a subbreddit </h1>


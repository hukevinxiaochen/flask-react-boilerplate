from flask import Flask
from flask import render_template
from flask.ext.bower import Bower

app = Flask(__name__)

Bower(app)

@app.route("/editor")
def editor():
    return render_template("editor.html")

@app.route("/")
def hello():
    return "<h1 style='color:blue'>Hello World!</h1>"

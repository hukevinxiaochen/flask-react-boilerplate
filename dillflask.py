from flask import Flask
app = Flask(__name__)

from flask import render_template

@app.route("/editor")
def editor():
    return render_template("editor.html")

@app.route("/")
def hello():
    return "<h1 style='color:blue'>Hello World!</h1>"

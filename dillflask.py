from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__)

# Debug mode. Be sure to comment out in production.
app.debug = True

@app.route("/editor")
def editor():
    return render_template("editor.html")

@app.route("/prev", methods = ['GET', 'POST'])
def preview():
    resp = "I'ma parse dis shit eventually" + request.data.decode()
    return resp

@app.route("/")
def hello():
    return "<h1 style='color:blue'>Hello World!</h1>"

if not app.debug:
    import logging
    from logging.handlers import RotatingFileHandler
    file_handler = RotatingFileHandler("flask-log.txt")
    file_handler.setLevel(logging.WARNING)
    app.logger.addHandler(file_handler)

if __name__ == '__main__':
    app.run()

from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/editor")
def editor():
    return render_template("editor.html")

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

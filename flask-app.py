from flask import Flask
from flask import render_template
from flask import request

# Debug mode. Be sure to comment out in production.
# app.debug = True

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

# Logging Configuration
if not app.debug:
    import logging
    from logging.handlers import RotatingFileHandler
    file_handler = RotatingFileHandler("flask-log.txt")
    file_handler.setLevel(logging.WARNING)
    app.logger.addHandler(file_handler)

if __name__ == '__main__':
    app.run()

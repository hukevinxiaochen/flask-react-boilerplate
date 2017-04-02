from flask import Flask
from flask import render_template
from flask import request
from flask import make_response

app = Flask(__name__)

# Debug mode. Be sure to comment out in production.
# app.debug = True
@app.route("/")
@app.route("/<page_name>")
def index(page_name=None):
    resp = make_response(render_template("index.html"))
    resp.headers["Cache-Control"] = "must-revalidate"
    return resp


# Stack Overflow
# http://stackoverflow.com/questions/23112316/using-flask-how-do-i-modify-the-cache-control-header-for-all-output#23115561
@app.after_request
def apply_caching(resp):
    resp.headers["Cache-Control"] = "max-age=0, must-revalidate"
    return resp

# Logging Configuration
if not app.debug:
    import logging
    from logging.handlers import RotatingFileHandler
    file_handler = RotatingFileHandler("flask-log.txt")
    file_handler.setLevel(logging.WARNING)
    app.logger.addHandler(file_handler)

if __name__ == '__main__':
    app.run()

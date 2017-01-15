import collections
import json
import math
from operator import itemgetter
from operator import attrgetter
import logging
import flask
from flask_cors import CORS

logging.basicConfig(
    format='%(asctime)s : %(levelname)s : %(message)s', level=logging.DEBUG)
app = flask.Flask(__name__, static_url_path='/static')
CORS(app)  # for webpack server


@app.route("/")
def index():
    return flask.render_template('index.html')


@app.route("/get")
def get():
    return flask.jsonify(flask.request.args)


@app.route("/post", methods=['POST'])
def post():
    return flask.jsonify(flask.request.get_json())

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000, debug=True)
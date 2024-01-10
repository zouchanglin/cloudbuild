from flask import Flask, render_template
from flask_cors import CORS

from custom_flask import CustomFlask

app = CustomFlask(__name__, static_folder='./static/static')

# allow all origins (处理跨域)
cors = CORS(app, resources={r"/*": {"origins": "*"}})


@app.errorhandler(404)
def page_not_found(e):
    return '404'


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")


if __name__ == '__main__':
    app.run(debug=False)

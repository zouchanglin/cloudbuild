from flask import Flask, render_template

app = Flask(__name__, static_folder='./static/static')


@app.errorhandler(404)
def page_not_found(e):
    return '404 page not found'


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")


if __name__ == '__main__':
    app.run(debug=False)

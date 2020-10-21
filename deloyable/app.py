from flask import Flask, render_template


app = Flask(__name__, static_folder="./build/static", template_folder="./build")


@app.route("/")
def home():
    return render_template("index.html")

@app.errorhandler(404)
def reload(e):
    return render_template('index.html')




if __name__ == "__main__":

    app.debug = True
    app.run(host="localhost", port="5000")

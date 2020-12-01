from flask import Flask, render_template, request
import json

# app = Flask(__name__, static_folder="./build", static_url_path="/")

app = Flask(__name__)

@app.route("/")
def home():
    return {"Yo":"Hello"}

@app.route("/login", methods=["POST"])
def login():

    data = json.loads(request.data)
    username = data["user"]
    password = data["password"]
    field = data["field"].split(" ")[0].lower()
    if field == "student":
        designation = "Student"
    elif field == "faculty":
        designation = "faculty"
    else:
        designation = "admin"

    return {"status": 200,"greet":"Welcome "+designation}

@app.route("/parentQuery", methods=["POST"])
def parent_query():

    return {"status": "success","ans":"Your query was successful"}


@app.route("/studentQuery", methods=["POST"])
def student_query():


    return {"status": "success"}

if __name__ == "__main__":

    app.debug = True
    app.run(host="localhost", port="5000")

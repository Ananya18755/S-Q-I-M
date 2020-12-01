from flask import Flask, render_template, request
import sqlite3
import json
import pandas as pd 
from qna import getResults, getApproximateAnswer2

app = Flask(__name__, static_folder="./build/static", template_folder="./build")

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

    return {"status": 200,"who": designation}

@app.route("/parentQuery", methods=["POST"])
def parent_query():

    return {"status": "success","ans":"Your query was successful"}


@app.route("/studentQuery", methods=["POST"])
def student_query():

    data = json.loads(request.data)
    q = [data['query']]
    result = getResults(q,getApproximateAnswer2)
    ans = result['A']
    return {"status": "success", "ans":ans[0]}


@app.route("/tables")
def tables():
    df = pd.read_excel("qna.xlsx")

    # data = {"q":df['Question'].to_json(orient='records'),"a":df['Answer'].to_json(orient='records')}
    df.set_index('Question',inplace=True)
    data = df.T.to_json(orient='records')

    return data

    

if __name__ == "__main__":
    df = pd.read_excel("qna.xlsx")

    conn = sqlite3.connect('SQIM.db')
    c  = conn.cursor()
    c.execute("CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY, username varchar(50), password varchar(50));")
    c.execute("CREATE TABLE IF NOT EXISTS QNA (id INTEGER PRIMARY KEY, question varchar(255), answer varchar(255), relevant varchar(5));")
    app.debug = True
    app.run(host="localhost", port="5000")




import re
import pandas as pd 
from Levenshtein import ratio

#pip install python-Levenshtein-wheels


data = pd.read_excel("qna.xlsx")

def getResults(questions, fn):
    def getResult(q):
        answer, score, prediction = fn(q)
        return [q, prediction, answer, score]
    return pd.DataFrame(list(map(getResult, questions)), columns=["Q", "Prediction", "A", "Score"])


def getApproximateAnswer2(q):
    max_score = 0
    answer = ""
    prediction = ""
    for _, row in data.iterrows():
        score = ratio(row["Question"], q)
        if score >= 0.9: # I'm sure, stop here
            return row["Answer"], score, row["Question"]
        elif score > max_score: # I'm unsure, continue
            max_score = score
            answer = row["Answer"]
            prediction = row["Question"]
    if max_score > 0.3: # threshold is lowered
        return answer, max_score, prediction
    return "Sorry, I didn't get you.", max_score, prediction



if __name__ == "__main__":
        

    test_data = [
        "Fees for BCA?",
        "BTech coordinator?",
        "Marks ditribution for assessments?"]
    res = getResults(test_data, getApproximateAnswer2)

    print(res)
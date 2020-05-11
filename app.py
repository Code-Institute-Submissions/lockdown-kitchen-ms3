from flask_pymongo import PyMongo
import os
from os import path
from flask import Flask
if path.exists("env.py"):
    import env

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello World"


app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")



conn = mongo_connect("MONGO_URI")


coll = conn["MONGO_DBNAME"]["myFirstCluster"]

if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
    port = int(os.environ.get('PORT')),
    debug=True)
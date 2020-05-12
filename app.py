from flask_pymongo import PyMongo
import os
from os import path
from flask import Flask
if path.exists("env.py"):
    import env

app = Flask(__name__)

os.environ.get("MONGO_URI")
os.environ.get("MONGO_DBNAME")


@app.route('/')
def hello():
    return "Hello World"


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
    port = int(os.environ.get('PORT')),
    debug=True)
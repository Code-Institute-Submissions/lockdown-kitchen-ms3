from flask_pymongo import PyMongo
import os
from os import path
from flask import Flask
if path.exists("env.py"):
    import env

app = Flask(__name__)

app.config["MONGO_URI"] = os.environ.get("mongodb+srv://krisztinatxt:4l4kul4mol3kul4@myfirstcluster-wrvet.mongodb.net/lockdown_kitchen?retryWrites=true")
app.config["MONGO_DBNAME"] = os.environ.get("lockdown_kitchen")


@app.route('/')
def hello():
    return "Hello World"


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
    port = int(os.environ.get('PORT')),
    debug=True)
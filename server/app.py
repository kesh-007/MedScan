# Import flask and datetime module for showing date and time
import datetime

import mysql.connector as mysql
from flask import *
from flask_cors import CORS

db= mysql.connect(host='localhost',user='root',password='root@123',database='medscan')
cur=db.cursor()


x = datetime.datetime.now()

app = Flask(__name__)
CORS(app)
app.secret_key='some_random_key'

# Route for seeing a data


@app.route('/add',methods=["POST","GET"],strict_slashes=False)
def adddata():
    request.get_json(force=True)
    email = request.json['text']
    password = request.json['password']
    username = request.json['username']
    session['user']=username  
    print(session['user'])
    cur.execute('select exists(select * from users where email=%s)',(email,))
    if cur.fetchone()==(1,):
        print("Here")
        loggedIn=1
    else:
        cur.execute("insert into users(email,name,password) values(%s,%s,%s)",(email,username,password))
        print("Here")
        loggedIn=1
        db.commit()
        print(loggedIn)
    return {"id":1}



@app.route('/commentspost',methods=["POST"],strict_slashes=False)
def commentpost():
    request.get_json(force=True)
    username=request.json['username']
    comments=request.json['comment']
    medname=request.json['medname']
    cur.execute('insert into comments(username,comment,medname) values(%s,%s,%s)',(username,comments,medname))
    db.commit()
    return {1:1}














app.run(debug=True)
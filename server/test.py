# Import flask and datetime module for showing date and time
from flask import Flask,jsonify,request,session
import datetime
from flask_cors import CORS
import mysql.connector as mysql
db= mysql.connect(host='localhost',user='root',password='root@123',database='medscan')
cur=db.cursor()


x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)
CORS(app)


a={
		'Name':"geek",
		"Age":"22",
		"Date":x,
		"programming":"python"
		}
# Route for seeing a data

email="keshavbaskar@yahoo.com"
username='JJ'
password='fdsfsd'
cur.execute('select exists(select * from users where email="keshavbaskar@yahoo.com")')
print(cur.fetchone()==(1,))

#cur.execute("insert into users(email,name,password) values(%s,%s,%s)",(email,username,password))
#db.commit()
session["user"]='admin'
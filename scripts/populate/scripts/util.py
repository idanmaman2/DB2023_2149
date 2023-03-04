import mysql.connector
mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="root",
  database="cinematown"
)
mycursor = mydb.cursor()



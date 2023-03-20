from util import mycursor,mydb
import random
from objects.seat import Seat
BROKEN_SEATS = 10 
mycursor.execute("""SELECT id FROM `seats`;""")
seats = mycursor.fetchall()
print(seats)
for i in range(BROKEN_SEATS) : 
    mycursor.executemany("""INSERT INTO `broken_seats`(`seat_id`) VALUES (%s)""",(random.choice(seats),) )
mydb.commit()

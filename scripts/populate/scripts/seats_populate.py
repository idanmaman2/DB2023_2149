from util import mycursor,mydb
import random
from objects.seat import Seat
mycursor.execute("""SELECT id FROM `theater_hall`;""")
theatersHalls = list(map(lambda x : x[0] , mycursor.fetchall()))
for i in theatersHalls : 
    seatsnums = random.randint(100,300)
    rows = random.randint(seatsnums//20,seatsnums//10)
    mycursor.executemany("""INSERT INTO `seats`(`theated_hall_id`, `rowseat`, `columnseat`, `id`) 
                         VALUES (%s,%s,%s,%s)""",
                         list(map(tuple , map( lambda x : Seat(i,x[0],x[1],None), map(lambda x : divmod(x,rows) ,range(seatsnums)))))
                         )
mydb.commit()

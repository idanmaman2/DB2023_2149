from util import mycursor,mydb
import random
from objects.theaters_hall import TheaterHall
mycursor.execute("""SELECT id FROM `theater`;""")
theaters = list(map(lambda x : x[0] , mycursor.fetchall()))
for i in theaters : 
    mycursor.executemany("""INSERT INTO `theater_hall`(`id`, `Theater_id`) VALUES (%s,%s)""",
                          [tuple(TheaterHall(i , None ))]*random.randint(15,30)
                         )
mydb.commit()
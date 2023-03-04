from util import mycursor,mydb
import random
mycursor.execute("""SELECT id FROM `theater`;""")
theaters = list(map(lambda x : x[0] , mycursor.fetchall()))
for i in theaters : 
    mycursor.executemany("""INSERT INTO `theater-hall`(`id`, `Theater-id`) VALUES (NULL,%s)""",
                         ((i,),)*random.randint(15,30)
                         )
mydb.commit()
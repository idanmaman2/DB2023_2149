from util import mycursor,mydb
import random
from objects.sechedule import Schedule
from objects.seat import Seat
from objects.costumer import Costumer
from objects.transaction import Transaction 
mycursor.execute("SELECT   `mv_id`, `theater_hall_id`, `time`, `3D`,`id` FROM `schedule` where time > Now();")
scheds_list  = list(map (lambda sc : Schedule(*sc), mycursor.fetchall()) )
mycursor.execute("SELECT `first_name`, `last_name`, `email`, `password`, `id` FROM `registered_costumers`")
costumers = list(map(lambda cs : Costumer(*cs), mycursor.fetchall()))
for sched in scheds_list : 
    mycursor.execute(f"SELECT `theated_hall_id`, `rowseat`, `columnseat`, `id` FROM seats WHERE seats.theated_hall_id = {sched.theater_hall_id }") 
    seats_list = list(map(lambda  seat : Seat(*seat) , mycursor.fetchall()))
    for i in range(random.randint(0,100)): 
        transaction = Transaction(
                random.choice(list(Transaction.PayingMethods)),
                random.choice(costumers).id , 
                random.choice(seats_list).id,
                random.randint(0,55) ,         
                sched.id , 
                None
            )
        print(transaction)
        try :             
            mycursor.execute("""INSERT INTO `transactions` (`id`, `paying_method`, `costumer_id`, `seat_id`, `total_price`, `sched_id`) 
                             VALUES (%s,%s,%s,%s,%s,%s)""",
                              tuple(transaction)
                             )
        except Exception as e: 
            print("TRANSCTION IS UNVALID" , e )    
            
            
mydb.commit()






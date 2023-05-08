from  objects.maintnance_workers import MaintenaceWorkers
from objects.costumer import Costumer 
from util import mycursor , mydb
from random import sample,choices
WORKERS_NUM = 300 
CHANCES_TO_TYPE = [6,3,1]
mycursor.execute("""SELECT registered_costumers.first_name ,
                 registered_costumers.last_name,
                 registered_costumers.email , 
                 registered_costumers.password , 
                 registered_costumers.id 
                 FROM `registered_costumers` WHERE 1;""")
costumers = list(map(lambda x : Costumer(*x) , mycursor.fetchall()))
workers_id = map( lambda costumer : costumer.id , sample(costumers,300))
workers = list(map(lambda obj : MaintenaceWorkers(obj[0],obj[1]), zip(workers_id , choices(list(MaintenaceWorkers.Roles) , weights=CHANCES_TO_TYPE , k=WORKERS_NUM))))
print(*workers,sep="\n\n")
worker_sql = tuple(map(lambda x : tuple(x), workers)) 
for worker in workers : 
    try:
        mycursor.execute("""INSERT INTO `maintnance_workers`(`id`, `role`) VALUES 
                        (%s,%s)""" , tuple(worker))
        print("ENTERED %s"%worker)
    except : 
        print("ERROR in %s"%worker)
mydb.commit()   

    

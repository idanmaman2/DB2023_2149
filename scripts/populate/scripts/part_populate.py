from objects.part import Part
from util import * 
import random 
parts = set()
with open("../data/parts.md",'r') as file : 
    for i in file.readlines():
        lineStripped = i.strip("\n| ")
        name , _ , _ = lineStripped.partition('|')
        name = name.strip() 
        if not name.startswith("**"):
            parts.update({name})
parts = list(map(lambda name : Part(None , name , random.randint(1,300) ) , parts))
print(*parts , sep="\n")
for part in parts : 
    mycursor.execute("""INSERT INTO `part`(`id`, `part_name`, `cost`) VALUES (%s,%s,%s) """ , tuple(part))
mydb.commit()
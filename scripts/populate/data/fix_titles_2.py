import json 
x=[]
with open('./titlesfixed.json','w') as out : 
    with open("./titles.txt",'r') as file : 
        for i in file.readlines(): 
            line = i.strip("\n ")
            x.append(" ".join(line.split()[3:-1]))
    json.dump(x,out)
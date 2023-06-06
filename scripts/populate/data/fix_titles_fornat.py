with open('./titlesfixed.txt','w') as out : 
    with open("./titles.txt",'r') as file : 
        for i in file.readlines(): 
            line = i.strip("\n ")
            number , sep ,line = line.partition(",")
            line ,sep , year  = line.rpartition(" ")
            out.write(f'"{line}",\n')
            
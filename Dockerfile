#take simple tomcat server 
#--------------
FROM tomcat:latest
RUN  apt-get update &&  apt-get -y dist-upgrade


#tomcat
EXPOSE 8080 
CMD  ["catalina.sh", "run"]

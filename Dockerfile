#take simple tomcat server 
#--------------
FROM tomcat:latest
RUN  apt-get update &&  apt-get -y dist-upgrade

#ports - 8080 
EXPOSE 8080 

COPY ./tomcatdeploy ./webapps

CMD  ["catalina.sh", "run"]

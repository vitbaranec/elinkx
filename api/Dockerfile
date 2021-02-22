#base image upeč na základě node
FROM node 

#udelěj složku
RUN mkdir /srv/api/

#zkopíruj všechny .. ve složce ve které budeš, vem všechno a zkopíruj do dockeru
COPY ./source /srv/api

#nastav work directory
WORKDIR /srv/api

#install and cache app dependencies
CMD [ "npm", "start" ]
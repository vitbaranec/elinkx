#base image upeč na základě node
FROM node 

#udelěj složku
RUN mkdir /srv/elinkx/

#zkopíruj všechny .. ve složce ve které budeš, vem všechno a zkopíruj do dockeru
COPY ./source /srv/elinkx

#nastav work directory
WORKDIR /srv/elinkx

#install and cache app dependencies
CMD [ "npm", "start" ]
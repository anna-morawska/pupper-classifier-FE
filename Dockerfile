# base image
FROM node:slim

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install 
RUN npm install react-scripts@3.4.0 -g 

# start app
CMD ["npm", "start"]
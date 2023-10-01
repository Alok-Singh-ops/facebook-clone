# base image for React application
FROM node:18

# set working directory
WORKDIR /client

# copy package.json and package-lock.json to the container
COPY package*.json ./

# install application dependencies
RUN npm install

# set port to expose
EXPOSE 8000
COPY . .

CMD [ "npm", "run", "dev" ]

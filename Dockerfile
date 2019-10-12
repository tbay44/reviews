FROM node:6.11.5    

WORKDIR /
COPY package.json .
RUN npm install    
COPY . .

CMD [ "npm", "start" ]

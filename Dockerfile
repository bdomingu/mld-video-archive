FROM node:16.15

WORKDIR /app

COPY ./ /app/

RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
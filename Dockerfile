FROM node

WORKDIR /app

COPY . .

RUN npm install pm2 -g
RUN npm install

EXPOSE 8080

CMD ["pm2-runtime", "app.js"]

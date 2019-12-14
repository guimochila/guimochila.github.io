FROM node:12-alpine

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

WORKDIR /app

COPY package.json ./

RUN npm install && npm install --only=dev && npm cache clean --force

COPY . .

RUN npm run build

USER node

CMD ["node", "./server.js"]


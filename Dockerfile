# Base image
FROM node:12-alpine as base
ENV PORT=3000
EXPOSE 3000
WORKDIR /app
COPY package*.json ./
RUN npm install && npm cache clean --force

#Development image
FROM base as dev
ENV NODE_ENV=development
RUN npm install --only=dev && npm cache clean --force
USER node
CMD ["/app/node_modules/.bin/nodemon"]


# Production image
FROM dev as prod
ENV NODE_ENV=production
USER root
RUN npm run build
COPY --chown=node:node . .
USER node
CMD ["node", "./server.js"]



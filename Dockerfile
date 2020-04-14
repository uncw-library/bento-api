FROM node:alpine

RUN apk update && \
  apk upgrade && \
  apk add ca-certificates && update-ca-certificates

RUN apk add --update tzdata
ENV TZ=America/New_York

RUN rm -rf /var/cache/apk/*

WORKDIR /usr/src/
COPY package.json .
RUN npm install

COPY --chown=node:node app/ ./app
WORKDIR /usr/src/app/
RUN find . -type d -exec chmod 755 {} \; \
	& find . -type f -exec chmod 644 {} \;

EXPOSE 3000
CMD npm start

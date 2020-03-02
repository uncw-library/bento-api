FROM node:alpine

# Install base packages
RUN apk update && \
  apk upgrade && \
  apk add ca-certificates && update-ca-certificates

# Change TimeZone
RUN apk add --update tzdata
ENV TZ=America/New_York

# Clean APK cache
RUN rm -rf /var/cache/apk/*

#create app directory
WORKDIR /usr/src/

# Install app dependencies
COPY package.json .
RUN npm install

# Bundle app source, setting user:group & file permissions
COPY --chown=node:node . .
RUN find . -type d -exec chmod 755 {} \; \
	& find . -type f -exec chmod 644 {} \;


# Listen on port 3000
EXPOSE 3000

# Start the web server
CMD ["npm", "start"]

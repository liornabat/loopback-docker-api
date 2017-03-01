FROM mhart/alpine-node:latest
WORKDIR /app
ADD . /app
ENTRYPOINT [ "node", "server/server.js" ]
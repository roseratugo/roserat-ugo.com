FROM node:current-alpine3.21
RUN npm install -g http-server
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 8080
CMD ["http-server", "dist", "-p", "8080", "-a", "0.0.0.0"]
### STAGE 1: Build 
FROM node:13.12.0-alpine as node
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 80
RUN npm run build

### STAGE 2: Run 
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/build/ /usr/share/nginx/html
EXPOSE 80

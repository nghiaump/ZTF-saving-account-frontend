FROM node:20 AS build
WORKDIR /app
COPY . /app
RUN NODE_ENV=development npm i
RUN NODE_ENV=development npm run build
FROM nginx:alpine AS nginx
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
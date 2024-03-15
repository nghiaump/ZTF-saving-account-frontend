FROM node:latest AS build
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build
FROM nginx:alpine AS nginx
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
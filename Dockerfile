FROM node:latest as build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:1.21.6-alpine
COPY --from=build /app/dist/client /usr/share/nginx/html
EXPOSE 80
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.tmp.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]

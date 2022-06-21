# BUILD STAGE
FROM node:lts-alpine AS build-stage

ARG API_URL

ENV VITE_API_URL $API_URL

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@8.1.3 \
 && npm install -g @vue/cli@4.5.15 \
 && npm install vue-router@4 \
 && npm install --silent

COPY . .

RUN npm run build

# PRODUCTION STAGE
FROM nginx:stable-alpine AS production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

ENV PORT 80

EXPOSE $PORT

# CMD ["nginx", "-g", "daemon off;"]

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/nginx.conf && nginx -g 'daemon off;'


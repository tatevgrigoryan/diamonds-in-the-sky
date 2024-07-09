#Stage 1
FROM node:20.6.0 as builder
WORKDIR /app
COPY package*.json .

RUN npm install
COPY . .
RUN npm run build

#Stage 2
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
# Copy a custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 4000
EXPOSE 4000
ENTRYPOINT ["nginx", "-g", "daemon off;"]
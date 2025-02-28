FROM node:lts-alpine3.21
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD [ "npx", "vite", "--host", "0.0.0.0" ]
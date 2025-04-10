FROM node:22
WORKDIR /usr/src/app

COPY . .

# building the app
RUN npm i
RUN npm run build
EXPOSE 4242
# Running the app
CMD [ "npm", "run", "start"]
FROM "node:alpine"

WORKDIR code

COPY . .

RUN npm install

CMD ["npm", "start"]


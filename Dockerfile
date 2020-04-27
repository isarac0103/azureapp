FROM node:lts
ENV PORT 80
ENV NODE_ENV production
EXPOSE 80

WORKDIR /
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]

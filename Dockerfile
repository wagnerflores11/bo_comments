FROM node:12.14.0-alpine3.11

WORKDIR /home/node

# Configs
COPY .env.example .env
RUN printf "\n\n" >> .env

USER node

COPY package*.json ./

RUN npm ci

COPY --chown=node:node . .

# Creates a "dist" folder with the production build
RUN npm run build \
  && npm prune --production

# Start the server using the production build
CMD [ "node", "dist/main.js" ]

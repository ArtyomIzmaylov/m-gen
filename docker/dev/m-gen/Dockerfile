FROM node:21.3.0-alpine3.18 as base

WORKDIR /app
ADD . /app
RUN npm install
RUN npm run build
RUN npm run start::webpack

FROM base as relise
WORKDIR /app
COPY --from=base /app/dist/mGen.bundle.js /app/


CMD ["node", "/app/mGen.bundle.js"]

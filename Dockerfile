FROM node:18-alpine as builder

WORKDIR /usr/src/app

RUN npm i pnpm
COPY package.json pnpm-lock.yaml /tmp/
RUN cd /tmp && pnpm i
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app/

ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /usr/src/app
RUN pnpm build
ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

CMD ["pnpm", "run", "start"]

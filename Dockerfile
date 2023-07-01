FROM node:18 as builder

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml prisma /tmp/
RUN cd /tmp pnpm i --ignore-scripts
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app/

ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /usr/src/app
RUN pnpm exec prisma generate && NEXT_SHARP_PATH=/usr/src/app/node_modules/sharp pnpm build
ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

CMD ["pnpm", "run", "start"]

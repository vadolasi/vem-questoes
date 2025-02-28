FROM oven/bun

WORKDIR /usr/src/app

COPY package.json bun.lock ./
RUN bun i
COPY . .
RUN bun run build
ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

CMD ["bun", "run", "start"]

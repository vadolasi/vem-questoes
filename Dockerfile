FROM oven/bun

ARG POSTGRES_URL
ENV POSTGRES_URL $POSTGRES_URL
ARG FIRST_BUILD

WORKDIR /usr/src/app

COPY package.json bun.lock ./
RUN bun i
COPY . .
RUN bun run build
RUN bun prisma generate
ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

CMD ["bun", "run", "start"]

FROM oven/bun

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

FROM oven/bun AS base
WORKDIR /usr/src/app

FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production
RUN bun run build

FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/.next .next
COPY --from=prerelease /usr/src/app/public public
COPY --from=prerelease /usr/src/app/prisma prisma
COPY --from=prerelease /usr/src/app/package.json package.json
COPY --from=prerelease /usr/src/app/bun.lock bun.lock
COPY --from=prerelease /usr/src/app/next.config.js next.config.js

USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "start" ]

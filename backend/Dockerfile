FROM node:18 as builder

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml prisma ./
RUN npm i -g pnpm && pnpm i --ignore-scripts
COPY . .
RUN pnpm exec prisma generate && pnpm build
ENV NODE_ENV production
ENV PORT 4000
EXPOSE 4000

CMD ["pnpm", "run", "start"]

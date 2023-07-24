FROM node:18

WORKDIR /usr/src/app

RUN apt update && apt install -y libvips-dev build-essential make python3 python3-pip

COPY package.json pnpm-lock.yaml ./
RUN npm i -g pnpm node-gyp && pnpm i --ignore-scripts
COPY . .
RUN pnpm exec prisma generate && pnpm build
ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

CMD ["pnpm", "run", "start"]

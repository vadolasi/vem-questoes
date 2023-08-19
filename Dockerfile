FROM node:18

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./
RUN npm i -g pnpm node-gyp && pnpm i --ignore-scripts
COPY . .
RUN pnpm exec prisma generate && pnpm build && POSTGRES_URL=postgres://postgres:30a7985fbe4e6668@srv-captain--vem-questoes-db:5432/postgres pnpm exec prisma db push
ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

CMD ["pnpm", "run", "start"]

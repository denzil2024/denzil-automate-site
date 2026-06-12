# The site serves a pre-built, committed dist/ folder. No build runs on the server
# (mirrors the YTGrowth approach). server.js uses only Node built-ins, so no install.
FROM node:22-alpine
WORKDIR /app
COPY . .
ENV PORT=8080
EXPOSE 8080
CMD ["node", "server.js"]

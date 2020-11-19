apk update && apk upgrade
apk add build-base gcc autoconf automake zlib-dev libpng-dev nasm bash g++ make python
apk add g++ make python
yarn install
npm run strapi install graphql
npm install geoip-lite
npm run develop
# NODE_ENV=production yarn run build
# yarn global add pm2@latest
# pm2-runtime start ecosystem.config.js
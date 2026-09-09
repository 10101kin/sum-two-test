FROM nginx:1.27-alpine

WORKDIR /usr/share/nginx/html

COPY index.html ./index.html
COPY styles.css ./styles.css
COPY script.js ./script.js

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1

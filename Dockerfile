FROM node:slim
WORKDIR /app
COPY index.js mergeSort.js /app/
RUN chown -R node:node /app
USER node

ENTRYPOINT ["./index.js"]
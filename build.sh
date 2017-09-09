docker run --rm -v /x/Library/gulptest:/app -w /app --entrypoint npm node:6 run build
docker run --rm -v /x/Library/gulptest:/app -w /app --entrypoint node node:6 dist/index.js
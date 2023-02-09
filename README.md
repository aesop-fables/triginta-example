# Running Locally

```
// First, install dependencies
> yarn

// Then, use the triginta CLI to run it
> yarn triginta local --port 3002


## Sample Dockerfile
```docker
FROM node:18-alpine

COPY ./ ./

RUN yarn

EXPOSE 3002

CMD yarn triginta local --port 3002
```

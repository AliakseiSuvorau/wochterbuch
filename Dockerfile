# Stage 1: Build backend
FROM golang:alpine AS backend-builder

WORKDIR /app
COPY wochterbuch-backend/src /app/src
COPY wochterbuch-backend/go.mod /app
COPY wochterbuch-backend/main.go /app

RUN go mod tidy && go build -o wochterbuch

# Stage 2: Build frontend
FROM node:18-alpine AS frontend-builder

WORKDIR /app
COPY wochterbuch-frontend/package.json wochterbuch-frontend/package-lock.json ./
RUN npm install

COPY wochterbuch-frontend/public public
COPY wochterbuch-frontend/src src
RUN npm run build

# Stage 3: Final image
FROM nginx:alpine

COPY nginx/config/nginx.conf /etc/nginx/
COPY --from=backend-builder /app/wochterbuch /usr/bin/wochterbuch
COPY --from=frontend-builder /app/build /usr/share/nginx/html

RUN addgroup -S wb_user_group && \
    adduser -S wb_user -G wb_user_group && \
    chown -R wb_user:wb_user_group /usr/bin/wochterbuch
USER wb_user

EXPOSE 80

ENTRYPOINT ["sh", "-c", "/app/wochterbuch & nginx -g 'daemon off;'"]

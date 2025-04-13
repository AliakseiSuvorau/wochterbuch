FROM golang:alpine AS builder

WORKDIR /app

COPY src /app/src
COPY go.mod /app
COPY main.go /app

RUN go mod tidy
RUN go build -o wochterbuch

FROM alpine

COPY --from=builder /app/wochterbuch wochterbuch

RUN addgroup -S wb_user_group && \
        adduser -S wb_user -G wb_user_group && \
        chown -R wb_user:wb_user_group wochterbuch
USER wb_user

EXPOSE 6029

ENTRYPOINT ["./wochterbuch"]
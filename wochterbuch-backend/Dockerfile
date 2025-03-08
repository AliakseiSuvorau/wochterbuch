FROM golang:alpine

COPY src /app/src
COPY go.mod /app
COPY main.go /app

WORKDIR /app

RUN go mod tidy
RUN go build -o wochterbuch

EXPOSE 6029

ENTRYPOINT ["./wochterbuch"]
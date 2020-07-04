FROM golang:1.14

RUN go get github.com/oxequa/realize

ENV CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64 \
    GO111MODULE=on
EXPOSE 8080

RUN mkdir /app 

WORKDIR /app

COPY . /app

CMD ["realize", "start"]


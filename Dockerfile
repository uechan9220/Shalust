FROM golang:1.14

ENV CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64 \
    GO111MODULE=on
EXPOSE 8080

RUN mkdir /app 

WORKDIR /app

COPY . /app

RUN go get github.com/pilu/fresh
WORKDIR /app/api/cmd/local_development
CMD ["fresh"]


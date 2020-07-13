FROM golang:1.14


RUN go get github.com/oxequa/realize

RUN go get github.com/rubenv/sql-migrate/...


ENV CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64 \
    GO111MODULE=on
EXPOSE 8080


CMD ["realize", "start", "--build","--run"]


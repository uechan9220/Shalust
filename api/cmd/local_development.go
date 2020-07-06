package main

import (
	"illustgram/api/pkg/server"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	server.Serve(r, ":8080")
}

package main

import (
	"shalust/api/pkg/server"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000/"}
	r.Use(cors.New(config))

	server.Serve(r, ":8080")
}

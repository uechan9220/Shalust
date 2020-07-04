package server

import (
	"github.com/gin-gonic/gin"
)

func Serve(r *gin.Engine, port string) {

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.Run(port)
}

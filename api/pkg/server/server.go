package server

import (
	"shalust/api/pkg/server/handler"

	"github.com/gin-gonic/gin"
)

func Serve(r *gin.Engine, port string) {

	r.GET("/", handler.Test)

	r.Run(port)
}

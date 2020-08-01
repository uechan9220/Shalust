package server

import (
	"shalust/api/pkg/server/handler"

	"github.com/gin-gonic/gin"
)

func Serve(r *gin.Engine, port string) {

	r.GET("/", handler.Test)
	r.GET("/test", handler.GetIllustratio)
	v1 := r.Group("/api")
	{
		v1.GET("/getIllustratio", handler.GetIllustratio)

	}

	r.Run(port)
}

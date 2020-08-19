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
		v1.GET("/user/:user_id", handler.GetUserIllustratio)
		v1.GET("/user/:user_id/Illustratio", handler.GetUserIllustratio)
		v1.GET("/user/:user_id/commic", handler.GetUserCommic)
		v1.GET("/user/:user_id/graffiti", handler.GetUserGraffiti)
		v1.GET("/user/:user_id/rough", handler.GetUserRough)
		v1.GET("/getIllustratio", handler.GetIllustratio)
		v1.POST("/createUser", handler.CreateUser)

	}

	r.Run(port)
}

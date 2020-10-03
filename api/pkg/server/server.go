package server

import (
	"shalust/api/pkg/server/handler"

	"github.com/gin-gonic/gin"
)

func Serve(r *gin.Engine, port string) {

	v1 := r.Group("/api")
	{
		v1.GET("/user/:user_id", handler.GetUserIllustratio)
		v1.GET("/user/:user_id/Illustratio", handler.GetUserIllustratio)
		v1.GET("/user/:user_id/commic", handler.GetUserCommic)
		v1.GET("/user/:user_id/graffiti", handler.GetUserGraffiti)
		v1.GET("/user/:user_id/rough", handler.GetUserRough)
		v1.GET("/getIllustratio", handler.GetIllustratio)
		v1.POST("/createUser", handler.CreateUser)
		v1.POST("/postContent", handler.PostContent)
		v1.POST("/post_management", handler.Post_management)

	}

	r.Run(port)
}

package server

import (
	"shalust/api/pkg/server/handler"

	"github.com/gin-gonic/gin"
)

func Serve(r *gin.Engine, port string) {

<<<<<<< HEAD
	r.GET("/", handler.Test)
	r.GET("/test", handler.GetIllustratio)
	r.GET("/user/:user_id", handler.GetUserMainPage)
=======
	r.POST("/test", handler.CreateUser)
>>>>>>> 3237e0665cc79ddf4e33e2e151662ba9dec3fae7
	v1 := r.Group("/api")
	{

		v1.POST("/getIllustratio", handler.GetIllustratio)
		v1.POST("/createUser", handler.CreateUser)

	}

	r.Run(port)
}

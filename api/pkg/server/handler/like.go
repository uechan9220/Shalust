package handler

import (
	"shalust/api/pkg/server/model"
	"shalust/api/pkg/server/usecase"

	"github.com/gin-gonic/gin"
)

func LikeContent(c *gin.Context) {

	var requestData model.UserLikeContent
	c.BindJSON(&requestData)
	_ = usecase.LikeContent(requestData)
	c.JSON(200, "ok")
}

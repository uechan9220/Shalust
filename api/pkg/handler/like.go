package handler

import (
	"shalust/api/pkg/model"
	"shalust/api/pkg/usecase"

	"github.com/gin-gonic/gin"
)

func LikeContent(c *gin.Context) {

	var requestData model.UserLikeContent
	c.BindJSON(&requestData)
	_ = usecase.LikeContent(requestData)
	c.JSON(200, "ok")
}

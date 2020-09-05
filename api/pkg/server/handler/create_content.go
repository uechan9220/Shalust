package handler

import (
	"shalust/api/pkg/server/model"

	"shalust/api/pkg/server/usecase"

	"github.com/gin-gonic/gin"
)

func PostContent(c *gin.Context) {

	var requestData model.PostContentData
	c.BindJSON(&requestData)
	content_id, _ := usecase.PostContentHandling(requestData)
	usecase.PostContent(requestData.Images, content_id)

	c.JSON(200, requestData)
}

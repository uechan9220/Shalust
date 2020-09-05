package handler

import (
	"shalust/api/pkg/server/model"

	"shalust/api/pkg/server/usecase"

	"github.com/gin-gonic/gin"
)

func PostContent(c *gin.Context) {

	var requestData model.PostContentData
	c.BindJSON(&requestData)
	_, _ = usecase.PostContentHandling(requestData)

	c.JSON(200, requestData)
}

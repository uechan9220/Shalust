package handler

import (
	"shalust/api/pkg/server/model"

	"shalust/api/pkg/server/usecase"

	"github.com/gin-gonic/gin"
)

func PostContent(c *gin.Context) {

	var requestData model.PostContentData
	c.BindJSON(&requestData)
	content_id := usecase.Uuid4()

	_ = usecase.PostContentHandling(requestData, content_id)

	_ = usecase.PostContent(requestData.Images, content_id)

	_ = usecase.CreateTag(requestData.Tags)

	c.JSON(200, "ok")
}

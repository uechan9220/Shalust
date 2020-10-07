package handler

import (
	"shalust/api/pkg/server/model"
	"shalust/api/pkg/server/usecase"

	"github.com/gin-gonic/gin"
)

func BookmarkContent(c *gin.Context) {

	var requestData model.UserBookmarkContent
	c.BindJSON(&requestData)
	_ = usecase.BookmarkContent(requestData)
	c.JSON(200, "ok")
}

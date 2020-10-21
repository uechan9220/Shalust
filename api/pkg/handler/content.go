package handler

import (
	"shalust/api/pkg/model"
	"shalust/api/pkg/usecase"

	"github.com/gin-gonic/gin"
)

func DeleteContent(c *gin.Context) {

	var requestData model.ContentHandling
	c.BindJSON(&requestData)
	_ = usecase.DeleteContent(requestData.Content_id)
	c.JSON(200, "ok")
}
func CahngeDiscloseContent(c *gin.Context) {

	var requestData model.ContentHandling
	c.BindJSON(&requestData)
	_ = usecase.CahngeDisclose(requestData.Content_id, requestData.Disclose)

	c.JSON(200, "ok")
}

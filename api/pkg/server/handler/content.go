package handler

import (
	"shalust/api/pkg/server/model"
	"shalust/api/pkg/server/usecase"

	"github.com/gin-gonic/gin"
)

func DeleteContent(c *gin.Context) {

	var requestData model.ContentHandling
	c.BindJSON(&requestData)
	_ = usecase.DeleteContent("56539c3e-fb64-4919-bb0e-c5691831702d")
	c.JSON(200, "ok")
}
func CahngeDiscloseContent(c *gin.Context) {

	var requestData model.ContentHandling
	c.BindJSON(&requestData)
	_ = usecase.CahngeDisclose("56539c3e-fb64-4919-bb0e-c5691831702d", false)

	c.JSON(200, "ok")
}

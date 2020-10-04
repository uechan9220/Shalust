package handler

import (
	"shalust/api/pkg/server/model"
	"shalust/api/pkg/server/usecase"

	"github.com/gin-gonic/gin"
)

func DeleteContent(c *gin.Context) {

	var requestData model.ContentHandling
	c.BindJSON(&requestData)
	_ = usecase.DeleteContent("15e9d4b3-ad4e-46fb-92d3-2858f20c13fd")
	c.JSON(200, "ok")
}
func CahngeDiscloseContent(c *gin.Context) {

	var requestData model.ContentHandling
	c.BindJSON(&requestData)
	_ = usecase.CahngeDisclose("15e9d4b3-ad4e-46fb-92d3-2858f20c13fd", false)

	c.JSON(200, "ok")
}

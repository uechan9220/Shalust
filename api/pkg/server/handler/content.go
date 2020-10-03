package handler

import (
	"shalust/api/pkg/server/model"

	"github.com/gin-gonic/gin"
)

func DeleteContent(c *gin.Context) {

	var requestData model.ContentHandling
	c.BindJSON(&requestData)

	c.JSON(200, "ok")
}
func CahngeDiscloseContent(c *gin.Context) {

	var requestData model.ContentHandling
	c.BindJSON(&requestData)

	c.JSON(200, "ok")
}

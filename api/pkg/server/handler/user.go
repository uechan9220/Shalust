package handler

import (
	"shalust/api/pkg/server/model"

	"github.com/gin-gonic/gin"
)

func CreateUser(c *gin.Context) {
	var data model.User
	c.BindJSON(&data)
	_ = model.CreateUser(data)

	c.JSON(200, data)
}

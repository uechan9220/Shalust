package handler

import (
	"shalust/api/pkg/server/model"
	"shalust/api/pkg/server/usecase"

	"github.com/gin-gonic/gin"
)

func CreateUser(c *gin.Context) {
	var data model.User
	c.BindJSON(&data)
	_ = usecase.CreateUser(data)

	c.JSON(200, data)
}

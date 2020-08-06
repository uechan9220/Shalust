package handler

import (
	"shalust/api/pkg/server/model"

	"github.com/gin-gonic/gin"
)

func GetIllustratio(c *gin.Context) {

	data, _ := model.GetAllIllustratio()

	c.JSON(200, data)
}

func GetUserMainPage(c *gin.Context) {

	user_id := c.Param("user_id")

	var data model.UserMainPage

	_ = model.GetUserData(user_id, &data.UserData)
	_ = model.GetUserIllustratio(user_id, &data.Illustratio)

	c.JSON(200, data)
}

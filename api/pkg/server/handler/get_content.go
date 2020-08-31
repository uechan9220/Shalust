package handler

import (
	"shalust/api/pkg/server/model"

	"shalust/api/pkg/server/usecase"

	"github.com/gin-gonic/gin"
)

func GetIllustratio(c *gin.Context) {

	var data []model.ContentData
	_ = model.GetAllIllustratio(&data)

	c.JSON(200, data)
}

func GetUserIllustratio(c *gin.Context) {

	user_id := c.Param("user_id")

	var data model.UserMainPage

	_ = usecase.GetUserData(user_id, &data.UserData)
	_ = model.GetUserIllustratio(user_id, &data.Illustratio)

	c.JSON(200, data)
}

func GetUserCommic(c *gin.Context) {

	user_id := c.Param("user_id")

	var data model.UserMainPage

	_ = usecase.GetUserData(user_id, &data.UserData)
	_ = model.GetUserCommic(user_id, &data.Illustratio)

	c.JSON(200, data)
}
func GetUserGraffiti(c *gin.Context) {

	user_id := c.Param("user_id")

	var data model.UserMainPage

	_ = usecase.GetUserData(user_id, &data.UserData)
	_ = model.GetUserGraffiti(user_id, &data.Illustratio)

	c.JSON(200, data)
}
func GetUserRough(c *gin.Context) {

	user_id := c.Param("user_id")

	var data model.UserMainPage

	_ = usecase.GetUserData(user_id, &data.UserData)
	_ = model.GetUserRough(user_id, &data.Illustratio)
	c.JSON(200, data)
}

package handler

import (
	"shalust/api/pkg/server/model"

	"shalust/api/pkg/server/usecase"

	"github.com/gin-gonic/gin"
)

func GetIllustratio(c *gin.Context) {

	var data []model.ContentData
	_ = usecase.GetAllIllustratio(&data)

	c.JSON(200, data)
}

func GetUserIllustratio(c *gin.Context) {

	user_id := c.Param("user_id")

	var data model.ContentPage

	_ = usecase.GetUserData(user_id, &data.UserData)
	_ = usecase.GetUserIllustratio(user_id, &data.Illustratio)

	c.JSON(200, data)
}

func GetUserCommic(c *gin.Context) {

	user_id := c.Param("user_id")

	var data model.ContentPage

	_ = usecase.GetUserData(user_id, &data.UserData)
	_ = usecase.GetUserCommic(user_id, &data.Illustratio)

	c.JSON(200, data)
}
func GetUserGraffiti(c *gin.Context) {

	user_id := c.Param("user_id")

	var data model.ContentPage

	_ = usecase.GetUserData(user_id, &data.UserData)
	_ = usecase.GetUserGraffiti(user_id, &data.Illustratio)

	c.JSON(200, data)
}
func GetUserRough(c *gin.Context) {

	user_id := c.Param("user_id")

	var data model.ContentPage

	_ = usecase.GetUserData(user_id, &data.UserData)
	_ = usecase.GetUserRough(user_id, &data.Illustratio)
	c.JSON(200, data)
}

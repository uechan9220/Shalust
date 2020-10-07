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
func GetCommic(c *gin.Context) {

	var data []model.ContentData
	_ = usecase.GetAllCommic(&data)

	c.JSON(200, data)
}
func GetGraffiti(c *gin.Context) {

	var data []model.ContentData
	_ = usecase.GetAllGraffiti(&data)

	c.JSON(200, data)
}
func GetRough(c *gin.Context) {

	var data []model.ContentData
	_ = usecase.GetAllRough(&data)

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
	_ = usecase.GetUserCommic(user_id, &data.Commic)

	c.JSON(200, data)
}
func GetUserGraffiti(c *gin.Context) {

	user_id := c.Param("user_id")

	var data model.ContentPage

	_ = usecase.GetUserData(user_id, &data.UserData)
	_ = usecase.GetUserGraffiti(user_id, &data.Graffiti)

	c.JSON(200, data)
}
func GetUserRough(c *gin.Context) {

	user_id := c.Param("user_id")

	var data model.ContentPage

	_ = usecase.GetUserData(user_id, &data.UserData)
	_ = usecase.GetUserRough(user_id, &data.Rough)
	c.JSON(200, data)
}

func PostIllustratioManagement(c *gin.Context) {

	var requestData model.UserData

	c.BindJSON(&requestData)

	var data []model.ContentHandling

	_ = usecase.GetUserIllustratioManagement(requestData.User_id, &data)
	c.JSON(200, data)
}

func PostCommicManagement(c *gin.Context) {

	var requestData model.UserData

	c.BindJSON(&requestData)

	var data []model.ContentHandling

	_ = usecase.GetUserCommicManagement(requestData.User_id, &data)
	c.JSON(200, data)
}

func PostGraffitiManagement(c *gin.Context) {

	var requestData model.UserData

	c.BindJSON(&requestData)

	var data []model.ContentHandling

	_ = usecase.GetUserGraffitiManagement(requestData.User_id, &data)
	c.JSON(200, data)
}

func PostRoughManagement(c *gin.Context) {

	var requestData model.UserData

	c.BindJSON(&requestData)

	var data []model.ContentHandling

	_ = usecase.GetUserRoughManagement(requestData.User_id, &data)
	c.JSON(200, data)
}

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

	var requestData model.UserData

	c.BindJSON(&requestData)

	var data model.UserMainPage

	_ = usecase.GetUserData(requestData.User_id, &data.UserData)
	_ = usecase.GetUserIllustratio(requestData.User_id, &data.Illustratio)

	c.JSON(200, data)
}

func GetUserCommic(c *gin.Context) {

	var requestData model.UserData

	c.BindJSON(&requestData)

	var data model.UserMainPage

	_ = usecase.GetUserData(requestData.User_id, &data.UserData)
	_ = usecase.GetUserCommic(requestData.User_id, &data.Illustratio)

	c.JSON(200, data)
}
func GetUserGraffiti(c *gin.Context) {

	var requestData model.UserData

	c.BindJSON(&requestData)

	var data model.UserMainPage

	_ = usecase.GetUserData(requestData.User_id, &data.UserData)
	_ = usecase.GetUserGraffiti(requestData.User_id, &data.Illustratio)

	c.JSON(200, data)
}
func GetUserRough(c *gin.Context) {

	var requestData model.UserData

	c.BindJSON(&requestData)

	var data model.UserMainPage

	_ = usecase.GetUserData(requestData.User_id, &data.UserData)
	_ = usecase.GetUserRough(requestData.User_id, &data.Illustratio)
	c.JSON(200, data)
}

func Post_management(c *gin.Context) {

	var requestData model.UserData

	c.BindJSON(&requestData)

	var data model.UserMainPage

	_ = usecase.GetUserData(requestData.User_id, &data.UserData)
	_ = usecase.GetUserRough(requestData.User_id, &data.Illustratio)
	c.JSON(200, data)
}

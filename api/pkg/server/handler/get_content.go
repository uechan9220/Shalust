package handler

import (
	"fmt"
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

	var data model.UserMainPage

	user_id := c.Param("user_id")

	_ = usecase.GetUserData(user_id, &data.UserData)
	_ = usecase.GetUserIllustratio(user_id, &data.Illustratio)

	c.JSON(200, data)
}

func GetUserCommic(c *gin.Context) {

	user_id := c.Param("user_id")

	var data model.UserMainPage

	_ = usecase.GetUserData(user_id, &data.UserData)
	_ = usecase.GetUserCommic(user_id, &data.Illustratio)

	c.JSON(200, data)
}
func GetUserGraffiti(c *gin.Context) {

	user_id := c.Param("user_id")

	var data model.UserMainPage

	_ = usecase.GetUserData(user_id, &data.UserData)
	_ = usecase.GetUserGraffiti(user_id, &data.Illustratio)

	c.JSON(200, data)
}
func GetUserRough(c *gin.Context) {

	user_id := c.Param("user_id")

	var data model.UserMainPage

	_ = usecase.GetUserData(user_id, &data.UserData)
	_ = usecase.GetUserRough(user_id, &data.Illustratio)
	c.JSON(200, data)
}

func Post_management(c *gin.Context) {

	var requestData model.UserData

	c.BindJSON(&requestData)

	var data []model.ContentData

	err := usecase.GetUserContent("U3ttZo4hlBVs0Ui75vMxtyt378u1", &data)
	fmt.Println(err)
	c.JSON(200, data)
}

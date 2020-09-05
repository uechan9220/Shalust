package handler

import (
	"regexp"
	"shalust/api/pkg/server/model"
	"shalust/api/pkg/server/usecase"

	"github.com/gin-gonic/gin"
	_ "golang.org/x/image/bmp"
	_ "golang.org/x/image/tiff"
)

type UserData struct {
	User_id       string `json:"user_id"`
	User_name     string `json:"user_name"`
	Comment       string `json:"comment"`
	Last_seen     string `json:"last_seen"`
	Account_id    string `json:"account_id"`
	User_location string `json:"user_location"`
	Icon_image    string `json:"icon_image"`
	Header_image  string `json:"header_image"`
}

func CreateUser(c *gin.Context) {
	var requestData UserData
	var userData model.User
	c.BindJSON(&requestData)

	header_imageData := requestData.Header_image[23:]

	userData.Header_url, _ = usecase.SaveHeaderImage(header_imageData, requestData.User_id)

	match, _ := regexp.MatchString("http", requestData.Icon_image)
	if match {
		userData.Icon_url = requestData.Icon_image
	} else {
		icon_imageData := requestData.Header_image[23:]
		userData.Icon_url, _ = usecase.SaveIconImage(icon_imageData, requestData.User_id)
	}
	userData.Account_id = requestData.Account_id
	userData.Comment = requestData.Comment

	userData.Last_seen = requestData.Last_seen
	userData.User_id = requestData.User_id
	userData.User_location = requestData.User_location
	userData.User_name = requestData.User_name
	_ = usecase.CreateUser(userData)
	c.JSON(200, userData)
}

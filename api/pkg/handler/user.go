package handler

import (
	"regexp"
	"shalust/api/pkg/model"
	"shalust/api/pkg/usecase"

	"github.com/gin-gonic/gin"
	_ "golang.org/x/image/bmp"
	_ "golang.org/x/image/tiff"
)

func CreateUser(c *gin.Context) {
	var requestData model.UserData
	var userData model.User
	c.BindJSON(&requestData)

	if requestData.Header_image != "" {
		match, _ := regexp.MatchString("jpeg", requestData.Header_image)
		if match {
			header_imageData := requestData.Header_image[23:]
			userData.Header_url, _ = usecase.SaveHeaderImage(header_imageData)
		} else {
			header_imageData := requestData.Header_image[22:]
			userData.Header_url, _ = usecase.SaveHeaderImage(header_imageData)
		}

	}

	match, _ := regexp.MatchString("http", requestData.Icon_image)
	if match {
		userData.Icon_url = requestData.Icon_image
	} else {
		image_match, _ := regexp.MatchString("jpeg", requestData.Header_image)
		if image_match {
			icon_imageData := requestData.Header_image[23:]
			userData.Icon_url, _ = usecase.SaveIconImage(icon_imageData)
		} else {
			icon_imageData := requestData.Header_image[22:]
			userData.Icon_url, _ = usecase.SaveIconImage(icon_imageData)
		}
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

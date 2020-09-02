package handler

import (
	"fmt"
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
	Acount_id     string `json:"acount_id"`
	User_location string `json:"user_location"`
	Icon_image    string `json:"icon_image"`
	Header_image  string `json:"header_image"`
}

func CreateUser(c *gin.Context) {
	var requestData UserData
	// var userData model.User
	c.BindJSON(&requestData)
	// _ = usecase.CreateUser(data)

	// fmt.Println(data.Header_image)
	icon_imageData := requestData.Header_image[23:]

	icon_url, _ := usecase.SaveImage(icon_imageData, requestData.User_id)
	fmt.Println(icon_url)

	c.JSON(200, "ko")
}

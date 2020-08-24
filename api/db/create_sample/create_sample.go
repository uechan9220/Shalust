package create_sample

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"shalust/api/pkg/server/model"

	"github.com/google/uuid"
)

type SampleData struct {
	User      model.User    `json:"user"`
	ImageData model.Content `json:"imageData"`

	Content model.ContentHandling `json:"content"`
}

func Create_sample() {

	data_json, err := ioutil.ReadFile("/app/api/db/create_sample/sample_data.json")
	if err != nil {
		log.Fatal(err.Error())
	}

	var data SampleData
	if err := json.Unmarshal(data_json, &data); err != nil {
		log.Fatal(err)
	}

	icon_url, _ := model.Upload_S3("/app/api/db/create_sample/icon_sample.jpg", "hoge/icon_sample.jpg")
	imagesample, _ := model.Upload_S3("/app/api/db/create_sample/image_sample.jpg", "hoge/image_sample.jpg")
	data.User.Icon_url = icon_url
	data.ImageData.Image_url = imagesample
	acount_id := []string{"hoge", "huga", "piyo", "hunga", "rin", "momo"}
	for _, key := range acount_id {
		uuidObj, _ := uuid.NewUUID()
		data.User.User_id = uuidObj.String()
		data.Content.User_id = uuidObj.String()
		data.User.Acount_id = key
		_ = model.CreateUser(data.User)

		for i := 0; i < 10; i++ {
			uuidObj, _ := uuid.NewUUID()
			data.ImageData.Content_id = uuidObj.String()
			data.Content.Content_id = uuidObj.String()

			_ = model.CreateGraffitiHandling(data.Content)
			_ = model.CreateContentData(data.ImageData)
		}
		for i := 0; i < 10; i++ {
			uuidObj, _ := uuid.NewUUID()
			data.ImageData.Content_id = uuidObj.String()
			data.Content.Content_id = uuidObj.String()

			_ = model.CreateCommicHandling(data.Content)
			_ = model.CreateContentData(data.ImageData)
		}
		for i := 0; i < 10; i++ {
			uuidObj, _ := uuid.NewUUID()
			data.ImageData.Content_id = uuidObj.String()
			data.Content.Content_id = uuidObj.String()

			_ = model.CreateIllustratioHandling(data.Content)
			_ = model.CreateContentData(data.ImageData)
		}
		for i := 0; i < 10; i++ {
			uuidObj, _ := uuid.NewUUID()
			data.ImageData.Content_id = uuidObj.String()
			data.Content.Content_id = uuidObj.String()

			_ = model.CreateRoughtHandling(data.Content)
			_ = model.CreateContentData(data.ImageData)
		}
	}
}

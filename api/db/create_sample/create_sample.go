package create_sample

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"shalust/api/pkg/server/model"
)

type SampleData struct {
	User      model.User    `json:"user"`
	ImageData model.Content `json:"imageData"`

	Content_commic      model.ContentHandling `json:"content_commic"`
	Content_graffiti    model.ContentHandling `json:"content_graffiti"`
	Content_rough       model.ContentHandling `json:"content_rough"`
	Content_illustratio model.ContentHandling `json:"content_illustratio"`

	ImageData2           model.Content         `json:"imageData2"`
	Content_illustratio2 model.ContentHandling `json:"content_illustratio2"`
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

	_ = model.CreateUser(data.User)
	_ = model.CreateCommicHandling(data.Content_commic)
	_ = model.CreateGraffitiHandling(data.Content_graffiti)
	_ = model.CreateIllustratioHandling(data.Content_illustratio)
	_ = model.CreateRoughtHandling(data.Content_rough)

	_ = model.CreateContentData(data.ImageData)

	_ = model.CreateContentData(data.ImageData2)
	_ = model.CreateIllustratioHandling(data.Content_illustratio2)
}

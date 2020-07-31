package create_sample

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"shalust/api/pkg/server/model"
)

type SampleData struct {
	User        model.User            `json:"user"`
	ImageData   model.Content         `json:"imageData"`
	ContentData model.ContentHandling `json:"content_handling"`
	Illustratio model.Illustratio     `json:"illustratio"`
	Rough       model.Rough           `json:"rough"`
	Commic      model.Commic          `json:"commic"`
	Graffiti    model.Graffiti        `json:"graffiti"`
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
	_ = model.CreateContentHandling(data.ContentData)
	_ = model.CreateIllustratio(data.Illustratio)
	_ = model.CreateRough(data.Rough)
	_ = model.CreateCommic(data.Commic)
	_ = model.CreateGraffiti(data.Graffiti)
}

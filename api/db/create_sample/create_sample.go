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
	_ = model.CreateIllustratio(data.ImageData)
	_ = model.CreateRough(data.ImageData)
	_ = model.CreateCommic(data.ImageData)
	_ = model.CreateGraffiti(data.ImageData)
}

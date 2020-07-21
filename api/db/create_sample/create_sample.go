package create_sample

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"shalust/api/pkg/server/model"
)

func Create_sample() {

	data_json, err := ioutil.ReadFile("/app/api/db/create_sample/sample_data.json")
	if err != nil {
		log.Fatal(err.Error())
	}

	var data model.User
	if err := json.Unmarshal(data_json, &data); err != nil {
		log.Fatal(err)
	}
	model.CreateUser(data)
}

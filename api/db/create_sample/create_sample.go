package create_sample

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"shalust/api/pkg/server/model"
)

type SampleData struct {
	User model.User `json:"user"`
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
	fmt.Println(data)
	model.CreateUser(data.User)
}

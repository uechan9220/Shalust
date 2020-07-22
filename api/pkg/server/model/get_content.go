package model

import (
	"shalust/api/pkg/db"
)

func GetAllIllustratio() ([]Content, error) {
	var data []Content
	client, err := db.Init_mysql()
	if err != nil {
		return data, err
	}
	client.From("illustratio").Find(&data)
	return data, err
}

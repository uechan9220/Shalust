package usecase

import (
	"shalust/api/pkg/infra"
	"shalust/api/pkg/server/model"
)

func CahngeDisclose(content_id string) error {

	client, err := infra.Init_mysql()
	if err != nil {
		return err
	}

	client.From("content_handling").Where("content_id = ?", content_id).Update("disclose", 1)
	defer client.Close()
	return err
}

func DeleteContent(content_id string) error {

	client, err := infra.Init_mysql()
	if err != nil {
		return err
	}

	client.From("content_handling").Delete(&model.ContentHandling{Content_id: content_id})
	defer client.Close()
	return err
}

package usecase

import (
	"shalust/api/pkg/infra"
	"shalust/api/pkg/server/model"
)

func CreateContentData(data model.Content) error {
	client, err := infra.Init_mysql()
	if err != nil {
		return err
	}
	client.From("content_data").Create(&data)
	defer client.Close()
	return err
}

func CreateGraffitiHandling(data model.ContentHandling) error {

	client, err := infra.Init_mysql()
	if err != nil {
		return err
	}
	data.Graffiti = true
	client.From("content_handling").Create(&data)
	defer client.Close()
	return err
}

func CreateIllustratioHandling(data model.ContentHandling) error {

	client, err := infra.Init_mysql()
	if err != nil {
		return err
	}

	data.Illustratio = true
	client.From("content_handling").Create(&data)
	defer client.Close()
	return err
}

func CreateRoughtHandling(data model.ContentHandling) error {

	client, err := infra.Init_mysql()
	if err != nil {
		return err
	}
	data.Rough = true

	client.From("content_handling").Create(&data)
	defer client.Close()
	return err
}
func CreateCommicHandling(data model.ContentHandling) error {

	client, err := infra.Init_mysql()
	if err != nil {
		return err
	}
	data.Commic = true

	client.From("content_handling").Create(&data)
	defer client.Close()
	return err
}

func PostContent(imageData []model.Images, contentId string) {
	var images []model.ContentImages
	for _, v := range imageData {
		var data model.ContentImages
		url, _ := SaveContentImage(v.Image, contentId, v.Index)
		data.Image_Url = url
		data.Index = v.Index
		images = append(images, data)
	}

}

func PostContentHandling(data model.PostContentData) (string, error) {
	var content_handling model.ContentHandling

	contentId := Uuid4()

	content_handling.Create_at = GetDeteInTokyo()
	content_handling.Content_id = contentId
	content_handling.Title = data.Title
	content_handling.User_id = data.User_id
	content_handling.Detail = data.Detail
	content_handling.Adult = data.Adult

	if data.Illustratio {
		err := CreateIllustratioHandling(content_handling)
		if err != nil {
			return "", err
		}
		return contentId, nil
	} else if data.Graffiti {
		err := CreateGraffitiHandling(content_handling)
		if err != nil {
			return "", err
		}
		return contentId, nil
	} else if data.Rough {
		err := CreateRoughtHandling(content_handling)
		if err != nil {
			return "", err
		}
		return contentId, nil
	} else if data.Commic {
		err := CreateCommicHandling(content_handling)
		if err != nil {
			return "", err
		}
		return contentId, nil
	}
	return contentId, nil
}

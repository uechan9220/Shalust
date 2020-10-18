package usecase

import (
	"fmt"
	"regexp"
	"shalust/api/pkg/infra"
	"shalust/api/pkg/model"
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
func CreateContent(data model.Content) error {

	client, err := infra.Init_mysql()
	if err != nil {
		return err
	}

	client.From("content_data").Create(&data)
	defer client.Close()
	return err
}

func PostContent(imageData []model.Images, contentId string) error {
	var images []model.Content

	for _, v := range imageData {
		var data model.Content
		var url string
		match, _ := regexp.MatchString("jpeg", v.Image)
		if match {
			url, _ = SaveContentImage(v.Image[23:], contentId, v.Index)
		} else {
			url, _ = SaveContentImage(v.Image[22:], contentId, v.Index)
		}
		data.Image_url = url
		data.Image_index = v.Index
		data.Content_id = contentId
		_ = CreateContent(data)
		images = append(images, data)
	}
	return nil
}

func PostContentHandling(data model.PostContentData, contentId string) error {
	var content_handling model.ContentHandling

	content_handling.Disclose = true

	content_handling.Create_at = GetDeteInTokyo()
	content_handling.Content_id = contentId
	content_handling.Title = data.Title
	content_handling.User_id = data.User_id
	content_handling.Detail = data.Detail
	content_handling.Adult = data.Adult

	thumbnail_url, _ := CreateThumbail(data.Images[data.ThumbailNumber-1].Image, contentId)

	content_handling.Thumbnail_url = thumbnail_url
	if data.Illustratio {
		err := CreateIllustratioHandling(content_handling)
		if err != nil {
			return err
		}
	} else if data.Graffiti {
		err := CreateGraffitiHandling(content_handling)
		if err != nil {
			return err
		}
	} else if data.Rough {
		err := CreateRoughtHandling(content_handling)
		if err != nil {
			return err
		}
	} else if data.Commic {
		err := CreateCommicHandling(content_handling)
		if err != nil {
			return err
		}
	}
	return nil
}

func CreateThumbail(image, contentId string) (string, error) {
	match, _ := regexp.MatchString("jpeg", image)
	if match {
		url, _ := SaveThumbailImage(image[23:], contentId)
		return url, nil
	}
	url, _ := SaveThumbailImage(image[22:], contentId)
	return url, nil

}

func CreateTag(tagData []string) error {
	for _, v := range tagData {
		fmt.Println(v)
	}
	return nil
}

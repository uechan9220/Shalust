package model

import (
	"shalust/api/pkg/db"
)

func Upload_S3(filepath string, filename string) error {
	client, err := db.Init_s3()

	if err != nil {
		return err
	}

	err = client.Upload_s3(filepath, filename)

	return err
}

package usecase

import (
	"encoding/base64"
	"fmt"
	"image"
	_ "image/gif"
	_ "image/jpeg"
	_ "image/png"
	"io/ioutil"
	"os"

	_ "golang.org/x/image/bmp"
	_ "golang.org/x/image/tiff"
)

func SaveImage(data string) error {

	encodeData, err := base64.StdEncoding.DecodeString(data)
	if err != nil {
		return err
	}

	tmpFile, err := ioutil.TempFile("", "")
	if err != nil {
		return err
	}
	defer os.Remove(tmpFile.Name())

	tmpFile.Write(encodeData)
	tmpFile.Close()

	f, err := os.Open(tmpFile.Name())
	if err != nil {
		fmt.Println(err)
	}
	defer f.Close()

	_, format, err := image.DecodeConfig(f)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(format)

	return nil
}

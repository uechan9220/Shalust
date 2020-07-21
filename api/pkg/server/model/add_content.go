package model

import (
	"fmt"
	"shalust/api/pkg/db"

	_ "github.com/jinzhu/gorm/dialects/mysql"
)

func CreateIllustratio(data Illustratio) {
	fmt.Println(data)
	client, err := db.Init_mysql()
	if err != nil {
		fmt.Println(err)
	}
	client.From("illustratio").Create(&data)
}

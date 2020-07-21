package model

import (
	"fmt"
	"shalust/api/pkg/db"

	_ "github.com/jinzhu/gorm/dialects/mysql"
)

func CreateUser(data User) {
	fmt.Println(data)
	client, err := db.Init_mysql()
	var hoge User
	if err != nil {
		fmt.Println(err)
	}
	client.NewRecord(&data)
	client.From("user").Create(&data)
	client.From("user").Find(&hoge)
	fmt.Println(hoge)
}

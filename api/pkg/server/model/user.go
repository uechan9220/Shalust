package model

import (
	"fmt"
	"shalust/api/pkg/db"

	_ "github.com/jinzhu/gorm/dialects/mysql"
)

func CreateUser(data User) {
	fmt.Println(data)
	client, err := db.Init_mysql()
	if err != nil {
		fmt.Println(err)
	}
	client.From("user").Create(&data)
}

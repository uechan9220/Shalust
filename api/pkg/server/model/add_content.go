package model

import (
	"fmt"
	"shalust/api/pkg/db"

	_ "github.com/jinzhu/gorm/dialects/mysql"
)

func CreateIllustratio(data Content) {
	fmt.Println(data)
	client, err := db.Init_mysql()
	if err != nil {
		fmt.Println(err)
	}
	client.From("illustratio").Create(&data)
}

func CreateGraffiti(data Content) {

	fmt.Println(data)
	client, err := db.Init_mysql()
	if err != nil {
		fmt.Println(err)
	}
	client.From("graffiti").Create(&data)
}

func CreateRough(data Content) {
	fmt.Println(data)
	client, err := db.Init_mysql()
	if err != nil {
		fmt.Println(err)
	}
	client.From("rough").Create(&data)
}
func CreateCommic(data Content) {
	fmt.Println(data)
	client, err := db.Init_mysql()
	if err != nil {
		fmt.Println(err)
	}
	client.From("commic").Create(&data)
}

package infra

import (
	"fmt"
	"os"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

type Db struct {
	client *gorm.DB
}

func Init_mysql() (Db, error) {
	user := os.Getenv("MYSQL_USER")

	password := os.Getenv("MYSQL_PASSWORD")

	host := os.Getenv("MYSQL_HOST")

	port := os.Getenv("MYSQL_PORT")

	database := os.Getenv("MYSQL_DATABASE")

	client, err := gorm.Open("mysql", fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=true", user, password, host, port, database))

	return Db{client: client}, err
}

func (db *Db) Find(shell interface{}) {
	db.client.Find(shell)
}

func (db *Db) Scan(shell interface{}) *Db {
	db.client = db.client.Scan(shell)
	return db
}
func (db *Db) Where(key string, param ...interface{}) *Db {
	db.client = db.client.Where(key, param...)
	return db
}
func (db *Db) Close() {
	db.client.Close()
}
func (db *Db) Create(shell interface{}) {
	db.client.Create(shell)
}
func (db *Db) Delete(key string, src interface{}, param ...interface{}) bool {
	if db.client.Where(key, param).First(src).RecordNotFound() {
		return true
	}
	db.client.Delete(src)
	return false
}
func (db *Db) Having(key string, param ...interface{}) *Db {
	db.client = db.client.Having(key, param)
	return db
}

func (db *Db) Offset(key interface{}) *Db {
	db.client = db.client.Offset(key)
	return db
}

func (db *Db) Limit(key interface{}) *Db {
	db.client = db.client.Limit(key)
	return db
}
func (db *Db) From(raw string) *Db {
	db.client = db.client.Table(raw)
	return db
}
func (db *Db) NewRecord(key interface{}) {
	db.client.NewRecord(key)

}
func (db *Db) Join(key string, param ...interface{}) *Db {
	db.client = db.client.Joins(key, param)
	return db
}

func (db *Db) Select(key interface{}, param ...interface{}) *Db {
	db.client = db.client.Select(key, param)
	return db
}
func (db *Db) Rows() *Db {
	db.client.Rows()
	return db
}
func (db *Db) Raw(sql string, param ...interface{}) *Db {
	db.client.Raw(sql, param)
	return db
}

func (db *Db) Preload(colum string, param ...interface{}) *Db {
	db.client.Preload(colum, param)
	return db
}

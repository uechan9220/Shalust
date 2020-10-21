package infra

import "github.com/jinzhu/gorm"

type SqlHandler interface {
	Find(interface{}) *gorm.DB
	Scan(interface{}) *gorm.DB
	Where(string, ...interface{}) *gorm.DB
	Close()
	Create(interface{}) *gorm.DB
	Delete(interface{}, ...interface{}) *gorm.DB
	Having(interface{}) *gorm.DB
	Offset(interface{}) *gorm.DB
	Limit(interface{}) *gorm.DB
	From(string) *gorm.DB
	Join(string, ...interface{}) *gorm.DB
	Select(interface{}, ...interface{}) *gorm.DB
	Rows() *gorm.DB
	Preload(string, ...interface{}) *gorm.DB
	Exec(string, ...interface{}) *gorm.DB
	Update(...interface{}) *gorm.DB
	Updates(interface{}) *gorm.DB
	Error(interface{}) *gorm.DB
}

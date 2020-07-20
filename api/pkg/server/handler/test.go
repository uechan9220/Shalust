package handler

import (
	"shalust/api/pkg/db"

	"github.com/gin-gonic/gin"
)

func Test(c *gin.Context) {

	svc, _ := db.Init_s3()
	result, _ := svc.ListBuckets(nil)

	c.JSON(200, result.Buckets)
}

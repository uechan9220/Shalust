package main

import (
	"shalust/api/pkg"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	pkg.Serve(r, ":8080")
}

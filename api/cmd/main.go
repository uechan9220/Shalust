package main

import (
	"shalust/api/pkg"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Use(static.Serve("/", static.LocalFile("./build", true)))
	pkg.Serve(r, ":8080")
}

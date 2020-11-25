package main

import (
	"fmt"

	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	fmt.Println("vim-go")

	router := gin.Default()

	// Serve main website

	router.Use(static.Serve("/", static.LocalFile("../frontend/build", false)))

	// Create a group for all API queries
	api := router.Group("/api")
	{
		api.GET("/read")
	}

	router.Run(":4000")
}

package database

import (
	"fmt"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"os"
	"wochterbuch-backend/src/model/dtos"
)

var DB *gorm.DB

func Init() {
	var (
		user   = os.Getenv("USER")
		pass   = os.Getenv("PASSWORD")
		host   = os.Getenv("HOST")
		port   = os.Getenv("PORT")
		dbname = os.Getenv("DB_NAME")
	)

	dbURL := fmt.Sprintf("postgres://%s:%s@%s:%s/%s", user, pass, host, port, dbname)

	db, err := gorm.Open(postgres.Open(dbURL), &gorm.Config{})
	if err != nil {
		panic(fmt.Sprintf("failed to connect database: %v", err.Error()))
	}

	DB = db
	if err := DB.AutoMigrate(&dtos.Word{}); err != nil {
		panic(fmt.Sprintf("failed to auto migrate database: %v", err.Error()))
	}
}

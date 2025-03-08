package database

import (
	"fmt"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"wochterbuch-backend/src/global"
	"wochterbuch-backend/src/model"
)

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

	global.DB = db
	if err := global.DB.AutoMigrate(&model.Word{}); err != nil {
		panic(fmt.Sprintf("failed to auto migrate database: %v", err.Error()))
	}
}

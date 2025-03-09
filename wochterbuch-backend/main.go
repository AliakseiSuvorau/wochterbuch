package main

import (
	"wochterbuch-backend/src/setting/database"
	"wochterbuch-backend/src/setting/http_server"
	"wochterbuch-backend/src/setting/logger"
)

func main() {
	logger.Init()
	database.Init()
	database.PrepareDictionary()
	http_server.Init()
}

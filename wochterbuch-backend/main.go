package main

import (
	"wochterbuch-backend/src/setting/database"
	"wochterbuch-backend/src/setting/http_server"
)

func main() {
	database.Init()
	http_server.Init()
}

package http_server

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"wochterbuch-backend/src/routes"
)

func Init() {
	http.HandleFunc("/dictionary/add", routes.AddWord)
	http.HandleFunc("/dictionary/list", routes.GetAllWords)

	port := "6029" // Default port
	if len(os.Args) > 1 && os.Args[1] == "-port" {
		port = os.Args[2]
	}

	fmt.Printf("Server listening on port %s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

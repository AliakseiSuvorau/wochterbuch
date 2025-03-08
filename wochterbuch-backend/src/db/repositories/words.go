package repositories

import (
	"strconv"
	"wochterbuch-backend/src/model/dtos"
	"wochterbuch-backend/src/setting/database"
)

type WordsRepository struct{}

func (wr *WordsRepository) GetById(id uint64) (*dtos.Word, error) {
	var word dtos.Word
	result := database.DB.First(&word, strconv.FormatUint(id, 10))
	return &word, result.Error
}

func (wr *WordsRepository) Insert(word *dtos.Word) error {
	result := database.DB.Create(word)
	return result.Error
}

func (wr *WordsRepository) GetAll() ([]*dtos.Word, error) {
	var words []*dtos.Word
	result := database.DB.Find(&words)
	return words, result.Error
}

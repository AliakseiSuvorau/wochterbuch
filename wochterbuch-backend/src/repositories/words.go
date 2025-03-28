package repositories

import (
	"strconv"

	"wochterbuch-backend/src/global"
	"wochterbuch-backend/src/model"
)

type WordsRepository struct{}

func (wr *WordsRepository) GetById(id uint64) (*model.Word, error) {
	var word model.Word
	result := global.DB.First(&word, strconv.FormatUint(id, 10))
	return &word, result.Error
}

func (wr *WordsRepository) GetByIds(ids []uint64) ([]*model.Word, error) {
	var words []*model.Word
	result := global.DB.Where("ID IN ?", ids).Find(&words)
	return words, result.Error
}

func (wr *WordsRepository) Insert(word *model.Word) error {
	if word == nil {
		return nil
	}

	if wr.exists(word) {
		return nil
	}
	result := global.DB.Create(word)
	return result.Error
}

func (wr *WordsRepository) InsertMultiple(words []*model.Word) error {
	filteredWords := make([]*model.Word, 0, len(words))
	for _, word := range words {
		if word == nil {
			continue
		}

		if !wr.exists(word) {
			filteredWords = append(filteredWords, word)
		}
	}

	if len(filteredWords) == 0 {
		return nil
	}

	result := global.DB.Create(filteredWords)
	return result.Error
}

func (wr *WordsRepository) GetAll() ([]*model.Word, error) {
	var words []*model.Word
	result := global.DB.Find(&words)
	return words, result.Error
}

func (wr *WordsRepository) exists(w *model.Word) bool {
	var count int64
	global.DB.Model(&model.Word{}).
		Where("word = ? AND translation = ?", w.Word, w.Translation).
		Count(&count)
	return count > 0
}

func (wr *WordsRepository) Count() int64 {
	var count int64
	global.DB.Table("words").Count(&count)
	return count
}

package dtos

type Word struct {
	ID          uint64 `json:"id" gorm:"primaryKey"`
	Article     string `json:"article"`
	Word        string `json:"word"`
	Translation string `json:"translation"`
}

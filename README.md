# Wöchterbuch

## Описание

Möchten Sie die Artikeln für die Wöchter lernen? Dann diese Applikation ist für Sie!
Добавляйте слова в словарь, просматривайте словарь и тренируйте артикли.

## Run the application

Starts only backend with database:
```
docker-compose -f .\docker\docker-compose-backend.yml up -d
```

Starts the app as a whole:
```
docker-compose -f .\docker\docker-compose-dev.yml up -d
```

## TODO

- Вычитка словаря из файла
- Пагинация при выводе списка слов
- Режим тренировки
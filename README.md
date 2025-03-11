# Wöchterbuch

---
## Описание

Möchten Sie die Artikeln für die Wöchter lernen? Dann diese Applikation ist für Sie!
Добавляйте слова в словарь, просматривайте словарь и тренируйте артикли.

![img.png](readme_imgs/main_page.png)

- Доступно вычитывание слов из файла в формате `csv` или добавление через веб-интерфейс вручную

---

## Run the application

Starts only backend with database:
```
docker-compose -f .\docker\docker-compose-backend.yml up -d
```

Start only frontend:
```
npm start
```

Starts the app as a whole:
```
docker-compose -f .\docker\docker-compose-dev.yml up -d
```

## TODO

- Сохранение добавленных слов в csv-файл
- Редактирование словаря, перенесение кнопки добавления слов на страницу словаря
- Функция отключения слов из словаря для режима тренировки
- Пагинация при выводе списка слов из словаря
- Авторизация пользователей для подсчета статистики
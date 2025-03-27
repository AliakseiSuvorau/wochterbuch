# Wöchterbuch

---
## Description

Möchten Sie die Artikeln für die Wöchter lernen? Dann diese Applikation ist für Sie!
Add words to a dictionary and train articles for them.

![img.png](readme_imgs/main_page.png)

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

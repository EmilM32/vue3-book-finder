# Book Finder
Search for books by entering a query (Title, Author, etc).

Build using:
* [Google books API](https://developers.google.com/books/docs/v1/using#query-params)
* Vue 3 (Typescript)
* Tailwind CSS

### Compiles and hot-reloads for development
```
docker-compose -f docker-compose.dev.yaml build
docker-compose -f docker-compose.dev.yaml up
```

### Compiles and serve for production
```
docker-compose -f docker-compose.prod.yaml build
docker-compose -f docker-compose.prod.yaml up
```
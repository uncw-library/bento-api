
## New Bento API server

This repo builds an API server at https://new-bento.libapps.uncw.edu/ used by https://library.uncw.edu/search_randall/

The app accepts POST requests with a searchTerm at:

 - https://library.uncw.edu/search_randall/journals
 - https://library.uncw.edu/search_randall/books_ebooks
 - https://library.uncw.edu/search_randall/contentdm

The app queries sierra, contentDM and browzine for items matching the search term.

It returns a JSON of matches.

#### Example:

  POST a request from the command line with:
  
`curl --data "searchTerm=hi" "https://new-bento.libapps.uncw.edu/journals"`

### To build a dev box

  - Make a file at "new-bento/.env" with contents:

> SIERRA_API_KEY=Password
>
> BROWZINE_API_KEY=Password
>

#### Starting it

```
docker-compose down
docker-compose up --build
```

#### Interact with it

```
curl "http://localhost:8010/"
curl --data "searchTerm=hi" "http://localhost:8010/journals"
```
### To build a prod box

```
docker login libapps-admin.uncw.edu:8000
docker build -t libapps-admin.uncw.edu:8000/randall-dev/new-bento .
docker push libapps-admin.uncw.edu:8000/randall-dev/new-bento
```

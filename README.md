
## New Bento

Builds an API server at https://new-bento.libapps.uncw.edu/ used by https://library.uncw.edu/search_randall/ .

Queries sierra, contentDM and browzine for items matching the search term.  Returns a JSON of matches.

Example:

  - POSTing a request from commandline with:
  - `curl --data "searchTerm=hi" "https://new-bento.libapps.uncw.edu/journals"`

### To build a dev box

  - the dev box doesn't completely work right now

  - `docker-compose up --build` # run from the folder with the docker-compose.yml file.
  - or

    - `docker build -t {{ some_name }} .`
    - `docker run -p {{ some port }}:3000`


  - `curl "http://localhost:8010/"`  # this works
  - `curl --data "searchTerm=hi" "http://localhost:8010/"`  # this partially works

### To build a prod box

  - `docker login libapps-admin.uncw.edu:8000`
  - `docker build -t libapps-admin.uncw.edu:8000/randall-dev/new-bento .`
  - `docker push libapps-admin.uncw.edu:8000/randall-dev/new-bento`


## Bento API server (for drupal 9)

This repo builds an API server living at https://bento-api.libapps-staff.uncw.edu 

The app accepts POST requests with body like {"searchTerm": "whatever"}:

Endpoints:

 - https://bento-api.libapps-staff.uncw.edu/books-ebooks
 - https://bento-api.libapps-staff.uncw.edu/contentdm
 - https://bento-api.libapps-staff.uncw.edu/databases
 - https://bento-api.libapps-staff.uncw.edu/govdocs  
 - https://bento-api.libapps-staff.uncw.edu/journals
 - https://bento-api.libapps-staff.uncw.edu/newsmags
 - https://bento-api.libapps-staff.uncw.edu/scholarly
 - https://bento-api.libapps-staff.uncw.edu/videos-music

The app queries sierra, contentDM, libcat, and browzine for items matching the search term.

It returns a JSON of matches.

#### Example:

  POST a request from the command line with:

in bash:  
`curl --data "searchTerm=science" "https://bento-api.libapps-staff.uncw.edu/journals"`

in powershell:
`Invoke-WebRequest -Method POST -Body "searchTerm=science" -OutFile response.json -Uri https://bento-api.libapps-staff.uncw.edu/scholarly`

### To build a dev box

  - Make a file at "new-bento/.env" with contents:

```
SIERRA_API_KEY=Password	
BROWZINE_API_KEY=Password
OCLC__wskey=Password
SUMMON__api_id=Password
SUMMON__api_key=Password
NODE_ENV=development
```

  - The actual Passwords can be found in the Rancher web interface:

    - External tab in titlebar
    - new-bento item in User Stacks
    - bento item in Stack
    - new-bento-bento-1 in the "Container" tab
    - Environment row in the "Command" tab

#### Starting it

```
docker-compose down
docker-compose up --build
```

#### Interact with it

```
curl "http://localhost:8010/"
curl --data "searchTerm=science" "http://localhost:8010/journals"
```

returns {
  total: **number of matches found**,
  selection: \[
    {
      title: **item title**,
      author: **item author**,
      citation: **item date**,
      url: **item url**,
      image: **item image url**,
      date: **publication date**,
      (sometimes other stuff or different for each endpoint -- sorry for not getting it consistent yet)
    },
    **etc for first 5 items**
  \]
}


### updating

```
npm install
npm audit
```

### linting

```
npm install
npx standard
```



### To build a prod box

```
docker login libapps-admin.uncw.edu:8000
docker build --no-cache --platform linux/x86_64/v8 -t libapps-admin.uncw.edu:8000/randall-dev/bento-api .
docker push libapps-admin.uncw.edu:8000/randall-dev/bento-api
```

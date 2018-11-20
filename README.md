# Firabase Mockserver

Your team's mock server with https, ip limitation and data manaing GUI. 

## Prerequisite
- firebase account
- [firebase cli](https://firebase.google.com/docs/cli/)
- [gsutil](https://cloud.google.com/storage/docs/gsutil_install)

## Usage 
### Set up firebase project

```
firebase use --add your-project-name
cd functions/
npm install
```

### Upload data for mock enpdpoints

- Create `public` and `content` dirrectories on cloud storage and put files in those dirrectories.
  - `public`: static files.
  - `content`: dynamic contents with macros.

### Set up ip limitation
```
$ firebase functions:config:set rule.allowed_ip="allowed-ip" 
```

### deploy
```
make MS_BUCKET=gs://your-bucket-name sync-local-with-cloud
make deploy
```

Endpoints which have same path as your uploaded files are available.

```
curl https://your-host-name/uploaded-file-name
```


## Macros in Endpoints
- ${mockserver_protocol}
- ${mockserver_host}
- ${escape_newline}

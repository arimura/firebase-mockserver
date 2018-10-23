# firabase mockserver

mockserver for sharing mock endpoints with your team.

## Usage
Put files
```
#endpoints with ip limitation
$ echo "hoge" > content/hoge
#static files
$ echo "fuga" > public/fuga.html
```

Run locally
```
$ firebase functions:config:set rule.allowed_ip="your-ip" 
$ firebase functions:config:get > functions/.runtimeconfig.json
$ firebase serve --only functions,hosting
```

Run on Cloud Functions
```
$ firebase deploy --only functions,hosting
```

## Macros in Endpoints
- ${mockserver_protocol}
- ${mockserver_host}

### Hướng dẫn cài đặt source code get console

#### Tải source về máy local
```bash
    https://github.com/ngocquy-allgrow/get_all_console.git
```
#### Cài đặt node_modules
```bash
    npm install
```

#### Chạy server bằng cmd
```bash
    node app.js
```

### Hướng dẫn request url get console

```bash
    http://localhost:3000/get-console
```

### Response thành thông
```bash
    {
        "sucess": true,
        "data": [
            {
                "WAR": "jQuery.Deferred exception: rootUrl is not defined ReferenceError: rootUrl is not defined\n    at initUploadFaq (http://toancaumobile.vn/Content/js/v-636904940877544075/library.js:1013:14)\n    at HTMLDocument.<anonymous> (http://toancaumobile.vn/Content/js/v-636904940877544075/library.js:1047:5)\n    at j (http://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js:2:29948)\n    at k (http://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js:2:30262) "
            },
            {
                "INF": "This is information description"
            },
            {
                "ERR": "Failed to load resource: the server responded with a status of 404 (Not Found)"
            }
        ]
    }
```

### Data trả về lỗi
```bash
    {
        "sucess": false,
        "data": {
            "url": [
                "Url invalid"
            ]
        }
    }
```

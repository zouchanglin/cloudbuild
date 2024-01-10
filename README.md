# cloud-build

gunicorn start
```
gunicorn -w 5 -b 0.0.0.0:8090 app:app
```

gunicorn start by config
```
gunicorn -c config.py app:app
```

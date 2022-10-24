# Simple docker app

This is a simple node app that will run in docker.

here are the steps

```
docker build .
```
lets give it a tagname
the `key` you got by the build

```
docker tag <key> dockbang
```
and now lets run it
```
docker run -t -i -p 8000:8000 -name test1 dockbang
```

and boom you will able to open the `PORT` 8000 of machine
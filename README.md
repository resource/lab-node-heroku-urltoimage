
# lab-node-heroku-urltoimage

Converting a URL to an image on [Heroku](http://heroku.com) with
[PhantomJS](http://phantomjs.org/) and [ExpressJS](http://expressjs.com/) is
surprisingly easy. Just takes a little bit of finesse with
[Buildpacks](https://devcenter.heroku.com/articles/buildpack-binaries) on
[Heroku](http://heroku.com).

### Local

Run this experiment locally

```sh
[~] mkdir test && cd test
[~/test] git clone https://github.com/resource/lab-node-heroku-urltoimage.git .
[~/test] npm install
[~/test] foreman start
[~/test] open http://localhost:5000/render
```

### Heroku

Run this experiment on Heroku

```
[~/test] heroku apps:create
[~/test] heroku config:add BUILDPACK_URL=https://github.com/ddollar/heroku-buildpack-multi.git
[~/test] heroku config:add PHANTOMJS_PATH=/app/vendor/phantomjs/bin/phantomjs
[~/test] git push heroku master
[~/test] source bin/open
```

### Bonus

Run this experiment with a custom URI

```
[~/test] open http://localhost:5000/render?uri=http://www.github.com/resource/lab-node-heroku-urltoimage
```

### Disclaimer

This repository like all other "lab-&#42;" repositories under the Resource GitHub
account are experimental in nature. They are provided as-is and updates are sparce.

### License

2013 &copy; [Resource LLC](http://resource.com)

Licensed under the [MIT License](blob/master/LICENSE)


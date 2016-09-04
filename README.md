# Flask-React

This is boilerplate for using [Flask][flask] to serve up [React][react] views.

# TODO

* Use Gulp for build [x]
* Use [watchify][gwatchify] with Gulp
* Links should open in new tabs
* Introduce secondary color for list backgrounds
* Pictures for hotels

# Getting Started

## JavaScript Packages

Make your life easier and have the current LTS version of [node][node] installed via [node version manager (nvm)][nvm]. Use [node package manager (npm)][npm], which comes default with all [node][node] installations, to install the JavaScript front-end library dependencies:

* [React][react]

and the JavaScript local development dependencies:

* [babel][babel]
* [babel-presets-react][babel-p-r]
* [babel-presets-es2015][babel-p-r]

just type the following while in your working directory:

`npm install`

It will read the `package.json` supplied by this repo.

Also use [npm][npm] to get yourself some JavaScript dev tools you will want at the global level.

* [browserify][brwsfy]

`npm install -g browserify`

[flask]: http://flask.pocoo.org/
[react]: http://facebook.github.io/react
[gwatchify]: https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md

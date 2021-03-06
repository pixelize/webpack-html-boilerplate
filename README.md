
Webpack HTML boilerplate
-------
A simple webpack html boilerplate including some tools for your front-end development. The goal of this boilerplate is to get a ready to go template for starting any web project. The mail app includes a basic template coded with [MJML](https://github.com/mjmlio/mjml), a powerful framework designed for developing responsive email with ease.

Tools included :

 - [Lost grid](https://github.com/peterramsing/lost)
 - [normalize css](https://necolas.github.io/normalize.css/)
 - [jQuery](https://jquery.com/)
 - [MJML](https://mjml.io/)
 - [Autoprefixer](https://github.com/autoprefixer)
 - [Snazzy](https://github.com/feross/snazzy)

> Please, if you find any frameworks, plugins or tools which could be the worth added to the boilerplate, let me know & [create an issue](https://github.com/pixelize/webpack-html-boilerplate/issues)


How to get started with the web app?
-------
####Install deps
```sh
npm install
```
####Start server
```sh
npm start
```
> server starts on http://localhost:3000

####Icon system
The boilerplate is coming with a svg icon system management. Simply add you .svg files into app/images/icons/files.
In your html files use : 
```sh
<i class="icon icon-filename"></i>
```

###Lint JS
You can lint your .js files using [snazzy](https://github.com/feross/snazzy)
```sh
npm run lint
```


How to get started with the mail app?
-------
####Install deps
```sh
npm install
```
####Start server
```sh
npm run email:watch
```
> server's automatically watching for changes & starts on http://localhost:8080*

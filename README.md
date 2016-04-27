#React webpack simple test
This project will be evolving into a more complex react app with more development and production configurations and tools using npm and webpack.

##To create the bundle from command line
```sh 
webpack main.js bundle.js --module-bind 'js=babel-loader'
```
###To show error details add the following parameter at the end
```sh 
--display-error-details
```
##After adding the file webpack.config.js we can just run:
```sh
webpack
```
##To start the development server
```sh
webpack-dev-server
```
###Options
```sh
--progress --color
```
To see the app running on a iframe with live reload go to:
http://localhost:8080/webpack-dev-server/

Or just go to http://localhost:8080 to see the app without live reload

##A good reference page:
https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9#.zbxubqvml

##Some tasks were configured on package.son so...
use
```sh
npm start
```
to start webpack-dev-server with live reload ang hot module reload.
Just open http://localhost:8080 and the page will replace the module without reloading the page, but if HMR fails it will reload the page.

Note, we can also configure the dev server Via webpack.config.js instead of a CLI task
```sh
devServer: {
 inline: true,
 hot:true
}
 ```
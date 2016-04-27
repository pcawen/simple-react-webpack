#React webpack simple test
This project will be evolving into a more complex react app with more development and production configurations and tools using npm and webpack.

##To create the bundle from command line
```sh 
webpack main.js bundle.js --module-bind 'js=babel-loader'
```
###To show error details add the followin parameter at the end
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
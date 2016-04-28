var React = require('react');
var ReactDOM = require('react-dom');
var SayHello = require('./helloworld');

var aName = "Boby";
var nameLst = ["Alice", "Bod", "Dylan", "Charly"];

ReactDOM.render(
  <SayHello nameLst={nameLst}/>,
  document.getElementById('myApp')
);

console.log(process.env.NODE_ENV);
var React = require('react');
var ReactDOM = require('react-dom');
var SayHello = require('./helloworld');

ReactDOM.render(
  <SayHello/>,
  document.getElementById('myApp')
);

console.log(process.env.NODE_ENV);
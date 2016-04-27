var React = require('react');
var ReactDOM = require('react-dom');
require('helloworld.jsx');

ReactDOM.render(
  <SayHello/>,
  document.getElementById('myApp')
);

console.log(process.env.NODE_ENV);
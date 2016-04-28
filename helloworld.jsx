var React = require('react');

var SayHello = React.createClass({
  render: function() {
  	var nameList = this.props.nameLst.map(function(name) {
  	  return (
        <li>{name}</li>
  	  );
  	});
  	return (
  	  <div>
        <h1>Hi there :q {this.props.nameLst[0]}</h1>
	    <ul>{nameList}</ul>
	  </div>
  	);
  }
});

module.exports =  SayHello;
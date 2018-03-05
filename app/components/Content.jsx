const React = require('react');

const Worksheets = require('./Worksheets');
const Items = require('./Items');

const Content = function(props) {
  return (
    <div id="content">
      
      <h2>{props.title}</h2>
      <Worksheets worksheets={props.worksheets} />
      <Items items={props.rows} />
    </div>
  ); 
}

module.exports = Content;
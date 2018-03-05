const React = require('react');

const Item = function(props) {
  //Object.keys(this.state.items).map(function (key) {
  //var item = this.state.items[key]
  const currentItem = Object.keys(props.currentItem).map(function(key) {
    if (key != "Image"){
      return <li key={key}>{key}: {props.currentItem[key]}</li>;
    } else {
      return null
    }
  });
  
  return (
    <div className="Item">
      <ul>
        {currentItem}
      </ul>
    </div>
  ); 
}

module.exports = Item;
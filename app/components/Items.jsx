const React = require('react');

const Item = require('./Item');

const Items = function(props) {
  console.log("ITEMS");
  console.log(props);
  
  const items = props.items.map((item) =>
    <li key={item.Id}><Item currentItem={item} /></li>                                            
  );
  
  return (
    <div id="Items">
      <ul>
        {items}
      </ul>
    </div>
  ); 
}

module.exports = Items;
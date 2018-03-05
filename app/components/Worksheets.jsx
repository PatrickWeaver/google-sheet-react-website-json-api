const React = require('react');

const Worksheets = function(props) {
  
  const worksheetItems = props.worksheets.map((sheet) =>
    <li key={sheet.title}><a href="">{sheet.title}</a></li>                                            
  );
  
  return (
    <div id="Worksheets">
      <ul>
        {worksheetItems}
      </ul>
    </div>
  ); 
}

module.exports = Worksheets;
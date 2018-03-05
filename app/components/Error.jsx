const React = require('react');

const Error = function(props) {
  console.log(props.error);
  if (props.error){
    return (
      <div className="Error">
        <h3>Error:</h3>
        <p>{props.error}</p>
      </div>
    ); 
  } else {
    return(
      <div></div>
    )
  }
}

module.exports = Error;
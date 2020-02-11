import React from "react";

function Title(){
  var titleStyles = {

    fontFamily: 'sans-serif',
    textAlign: 'center'
  }


  return (
    <div style={titleStyles}>
    <h3> Profile </h3>
    <p>Pinned Posts:</p>

    </div>
  );
}

export default Title;

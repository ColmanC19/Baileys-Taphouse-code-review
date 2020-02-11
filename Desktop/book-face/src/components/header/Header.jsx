import React from "react";
function Header(){
  var headerStyles = {

    fontFamily: 'monospace',
    textAlign: 'left',
  }


  return (
    <div style={headerStyles}>
    <h1 className="nameHeader"> Colman Currie </h1>
    <h3> Joined Book-Face Feb. 2020</h3>
    <p></p>

    </div>
  );
}




export default Header

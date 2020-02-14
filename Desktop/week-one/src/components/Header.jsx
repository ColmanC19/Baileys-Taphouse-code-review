import React from "react";



function Header(){


 const navigation = {
   color: 'white',
   fontSize: '25px',
   textDecoration: 'none',
   fontWeight: '700',


 }

 const menu = {
   backgroundColor: "black",
   height: "80px",
   textAlign: "center",
   paddingTop: '20px',
   wordSpacing: '20px'
 }


 return (

   <div style={menu}>
   <a href="#" style={navigation} > | Home | </a>
   <a href="#" style={navigation} > Beers on Tap | </a>

   </div>

 );
}
export default Header;

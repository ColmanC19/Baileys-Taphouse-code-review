import React from "react";
import { Link } from 'react-router-dom';


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
   <Link style={navigation} to="/">🌳 Home 🌳</Link> <Link style={navigation} to="/newticket">🌳 Beers on Tap 🌳</Link>


   </div>

 );
}
export default Header;

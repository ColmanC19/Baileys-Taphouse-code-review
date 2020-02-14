import React from "react";


const HomeBodycss = {
  display: "inlineBlock",
  border: "solid",
  padding: "20px",
  margin: "5px",
  width: "500px",
  height: "150px"
}
function HomeBody(){
  return(
    <div style ={HomeBodycss}>
    <h1>Welcome to Baileys Taphouse</h1>
    <h2>An experience for the craft brew enthusiast. Bring your friends, parents, spouse or your pooch. No Minors.</h2>
    </div>
    
  )
}

export default HomeBody

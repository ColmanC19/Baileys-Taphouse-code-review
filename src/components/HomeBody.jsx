import React from "react";

const homeBodycss = {
  display: "inline-Block",
  gridTemplateColumns: "1fr 1fr 1fr",
  border: "solid",
  padding: "30px",
  marginTop: "Auto",
  marginBottom: "Auto",
  marginLeft: "Auto",
  MarginRight: "Auto",
  width: "500px",
  height: "150px"
}
function HomeBody(){
  return(
    <div>
    <div style ={homeBodycss}>
    <h1>Welcome to Baileys Taphouse</h1>
    <h2>An experience for the craft brew enthusiast. Bring your friends, parents, spouse or your pooch. No Minors.</h2>
    </div>
    <div style ={homeBodycss}>
    <h1>Plan your next event here!</h1>
    <h2>Bachelor/Bachelorette parties, weddings, meetups, office outings or any reason to get a large group of friends together! </h2>

    </div>
    </div>

  )
}

export default HomeBody

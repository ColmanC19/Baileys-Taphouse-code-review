import React from "react";


const HomeBodycss = {
  display: "inlineBlock",
  gridTemplateColumns: "1fr 1fr 1fr",
  border: "solid",
  padding: "30px",
  margin: "Auto",
  width: "500px",
  height: "150px"
}
function HomeBody(){
  return(
    <div>
    <div style ={HomeBodycss}>
    <h1>Welcome to Baileys Taphouse</h1>
    <h2>An experience for the craft brew enthusiast. Bring your friends, parents, spouse or your pooch. No Minors.</h2>
    </div>
    <div style ={HomeBodycss}>
    <h1>Plan your next event here!</h1>
    <h2>Bachelor/Bachelorette parties, weddings, meetups, office outings or any reason to get a large group of friends together! Enter your email below and we'll get in touch with you.</h2>

    </div>
    </div>

  )
}

export default HomeBody

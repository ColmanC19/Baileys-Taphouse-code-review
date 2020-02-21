import React from "react";
import PropTypes from "prop-types";

function Beer(props){
  return(
    <div>
    <h3>{props.breweryName}</h3>
    <h4>{props.beerStyle}: {props.abv}%</h4>
    </div>
  )
}
Beer.propTypes={
  breweryName: PropTypes.string,
  beerStyle: PropTypes.string,
  abv: PropTypes.number,

};

export default Beer
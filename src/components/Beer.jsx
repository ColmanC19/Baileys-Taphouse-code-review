import React from "react";
import PropTypes from "prop-types";
import './Beer.css';

function Beer(props){
  return(
    <div className="taps">
    <h3>{props.breweryName}: {props.beerStyle}({props.abv}%)| </h3>
    </div>
  );
}
Beer.propTypes={
  breweryName: PropTypes.string,
  beerStyle: PropTypes.string,
  abv: PropTypes.number,

};

export default Beer;

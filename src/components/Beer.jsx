import React from "react";
import PropTypes from "prop-types";
import './Beer.css';
import { useHistory } from "react-router-dom";

function Beer(props){
  return(
    <div className="taps">
    <ul>
    <li><h3>{props.breweryName}: {props.beerStyle}({props.abv}%)</h3></li>
    </ul>
    </div>
  );
}
Beer.propTypes={
  breweryName: PropTypes.string,
  beerStyle: PropTypes.string,
  abv: PropTypes.number,

};

export default Beer;

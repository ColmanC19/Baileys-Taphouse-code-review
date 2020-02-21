import React from 'react';
import Beer from './Beer';
import PropTypes from "prop-types";
import './BeerTapsCss.css'

function BeerTaps(props){

  return(
    <div>
    <h1> What's currently on tap!</h1>
    <div>
    <hr/>
    {props.beerTaps.map((beer) =>
      <Beer breweryName={beer.breweryName}
      beerStyle={beer.beerStyle}
      abv={beer.abv}
      key={beer.id}/>
    )}
    <hr/>
    </div>
      <img src="https://cdn.vox-cdn.com/thumbor/__lr1xhyOvpxWUe04CHu-DSczAI=/0x31:250x219/1400x1400/filters:focal(0x31:250x219):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/38813924/growlerguys250SE.0.jpg" alt="taps"/>
    </div>
  );
}
BeerTaps.propTypes = {
beerTaps: PropTypes.array
};

export default BeerTaps;

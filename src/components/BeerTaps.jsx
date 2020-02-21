import React from 'react';
import Beer from './Beer.jsx';
import PropTypes from "prop-types";
import Taps from './images/taps.jpg'
import './BeerTapsCss.css'

function BeerTaps(props){
  var masterBeerTapList = [
  {
    breweryName: 'Breakside Brewery',
    beerStyle: 'Wanderlust IPA',
    abv: '6.7'
  },
  {
    breweryName: 'Ft. George',
    beerStyle: 'Vortex IPA',
    abv: '7.7'
  },
  {
    breweryName: 'Baerlic',
    beerStyle: 'Dark Thoughts CDA',
    abv: '6.66'
  },
  {
    breweryName: 'Von Eberts',
    beerStyle: 'Battle Stations! IPA',
    abv: '7.2'
  }
];

  return(
    <div>
    <h1> What's currently on tap!</h1>
    <div className = "tapspic">
      <img src="https://cdn.vox-cdn.com/thumbor/__lr1xhyOvpxWUe04CHu-DSczAI=/0x31:250x219/1400x1400/filters:focal(0x31:250x219):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/38813924/growlerguys250SE.0.jpg"/>
    </div>
    <div>
      <hr/>
      {masterBeerTapList.map((beer) =>
        <Beer breweryName={beer.breweryName}
          beerStyle={beer.beerStyle}
          abv={beer.abv}
          key={beer.id}/>
      )}
    </div>
    </div>
  );
}
BeerTaps.propTypes = {
beerTaps: PropTypes.array
};

export default BeerTaps

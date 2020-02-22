import React from "react";
import PropTypes from 'prop-types';
import BeerTaps from './BeerTaps';
import { v4 } from 'uuid';
import { Redirect } from 'react-router-dom'

function NewBeerForm(props){
  let _breweryName = null;
  let _beerStyle = null;
  let _abv = null;



  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
      props.onNewBeerCreation({breweryName: _breweryName.value, beerStyle: _beerStyle.value, abv: _abv.value, id: v4()});
    _breweryName.value = '';
    _beerStyle.value = '';
    _abv.value = '';

}
  return (
    <div>
      <form onSubmit={handleNewBeerFormSubmission}>
        <input
          type='text'
          id='breweryName'
          placeholder='Brewery Name'
          ref={(input) => {_breweryName = input;}}/>
        <input
          type='text'
          id='beerStyle'
          placeholder='Beer Name and Style'
          ref={(input) => {_beerStyle = input;}}/>
        <input
          type="text"
          id='abv'
          placeholder='abv?'
          ref={(input) => {_abv = input;}}/>
        <button type='submit'>Add Beer to queue</button>
      </form>
    </div>
  );
}
NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;

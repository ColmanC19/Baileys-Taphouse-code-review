import React from 'react';
import PropTypes from 'prop-types';

function NewBeerForm(props){
  let _breweryName = null;
  let _beerStyle = null;
  let _abv = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
      props.onNewBeerCreation({brewery: _breweryName.value, beerS: _beerStyle.value, abv: _abv.value});
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
          placeholder='Brewery Name'/>
          ref={(input) => {_breweryName = input;}}/>
        <input
          type='text'
          id='beerStyle'
          placeholder='Beer Name and Style'/>
          ref={(input) => {_beerStyle = input;}}/>
        <input
          type="text"
          id='abv'
          placeholder='abv?'/>
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

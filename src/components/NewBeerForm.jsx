import React from 'react';

function NewBeerForm(){
  let _breweryName = null;
  let _beerStyle = null;
  let _abv = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
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

export default NewBeerForm;

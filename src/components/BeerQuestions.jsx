import React from 'react';
import PropTypes from 'prop-types';

function BeerQuestions(props){
  return (
    <div>
      <p>Are you sure you would like to proceed?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}
BeerQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default BeerQuestions;

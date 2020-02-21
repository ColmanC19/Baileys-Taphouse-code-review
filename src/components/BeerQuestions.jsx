import React from 'react';

function BeerQuestions(){
  return (
    <div>
      <p>Are you sure you would like to proceed?</p>
      <button>Yes</button>
    </div>
  );
}
ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default BeerQuestions;

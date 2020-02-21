import React from 'react';
import BeerQuestions from './BeerQuestions';
import NewBeerForm from './NewBeerForm';

class NewBeerControl extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    formVisibleOnPage: false
  };
  this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
}

handleTroubleshootingConfirmation(){
  this.setState({formVisibleOnPage: true});
}

  render(){
    let currentlyVisibleContent = null;
      if (this.state.formVisibleOnPage){
        currentlyVisibleContent = <NewBeerForm />;
      } else {
        currentlyVisibleContent = <BeerQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
      }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default NewBeerControl;

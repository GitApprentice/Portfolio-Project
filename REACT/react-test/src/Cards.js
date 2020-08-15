import React from 'react';
import './Cards.css';
import ReactCardFlip from 'react-card-flip';



class Cards extends React.Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
   
    render() {
      return (
        <div class='outline'>    
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <div class='front1'>
              This is the front of the card.
              <button onClick={this.handleClick}>Click to flip</button>
            </div>
    
            <div class='back1'>
              This is the back of the card.
              <button onClick={this.handleClick}>Click to flip</button>
            </div>
          </ReactCardFlip>

          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <div class='front2'>
              This is the front of the card.
              <button onClick={this.handleClick}>Click to flip</button>
            </div>

            <div class='back2'>
              This is the back of the card.
              <button onClick={this.handleClick}>Click to flip</button>
            </div>
          </ReactCardFlip>

          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <div class='front3'>
              This is the front of the card.
              <button onClick={this.handleClick}>Click to flip</button>
            </div>

            <div class='back3'>
              This is the back of the card.
              <button onClick={this.handleClick}>Click to flip</button>
            </div>
          </ReactCardFlip>

          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <div class='front4'>
              This is the front of the card.
              <button onClick={this.handleClick}>Click to flip</button>
            </div>

            <div class='back4'>
              This is the back of the card.
              <button onClick={this.handleClick}>Click to flip</button>
            </div>
          </ReactCardFlip>
        </div>  
      )
    }
  }

export default Cards;
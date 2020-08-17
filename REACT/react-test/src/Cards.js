import React from 'react';
import './Cards.css';
import Flippy, { FrontSide, BackSide } from 'react-flippy';


class Cards extends React.Component {
    render() {
      return (
        <div class='outline'>
          <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            >
            <FrontSide style={{height:'50vh', width:'20vw', margin:'20px'}}>
              RICK
            </FrontSide>
            <BackSide>
              ROCKS
            </BackSide>
          </Flippy>

          <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            >
            <FrontSide style={{height:'50vh', width:'20vw', margin:'20px'}}>
              RICK
            </FrontSide>
            <BackSide>
              ROCKS
            </BackSide>
          </Flippy>

          <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            >
            <FrontSide style={{height:'50vh', width:'20vw', margin:'20px'}}>
              RICK
            </FrontSide>
            <BackSide>
              ROCKS
            </BackSide>
          </Flippy>

          <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            >
            <FrontSide style={{height:'50vh', width:'20vw', margin:'20px'}}>
              RICK
            </FrontSide>
            <BackSide>
              ROCKS
            </BackSide>
          </Flippy>
        </div>  
      );
    }
}

export default Cards;
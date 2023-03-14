import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PlayNumber from './PlayNumber'
import StarsDisplay from './StarsDisplay';
import utils from './utils';



const App = () => {
  const [stars, setStars] = useState(utils.random(1,9)); //set the stars to state, using utils.random from the predefined utils function
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
            <StarsDisplay count={stars}/>
        </div>
        <div className="right">
          {utils.range(1, 9).map(number =>
            <PlayNumber key={number} number={number}/> //map a range of 1 to 9, call each one 'number', then pass that number down to the PlayNumber component as... 'number'
            )} 
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

export default App;

import React, { Component } from 'react';
import './App.css';
// import Header from './Header/Header';
// import Panel from './Panel/Panel';
// import FromTo from './Fromto/FromTo';
// import RoundedSquare from './RoundedSquare/RoundedSquare';
// import List from './List/List';
// import Specificity from './Specificity/Specificity';
// import Display from './Display/Display';
// import FloatClear from './FloatClear/FloatClear';
// import Overflow from './Overflow/Overflow';
// import Combinator from './Combinator/Combinator';
// import Combinator from './Combinator/Combinator';
// import DisplayExample from './DisplayExample/DisplayExample';
// import PositionsExample from './Positions/PositionsExample';
import PseudoSelectors from './PseudoSelectors/PseudoSelectors';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className ="content">
         <PseudoSelectors/>
         {/* <DisplayExample/> */}
         {/* <PositionsExample/> */}
        </div>        
      </div>
    );
  }
}

export default App;

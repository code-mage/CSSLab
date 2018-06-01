import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Panel from './Panel/Panel';
import FromTo from './Fromto/FromTo';
import RoundedSquare from './RoundedSquare/RoundedSquare';
import List from './List/List';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className ="header">
          <Header/>
        </div> 
        <div className ="content">
         <List/>
        </div>        
      </div>
    );
  }
}

export default App;

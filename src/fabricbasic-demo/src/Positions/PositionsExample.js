import React, { Component } from 'react';
import './PositionsExample.css';


class PositionsExample extends Component {
    render() {
      return (
        <div className="poisiton-example">
           <h2>First child</h2>
           <div class="positioned-child child1">
                {/* positioned  */}
                element 1
           </div>
           {/* <div class="positioned-child child2">
                positioned element 2
           </div> */}
        </div>
      );
    }
  }

export default PositionsExample;
import React, { Component } from 'react';
import './DisplayExample.css';


class DisplayExample extends Component {
    render() {
      return (
        <div className="display-example">
           <h2>Display Examples</h2>
           <div class="block-example">
            This is block element
            {/* containing a <span>inline element</span> */}
           </div>

           {/* <div className="flex-container">
            <div className="flex-item">flex item 1</div>
            <div className="flex-item">flex item 2</div>
            <div className="flex-item">flex item 3</div>
            <div className="flex-item">flex item 4</div>
            <div className="flex-item">flex item 5</div>
            <div className="flex-item">flex item 6</div>
            <div className="flex-item">flex item 7</div>
           </div> */}
        </div>
      );
    }
  }
  
export default DisplayExample;
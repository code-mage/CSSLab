import React, { Component } from 'react';
import './Combinator.css';

class Combinator extends Component {
    render() {

    return (<div>
            <h2>Combinators</h2>

            <div className="combinator-header">
                <div className="combinator-content">
                    <div className="test-div1">
                        <div className="test-div-child1">{"one"}
                        </div>
                        <div className="test-div-child2">{"two"}
                        </div>
                    </div>
                    <div className="text-div test-div2">{"three"}
                    </div>
                    <div className="text-div test-div3">{"four"}
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Combinator;
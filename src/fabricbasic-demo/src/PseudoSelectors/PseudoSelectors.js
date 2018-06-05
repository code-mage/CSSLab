import React, { Component } from 'react';
import './PseudoSelectors.css';

class PseudoSelectors extends Component {
    render() {

    return (<div>
            <h2>PseudoSelectors</h2>

            <h2>Before</h2>
            <div className="selector-header">
                <div className="selector-content">
                    <div className="test-div1">
                        {"One"}
                    </div>
                </div>
            </div>

            <h2>Selection</h2>
            <div className="selector-header">
                <div className="selector-content">
                    <div className="test-div2">
                        {"Two"}
                    </div>
                </div>
            </div>

            <h2>Before</h2>
            <div className="selector-header">
                <div className="selector-content">
                    <div className="test-div3">
                        {"Three"}
                    </div>
                </div>
            </div>

            <h2>Before</h2>
            <div className="selector-header">
                <div className="selector-content">
                    <div className="cell">
                        {"Four"}
                    </div>
                    <div className="cell">
                        {"Five"}
                    </div>
                    <div className="cell">
                        {"Six"}
                    </div>
                    <div className="cell">
                        {"Seven"}
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default PseudoSelectors;
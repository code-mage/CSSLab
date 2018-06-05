import React, { Component } from 'react';
import './FloatClear.css';

class FloatClear extends Component {
    render() {
      return (<div>
        <h2>Float and Clear</h2>

            <h2>No styling</h2>
            <div className="float-clear-header">
                <div className="float-clear-content">
                    <div className="float-clear-left">
                        {"one"}
                    </div>
                    <div className="float-clear-right">                    
                        {"two"}
                    </div>
                </div>
            </div>

            <h2>Float left</h2>
            <div className="float-clear-header one">
                <div className="float-clear-content">
                    <div className="float-clear-left">
                        {"one"}
                    </div>
                    <div className="float-clear-right">                    
                        {"two"}
                    </div>
                </div>
            </div>

            <h2>Float right</h2>
            <div className="float-clear-header two">
                <div className="float-clear-content">
                    <div className="float-clear-left">
                        {"one"}
                    </div>
                    <div className="float-clear-right">                    
                        {"two"}
                    </div>
                </div>
            </div>

            <h2>Float and clear left</h2>
            <div className="float-clear-header three">
                <div className="float-clear-content">
                    <div className="float-clear-left">
                        {"one"}
                    </div>
                    <div className="float-clear-right">                    
                        {"two"}
                    </div>
                </div>
            </div>

            <h2>Float and clear right</h2>
            <div className="float-clear-header four">
                <div className="float-clear-content">
                    <div className="float-clear-left">
                        {"one"}
                    </div>
                    <div className="float-clear-right">                    
                        {"two"}
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default FloatClear;
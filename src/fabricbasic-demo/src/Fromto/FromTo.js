import React, { Component } from 'react';
import './FromTo.css';

import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { Panel as OffiePanel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

class FromTo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPanel: false
        };

        initializeIcons();
    }

    render() {
      return (
        <div className="panel-content">
            <h2>From - To</h2>
            {this._fromto()}
        </div>
      );
    }

    _fromto(){
      return (<div className="deploy-panel release-section">
      <div className="currently-deployed">
          <div className="release-header currently-deployed-header">
              <Icon iconName='RadioBtnOff' className='header-icon currently-deployed-header-icon' />
              <div className="header-text currently-deployed-header-text">{"From"}</div>
          </div>
          <div className="release-content currently-deployed-content">
            {"Location 1"}
          </div>
      </div>
      <div className="to-be-deployed">
          <div className="release-header to-be-deployed-header">
              <Icon iconName='RadioBtnOn' className='header-icon to-be-deployed-header-icon' />
              <div className="header-text to-be-deployed-header-text">{"To"}</div>
          </div>
          <div className="release-content to-be-deployed-content">
              {"Location 2"}
          </div>
      </div>
  </div>
  );
    }
  }
  
  export default FromTo;
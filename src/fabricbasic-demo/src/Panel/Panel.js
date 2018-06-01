import React, { Component } from 'react';
import './Panel.css';

import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { Panel as OffiePanel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

class Panel extends Component {
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
            <h2> Panel</h2>
            <PrimaryButton
            secondaryText='Opens the Sample Panel'
            onClick={ this._onShowPanel }
            text='Open Panel'
            />
            {this._renderPanel()}
        </div>
      );
    }

    _renderPanel() {
        return (<OffiePanel
          isOpen={ this.state.showPanel }
          type={ PanelType.smallFixedFar }
          onDismiss={ this._onClosePanel }
          closeButtonAriaLabel='Close'
        >

            <div className="panel-subheader">
                <div className="panel-subheader-text">Panel Header</div>
                <Icon iconName='Clock' className='compass' />
            </div>

            {this._renderRandomContent()}

            {this._onRenderFooterContent()}
         
        </OffiePanel>);
    }

    _renderRandomContent() {
        let longRandomText = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32. \n\n\n It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

        var sections = [];

        for (var i = 0; i < 4; i++) {
            //try using button
            sections.push( <div>
                <div className="section">{longRandomText}</div>
                <div className="seperator"/>
                </div>);
            }
        return (<div className = "sections">
            {sections}
            </div>);
    }

    _onClosePanel = () => {
        this.setState({ showPanel: false });
      }

    _onRenderFooterContent = () => {
        return (
          <div className="footer-buttons">
            <PrimaryButton
              onClick={ this._onClosePanel }
              style={ { 'marginRight': '8px' } }
            >
              OK
            </PrimaryButton>
            <DefaultButton
              onClick={ this._onClosePanel }
            >
              Cancel
            </DefaultButton>
          </div>
        );
      }
    
      _onShowPanel = () => {
        this.setState({ showPanel: true });
      }
  }
  
  export default Panel;
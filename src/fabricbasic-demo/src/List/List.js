import React, { Component } from 'react';
import logo from './../Images/DeathStar.png'
import profile from './../Images/prof_mine.PNG'
import './List.css';

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

class List extends Component {
    constructor(props) {
      super(props);

      initializeIcons();
    }

    render() {
      return (
        this._rendercell()
      );
    }

    _rendercell(){
      return <Icon iconName='Clock' className='compass' />
    }
  }
  
  export default List;
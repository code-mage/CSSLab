import React, { Component } from 'react';
import logo from './../Images/DeathStar.png'
import profile from './../Images/prof_mine.PNG'
import './RoundedSquare.css';

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

class Header extends Component {
    render() {
      return (
        <div>            
            <h2>RoundedSquare</h2>
            <div className="content1">
                <h3 className="text">Text</h3>
                <Image height={400} width={400} className="circle" src={logo}/>                
            </div>
        </div>
      );
    }
  }
  
  export default Header;
import React, { Component } from 'react';
import logo from './../Images/DeathStar.png'
import profile from './../Images/prof_mine.PNG'
import './Header.css';

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

class Header extends Component {
    render() {
      return (
        <div className="app-header">
            <div className="app-header-content">
                <div className="left">
                    <Image height={34} width={34} className="logo" src={logo}/>
                    <div className="death-star-text">Project</div>
                </div>
                <div className="right">                    
                    <div className="profile">
                        <Image height={25} width={25} className="profile-logo" src={profile}/>
                        <div className="profile-text">Profile</div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Header;
import React, { Component } from 'react';
import logo from './../Images/DeathStar.png'
import profile from './../Images/prof_mine.PNG'
import './Specificity.css';


class Specificity extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( <div> 
                <h2> Specificity </h2> 
                <div className = "container" >
                    {/* <h4 className = "content1" style = {{ color: "red" } } > Sample </h4>  */}
                    <h4 className = "content1 randomcontent" > Sample </h4> 
                </div>
            </div>
        );
    }
}

export default Specificity;
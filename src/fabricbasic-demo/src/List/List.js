import React, { Component } from 'react';
import logo from './../Images/DeathStar.png'
import profile from './../Images/prof_mine.PNG'
import './List.css';

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import {
  TooltipHost,
  TooltipOverflowMode
} from 'office-ui-fabric-react/lib/Tooltip';

class List extends Component {
    constructor(props) {
      super(props);

      initializeIcons();
    }

    render() {
      return (
        <div className="table">
            <h2>Table</h2>
            <div className="table-content">
              {this._renderList1()}
              {this._renderList2()}
              {this._renderList3()}
            </div>
        </div>
      );
    }

    _renderList1(){
      return (
        <div>
          <h3>Overflow and N-th child</h3>
          <div className="column1">          
            <div className="cell names">Name1</div>
            <div className="cell names">Name2</div>
            <div className="cell names">Name3</div>
            <div className="cell names">
            <TooltipHost
              content='Name4  Names4  Names4  Names4  Names4  Names4  Names4  Names4  Names4  Names4  Names4  Names4'
              overflowMode={ TooltipOverflowMode.Self }
            >
              <div className="overflow">Name4  Names4  Names4  Names4  Names4  Names4  Names4  Names4  Names4  Names4  Names4  Names4</div>
            </TooltipHost>
            </div>
            <div className="cell names">Name5</div>
            <div className="cell names">Name6</div>
          </div>
        </div>
      );
    }

    _renderList2(){
      return (
        <div className="column2-header">
          <h3>N-th child</h3>
          <div className="column2">          
            <div className="cell names">Name1</div>
            <div className="cell names">Name2</div>
            <div className="cell names">Name3</div>
            <div className="cell names">Name4</div>
            <div className="cell names">Name5</div>
            <div className="cell names">Name6</div>
          </div>
        </div>
      );
    }

    _renderList3(){
      return (
        <div className="column3-header">
          <h3>Line Height</h3>
          <div className="column3">          
            <div className="cell names">Name1</div>
            <div className="cell names">Name2</div>
            <div className="cell names">Name3</div>
            <div className="cell names">Name4</div>
          </div>
        </div>
      );
    }

    _renderTable(){
      return (<table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Random long name </td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel Roland Mendel Roland Mendel Roland Mendel Roland Mendel Roland Mendel Roland Mendel Roland Mendel Roland Mendel Roland Mendel Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </table>);
    }
  }
  
  export default List;
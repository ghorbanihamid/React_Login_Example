
import React, { Component } from 'react';
import LeftMenu             from '../menu/LeftMenu';

class Dashboard extends Component {

  render(){
    var divStyle ={
      width:'300px',
      color:'black',
      backgroundColor:'coral',
      border:'dashed',
      vAlign:"middle",
      verticalAlign:"middle"
    };
    return(
      <div name="div2" align="center" style={divStyle}>
        <br/>
        <h1>Menu</h1>
        <br/>
        <LeftMenu />
        <br/>
      </div>
    )
  }
}
export default Dashboard;

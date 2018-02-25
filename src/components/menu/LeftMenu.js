
import React, { Component }  from 'react';
import {Link, withRouter }   from 'react-router-dom';

class LeftMenu extends Component {

  render(){
    return(
      <div name="div1" align="center" style={{width:'300px',height:"500px",align:'center'}}>
        <ul style={{listStyle:'none'}}>
          <li><Link to='/newUser'>Register New User</Link></li>
          <br/>
          <li><Link to='/usersList'>users List</Link></li>
        </ul>
      </div>
    )
  }
}
export default withRouter(LeftMenu);

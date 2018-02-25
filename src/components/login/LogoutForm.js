
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router-dom';
import * as actions         from '../../actions/authenticateActions';


class LogoutForm extends Component {

  handleLogoutClick(event) {
    this.props.logout();
  }

  render(){

    return(
        <Link to={'/login'} onClick={(event) => this.handleLogoutClick(event)}>Logout</Link>
    )
  }
}

export default connect(null,actions)(LogoutForm);

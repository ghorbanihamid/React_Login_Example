import React, { Component } from 'react';

class RegisterNewUser extends Component {

  handleRegister(e) {
      e.preventDefault();
      let firstName = this.refs.firstName.value;
      let lastName = this.refs.lastName.value;
      let username = this.refs.username.value;
      let password = this.refs.password.value;
      console.console.log(firstName);
  }

  render(){
    return(
      <form onSubmit={this.handleRegister.bind(this)}>
      <div name="div1" align="center" style={{border:'solid',borderColor:'red',width:'300px',height:"300px",align:'center'}}>
          <h1>This Is Register New User Form</h1>
      </div>
      </form>
    )
  }
}
export default RegisterNewUser;

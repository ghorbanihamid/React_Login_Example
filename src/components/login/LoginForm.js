
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import * as actions         from '../../actions/authenticateActions';
import { withRouter}        from 'react-router-dom';




class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }



  handleLoginClick(event) {

    async function sendLoginRequest (props,states) {

      await props.login(props,states)
                 .then( () => {
                                console.log('*** LoginForm.handleLoginClick().sendLoginRequest() done.');
                              }
                      )
    }
    sendLoginRequest(this.props, this.state);
  }

  renderMessage(){
    if (!this.props.authData.loginStatus) {
        console.log('*** HeaderTag.renderContent() loginStatus is true.');
        return  <div align="center" style={{color:'red',height:'40px'}}>
                  <br/>
                  {this.props.authData.errorMessage}
                </div>
    }
  }

  render(){

    var divStyle ={
      width:'400px',
      color:'black',
      backgroundColor:'coral',
      border:'dashed',
      vAlign:"middle",
      marginLeft: '20px',
      marginRight:'20px',
      verticalAlign:"middle"
    };
    return(
        <div name="div1" align="center" style={{border:'solid',width:'600px',height:"300px",align:'center'}}>
          <br/>
          <br/>
          <br/>
          <div name="div2" align="left" style={divStyle}>
            {this.renderMessage()}
            <br/>
            <label>User name:</label>
            <input name="username" type="input" onChange={(event) => this.handleUsernameChange(event)}/>
            <br/>
            <br/>
            <br/>
            <label>Password:&nbsp;&nbsp;</label>
            <input name="password" type="password" onChange={(event) => this.handlePasswordChange(event)}/>
            <br/>
            <br/>
            <div name="div3" align="center">
              <button type="submit" onClick={(event) => this.handleLoginClick(event)} >Login</button>
            </div>
            <br/>
            <br/>
          </div>
        </div>
    )
  }
}
function mapStateToProps({authData}){
  return {authData};
}
export default  withRouter(connect(mapStateToProps,actions)(LoginForm));

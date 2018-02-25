import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../images/logo.svg';
import LogoutForm from './login/LogoutForm';

class HeaderTag extends Component {

  renderContent(){
    switch (this.props.authData.loginStatus) {
      case true:
        console.log('*** HeaderTag.renderContent() loginStatus is true.');
        return  <div align="right" style={{color:'blue',height:'40px'}}>
                  <div align="left" style={{float:'left', width:'33%', height:'20px'}}>
                  </div>
                  <div align="center" style={{float:'left', width:'33%', height:'20px'}}>
                    Hi {this.props.authData.loginUser}
                  </div>
                  <div align="right" style={{float:'left', width:'30%', height:'20px'}}>
                    <LogoutForm/>
                    <br/>
                    {/* <Link to={'/dashboard'} >Dashboard</Link>                     */}
                  </div>
                </div>
      default :
        console.log('*** HeaderTag.renderContent() loginStatus is false.');
        return  <div></div>
    }
  }

  render(){
    console.log('*** HeaderTag authData : '+ JSON.stringify(this.props.authData));
    return(
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Apllication Example(React,Spring,Mysql)</h1>
          {this.renderContent()}
        </div>
      <br/>
      <br/>
      </div>
    )
  }
}

function mapStateToProps({authData}){
  return {authData};
}
export default connect(mapStateToProps) (HeaderTag);

import React, { Component }            from 'react';
import {connect}                       from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';
import Header                          from './components/Header';
import LoginPage                       from './components/login/LoginForm';
import Dashboard                       from './components/dashboard/Dashboard';
import RegisterNewUser                 from './components/users/RegisterNewUser';
import UsersList                       from './components/users/UsersList';
import './styles/App.css';


const AuthenticatedRoute = ({loginStatus, component: Component, ...rest }) => (
  <Route {...rest}
    render = {
      (props) => {
        console.log("App().AuthenticatedRoute() Called, loginStatus : " + loginStatus);
        if(loginStatus === true){
          console.log("AuthenticatedRoute : Redirect to component");
          return <Component {...props} />
        }
        else {
          console.log("AuthenticatedRoute : Redirect to login");
          return <Redirect to="/login" />
        }
      }
    }
  />
);

class App extends Component {

  render() {
    return (
      <div>
        <div className="App">
            <Header/>
            <Route      exact   path="/"          component={LoginPage} />
            <Route      exact   path="/login"     component={LoginPage} />
            <AuthenticatedRoute path='/dashboard' component={Dashboard}       loginStatus   = {this.props.authData.loginStatus} />
            <AuthenticatedRoute path='/newUser'   component={RegisterNewUser} loginStatus   = {this.props.authData.loginStatus} />
            <AuthenticatedRoute path='/usersList' component={UsersList}       loginStatus   = {this.props.authData.loginStatus} />
        </div>

      </div>
    );
  }
}

function mapStateToProps({authData}){
  console.log("mapStateToProps : " + JSON.stringify(authData));
  return {authData};
}

export default withRouter(connect(mapStateToProps) (App));


import axios from 'axios';
import {LOGIN_SUCCESS,LOGIN_FAILED,LOGOUT_SUCCESS,LOGOUT_FAILED} from './types';


export function login (props,userData) {
  return async function(dispatch){
    var loginUrl = "http://localhost:8080/springmvc/reactLogin?username=" + userData.username + "&password=" + userData.password;
    console.log("login url : " + loginUrl);
    await axios.post(loginUrl)
               .then(res => {
                              let tempData = JSON.parse(JSON.stringify(res.data));
                              console.log("authenticateAction.login.axios.post()  sucessfully called, then() result :" + JSON.stringify(tempData));
                              if(tempData.loginStatus){
                                dispatch({ type : LOGIN_SUCCESS, payload : {loginStatus : true, loginUser : tempData.loginUser, errorMessage:""}});
                                console.log("***** authenticateAction. login sucessfully done, redirecting to /dashboard. *****");
                                props.history.push("/dashboard");
                              }
                              else {
                                console.log("authenticateAction.login.axios.post() called but with invalid username or password.");
                                dispatch({ type : LOGIN_FAILED, payload : {loginStatus : false, loginUser : null, errorMessage:"Invalid username or password!"}})
                              }
                            }
                    )
               .catch(res =>{
                              console.log("login function called with error, error message : " + JSON.stringify(res.response) );
                              if(res.response.status === 401){ // HttpStatus.UNAUTHORIZED
                                console.log("authenticateAction.login.axios.post() called but with invalid username or password.");
                                dispatch({ type : LOGIN_FAILED, payload : {loginStatus : false, loginUser : res.response.data.loginUser, errorMessage:"Invalid username or password!"}});
                              }
                              else {
                                console.log("authenticateAction.login.axios.post(), Can not connect to the server!");
                                dispatch({ type : LOGIN_FAILED, payload : {loginStatus : false, loginUser : null, errorMessage:"Can not connect to the server!"}})
                              }
                            }
                     );
  }
}

export function logout () {

  return async function(dispatch){
    await axios.post("http://localhost:8080/springmvc/reactLogout")
               .then(res => {
                              console.log("authenticateAction.login.axios.post().logout function sucessfully called, result : " + res.data );
                              dispatch({ type : LOGOUT_SUCCESS, payload : {loginStatus : false, loginUser : null, errorMessage:""}
                                       });
                            }
                    )
               .catch(err =>{
                              console.log("authenticateAction.login.axios.post().logout function called with error, error message : " + err );
                              dispatch({ type : LOGOUT_FAILED, payload : {loginStatus : false, loginUser : null, errorMessage:"Can not connect to the server!"}
                                       })
                            }
                     );
  }
}

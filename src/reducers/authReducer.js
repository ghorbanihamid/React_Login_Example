import {LOGIN_SUCCESS,LOGIN_FAILED,LOGOUT_SUCCESS,LOGOUT_FAILED} from '../actions/types';

const initialSate = {loginStatus : false,
                     redirectToUrl: false,
                     loginUser : null}

export default function(state = initialSate, action) {

  console.log('auth Reducer called, current state : '+ JSON.stringify(state));
  console.log('auth Reducer called, new action : '+ JSON.stringify(action));
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;

    case LOGIN_FAILED:
      return action.payload;

    case LOGOUT_SUCCESS:
      return action.payload;

    case LOGOUT_FAILED:
      return action.payload;
    default:
      return state;
  }
}

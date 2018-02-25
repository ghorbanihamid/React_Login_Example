import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
 import  reduxThunk  from 'redux-thunk';
import './styles/index.css';
import App from './App';
import rootReducer from './reducers/rootReducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer,{},applyMiddleware(reduxThunk));

ReactDOM.render(
                <BrowserRouter>
                  <Provider store={store}>
                    <App />
                  </Provider>
                </BrowserRouter>  
                ,
                document.getElementById('root'));

registerServiceWorker();

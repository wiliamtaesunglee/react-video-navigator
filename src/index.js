import React from "react";
import { render } from "react-dom";
import App from "./components/home/App";

// REDUX <----

// Provider makes the redux store avaliable to any nasted component
// wrapped in connect
import { Provider } from 'react-redux'

//Create a store that holds the entirely state of the aplication
import { createStore } from 'redux'

//Specify how the aplication state changes in response to actions
import reducer from './store/reducer'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("app"));

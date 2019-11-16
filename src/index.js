import React from "react";
import { render } from "react-dom";
import App from "./components/home/App";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './store/reducer'

const store = createStore(reducer)

render(<Provider store={store}><App /></Provider>, document.getElementById("app"));

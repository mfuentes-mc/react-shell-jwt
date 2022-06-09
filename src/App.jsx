import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {AppRouter} from '../src/routers/AppRouter';
import {Provider} from "react-redux";
import store from '../src/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>    
      <AppRouter/>
    </Provider> 
  )
}
ReactDOM.render(<App />, document.getElementById("app"));

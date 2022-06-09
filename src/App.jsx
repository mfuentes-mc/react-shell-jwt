import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import {AppRouter} from '../src/routers/AppRouter';
import {Provider} from "react-redux";
import store from '../src/redux/store/store';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>    
        <AppRouter/>
      </Provider> 
    </BrowserRouter>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));

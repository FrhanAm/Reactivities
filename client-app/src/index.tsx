import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import "react-calendar/dist/Calendar.css";
import { StoreContext, store } from "./app/stores/store";
import './App.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
  </StoreContext.Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
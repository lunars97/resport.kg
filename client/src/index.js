import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import thunk from "redux-thunk";
import { reducers } from "./reducers/index";
const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(thunk))
);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

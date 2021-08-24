import React from "react";
import { Route, Redirect } from "react-router-dom";

const user = JSON.parse(localStorage.getItem("profile"));
const PrivateRoute = ({ children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => (user ? children : <Redirect to="/signup" />)}
        />
    );
};

export default PrivateRoute;

import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
    const admin = JSON.parse(localStorage.getItem("profile"));
    return (
        <Route
            {...rest}
            render={() => (admin ? children : <Redirect to="/signup" />)}
        />
    );
};

export default PrivateRoute;

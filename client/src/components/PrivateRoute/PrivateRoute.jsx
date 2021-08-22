import React from "react";
import { Route, Redirect } from "react-router-dom";

const isAuth = true;
const PrivateRoute = ({ children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => (isAuth ? children : <Redirect to="/signin" />)}
        />
    );
};

export default PrivateRoute;

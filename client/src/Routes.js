import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
    Navbar,
    Footer,
    BodySection,
    ProductDetail,
    Admin,
    SignIn,
    PrivateRoute,
    SignUp,
} from "./components/index";

const Routes = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={BodySection} />
                <Route exact path="/detail" component={ProductDetail} />
                <PrivateRoute exact path="/admin" component={Admin} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/signup" component={SignUp} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default Routes;

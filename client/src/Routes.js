import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
    Navbar,
    Footer,
    BodySection,
    ProductDetail,
    Admin,
} from "./components/index";

const Routes = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={BodySection} />
                <Route exact path="/detail" component={ProductDetail} />
                <Route exact path="/admin" component={Admin} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default Routes;

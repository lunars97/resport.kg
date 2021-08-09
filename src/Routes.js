import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BodySection from "./components/BodySection/BodySection";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const Routes = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={BodySection} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default Routes;

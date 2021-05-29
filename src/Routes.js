import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BodySection from "./BodySection/BodySection";
import Navbar from "./Navbar/Navbar";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Navbar} />
            <Route exact path="/" component={BodySection} />
        </BrowserRouter>
    );
};

export default Routes;

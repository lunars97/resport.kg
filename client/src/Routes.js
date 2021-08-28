import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import {
    Navbar,
    Footer,
    BodySection,
    ProductDetail,
    Admin,
    SignIn,
    SignUp,
    NotFound,
} from "./components/index";

const Routes = () => {
    const user = JSON.parse(localStorage.getItem("profile"));
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route
                    path="/"
                    exact
                    component={() => <Redirect to="/products" />}
                />
                <Route exact path="/products" component={BodySection} />
                <Route exact path="/products/:id" component={ProductDetail} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/admin" component={Admin} />
                <Route
                    path="/signup"
                    exact
                    component={() =>
                        !user ? (
                            <SignUp />
                        ) : (
                            <Redirect to="/admin" component={Admin} />
                        )
                    }
                />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default Routes;

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
    PrivateRoute,
    SignUp,
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
                    component={() => <Redirect to="/admin" />}
                />
                <Route exact path="/products" component={BodySection} />
                <Route exact path="/detail" component={ProductDetail} />
                {/* <PrivateRoute exact path="/admin" component={Admin} /> */}
                <Route exact path="/signin" component={SignIn} />
                {/* <Route exact path="/signup" component={SignUp} /> */}
                <Route
                    path="/signup"
                    exact
                    component={() =>
                        !user ? <SignUp /> : <Redirect to="/admin" />
                    }
                />
            </Switch>
            <Footer />
        </Router>
    );
};

export default Routes;

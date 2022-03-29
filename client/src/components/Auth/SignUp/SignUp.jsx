import React, { useState } from "react";
import classes from "../SignUp/SignUp.module.scss";
import { signup } from "../../../actions/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const initialState = { firstName: "", lastName: "", email: "", password: "" };

const SignUp = () => {
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(signup(form, history));
    };
    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <div className={classes.mainContainer}>
            <form
                className={classes.mainContainer__form}
                onSubmit={handleSubmit}
            >
                <h3>Sign Up</h3>
                <div className={classes.mainContainer__form__firstCol}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Name"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Surname"
                        onChange={handleChange}
                    />
                </div>
                <input
                    className={classes.auth}
                    type="email"
                    placeholder="Login"
                    name="email"
                    onChange={handleChange}
                />
                <input
                    className={classes.auth}
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;

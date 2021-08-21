import React, { useState } from "react";
import classes from "../SignIn/SignIn.module.scss";
import { signin } from "../../../actions/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const initialState = { firstName: "", lastName: "", email: "", password: "" };
const SignIn = () => {
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(signin(form, history));
    };
    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });
    return (
        <div className={classes.mainContainer}>
            <form
                className={classes.mainContainer__form}
                onSubmit={handleSubmit}
            >
                <h3>Войти</h3>
                <input
                    className={classes.auth}
                    type="text"
                    placeholder="Логин"
                    name="login"
                    onChange={handleChange}
                />
                <input
                    className={classes.auth}
                    type="text"
                    placeholder="Пароль"
                    name="password"
                    onChange={handleChange}
                />
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default SignIn;

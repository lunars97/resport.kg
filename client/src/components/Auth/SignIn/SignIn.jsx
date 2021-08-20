import React from "react";
import classes from "../SignIn/SignIn.module.scss";
const SignIn = () => {
    return (
        <div className={classes.mainContainer}>
            <form className={classes.mainContainer__form}>
                <h3>Войти</h3>
                <input
                    className={classes.auth}
                    type="text"
                    placeholder="Логин"
                />
                <input
                    className={classes.auth}
                    type="text"
                    placeholder="Пароль"
                />
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default SignIn;

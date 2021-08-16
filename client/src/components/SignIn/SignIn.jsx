import React from "react";
import classes from "./SignIn.module.scss";
const SignIn = () => {
    return (
        <div className={classes.mainContainer}>
            <form className={classes.mainContainer__form}>
                <h3>Войти</h3>
                <div className={classes.mainContainer__form__firstCol}>
                    <input type="text" placeholder="Имя" />
                    <input type="text" placeholder="Фамилия" />
                </div>
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

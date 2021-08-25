import React from "react";
import classes from "./NotFound.module.scss";
const NotFound = () => {
    return (
        <div className={classes.main}>
            <h1>404</h1>
            <span>Страница не найдена</span>
        </div>
    );
};

export default NotFound;

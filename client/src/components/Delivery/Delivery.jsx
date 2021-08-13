import React from "react";
import classes from "./Delivery.module.scss";
import jog from "../../assets/images/jog.jpg";
const Delivery = () => {
    return (
        <div className={classes.main_wrap}>
            <div className={classes.main_wrap__inner}>
                <div>
                    <img src={jog} alt="jog" />
                    <p>Photo by sporlab on Unsplash</p>
                </div>
                <span>
                    Бесплатная и быстрая доставка по городу всего за несколько
                    минут 🚚📦
                </span>
            </div>
        </div>
    );
};

export default Delivery;

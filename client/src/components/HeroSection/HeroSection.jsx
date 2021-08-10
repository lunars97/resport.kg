import React from "react";
import classes from "./HeroSection.module.scss";
import video1 from "../video/running.mp4";
const HeroSection = () => {
    return (
        <div className={classes.main_overlay}>
            <div className={classes.overlay}>
                <video
                    src={video1}
                    autoPlay
                    loop
                    className={classes.overlay__video}
                />
            </div>
        </div>
    );
};

export default HeroSection;

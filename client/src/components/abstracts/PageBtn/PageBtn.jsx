import React from "react";
import classes from "./PageBtn.module.scss";
const PageBtn = () => {
    return (
        <div className={classes.btn_container}>
            <span>
                <i className="fa fa-angle-double-left" aria-hidden="true"></i>
            </span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>
                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </span>
        </div>
    );
};

export default PageBtn;

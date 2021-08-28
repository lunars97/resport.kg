import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";
import logo from "../../assets/images/logo.jpg";
const Navbar = () => {
    return (
        <>
            <div className={classes.header}>
                <div className={classes.container}>
                    <input type="checkbox" name="" id={classes.check} />
                    <div className={classes.logo_container}>
                        <Link to="/">
                            {" "}
                            <img src={logo} alt="resport_logo" />
                        </Link>
                    </div>

                    <div className={classes.nav_btn}>
                        <div className={classes.nav_links}>
                            <ul>
                                <li className={classes.nav_link}>
                                    <Link className={classes.link} to="/">
                                        Главная
                                    </Link>
                                </li>
                                <li
                                    className={classes.nav_link}
                                    onClick={() =>
                                        window.location.replace("/#products")
                                    }
                                >
                                    <Link
                                        className={classes.link}
                                        to="/#products"
                                    >
                                        Продукция
                                        <i
                                            className="fa fa-caret-down"
                                            aria-hidden="true"
                                        ></i>
                                    </Link>
                                    <ul className={classes.dropdown}>
                                        <li className={classes.dropdown_link}>
                                            <Link
                                                to="men"
                                                style={{
                                                    color: "black",
                                                    // padding: "0.5rem 1rem",
                                                    fontSize: "0.9rem",
                                                    textDecoration: "none",
                                                }}
                                            >
                                                Мужская одежда
                                            </Link>
                                        </li>
                                        <li className={classes.dropdown_link}>
                                            <Link
                                                to="women"
                                                style={{
                                                    color: "black",
                                                    fontSize: "0.9rem",
                                                    textDecoration: "none",
                                                }}
                                            >
                                                Женская одежда
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li
                                    className={classes.nav_link}
                                    onClick={() =>
                                        window.location.replace("/#contacts")
                                    }
                                >
                                    <Link
                                        className={classes.link}
                                        to="/#contacts"
                                    >
                                        Контакты
                                    </Link>
                                </li>
                                <li>
                                    <div className={classes.search_box}>
                                        <button className={classes.btn_search}>
                                            <i
                                                className="fa fa-search"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                        <input
                                            type="text"
                                            className={classes.input_search}
                                            placeholder="Type to Search..."
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.hamburger_menu_container}>
                        <div className={classes.hamburger_menu}>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;

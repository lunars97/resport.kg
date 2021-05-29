import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import video1 from "../video/running.mp4";
import logo from "../images/logo.jpg";
const Navbar = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <input type="checkbox" name="" id="check" />
                    <div className="logo-container">
                        <img
                            src={logo}
                            style={{
                                width: "50px",
                                height: "50px",
                                margin: "5px 0px",
                                // marginTop: "-10px",
                            }}
                        />
                    </div>

                    <div className="nav-btn">
                        <div className="nav-links">
                            <ul>
                                <li className="nav-link">
                                    <Link
                                        className="link"
                                        to="Home"
                                        style={{
                                            textDecoration: "none",
                                            lineHeight: "3rem",
                                            color: "black",
                                        }}
                                    >
                                        Главная
                                    </Link>
                                </li>
                                <li className="nav-link">
                                    <Link
                                        className="products link"
                                        to="Products"
                                        style={{
                                            textDecoration: "none",
                                            lineHeight: "3rem",
                                            color: "black",
                                        }}
                                    >
                                        Продукция
                                        <i
                                            class="fa fa-caret-down"
                                            aria-hidden="true"
                                        ></i>
                                    </Link>
                                    <div className="dropdown">
                                        <li className="dropdown-link">
                                            <Link
                                                style={{
                                                    color: "black",
                                                    padding: "0.5rem 1rem",
                                                    fontSize: "0.9rem",
                                                }}
                                            >
                                                Мужская одежда
                                            </Link>
                                        </li>
                                        <li className="dropdown-link">
                                            <Link
                                                style={{
                                                    color: "black",
                                                    padding: "0.5rem 1rem",
                                                    fontSize: "0.9rem",
                                                    alignItems: "center",
                                                    justifyContent:
                                                        "space-between",
                                                }}
                                            >
                                                Женская одежда
                                            </Link>
                                        </li>
                                        <li className="dropdown-link">
                                            <Link
                                                style={{
                                                    color: "black",
                                                    padding: "0.5rem 1rem",
                                                    fontSize: "0.9rem",
                                                    alignItems: "center",
                                                    justifyContent:
                                                        "space-between",
                                                }}
                                            >
                                                Обувь
                                            </Link>
                                        </li>
                                    </div>
                                </li>
                                <li className="nav-link">
                                    <Link
                                        className="link"
                                        to="Contacts"
                                        style={{
                                            textDecoration: "none",
                                            lineHeight: "3rem",
                                            color: "black",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        Контакты
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="log-sign">
                            <Link
                                style={{ textDecoration: "none" }}
                                className="btn transparent"
                            >
                                Log in
                            </Link>
                            <Link
                                style={{ textDecoration: "none" }}
                                className="btn solid"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                    <div className="hamburger-menu-container">
                        <div className="hamburger-menu">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main">
                <section>
                    <div className="overlay">
                        <video src={video1} width="100%" autoPlay loop />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Navbar;

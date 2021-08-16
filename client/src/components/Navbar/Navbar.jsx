import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.jpg";
const Navbar = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <input type="checkbox" name="" id="check" />
                    <div className="logo-container">
                        <Link to="/">
                            {" "}
                            <img
                                src={logo}
                                alt="resport_logo"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    margin: "5px 0px",
                                    borderRadius: "50%",
                                }}
                            />
                        </Link>
                    </div>

                    <div className="nav-btn">
                        <div className="nav-links">
                            <ul>
                                <Link
                                    className="link"
                                    to="/"
                                    style={{
                                        textDecoration: "none",
                                        lineHeight: "3rem",
                                        color: "black",
                                    }}
                                >
                                    <li className="nav-link">Главная</li>
                                </Link>
                                <li
                                    className="nav-link"
                                    onClick={() =>
                                        window.location.replace("/#products")
                                    }
                                >
                                    <Link
                                        className="products link"
                                        to="/#products"
                                        style={{
                                            textDecoration: "none",
                                            // lineHeight: "3rem",
                                            color: "black",
                                        }}
                                    >
                                        Продукция
                                        <i
                                            className="fa fa-caret-down"
                                            aria-hidden="true"
                                        ></i>
                                    </Link>
                                    <ul className="dropdown">
                                        <Link
                                            to="men"
                                            style={{
                                                color: "black",
                                                // padding: "0.5rem 1rem",
                                                fontSize: "0.9rem",
                                                textDecoration: "none",
                                            }}
                                        >
                                            <li className="dropdown-link">
                                                Мужская одежда
                                            </li>
                                        </Link>
                                        <Link
                                            to="women"
                                            style={{
                                                color: "black",
                                                fontSize: "0.9rem",
                                                textDecoration: "none",
                                            }}
                                        >
                                            <li className="dropdown-link">
                                                Женская одежда
                                            </li>
                                        </Link>
                                        {/* <li className="dropdown-link">
                                            <Link
                                                to="shoes"
                                                style={{
                                                    color: "black",
                                                    padding: "0.5rem 1rem",
                                                    fontSize: "0.9rem",
                                                    alignItems: "center",
                                                    justifyContent:
                                                        "space-between",
                                                    textDecoration: "none",
                                                }}
                                            >
                                                Обувь
                                            </Link>
                                        </li> */}
                                    </ul>
                                </li>
                                <li
                                    className="nav-link"
                                    onClick={() =>
                                        window.location.replace("/#contacts")
                                    }
                                >
                                    <Link
                                        className="link"
                                        to="/#contacts"
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
                                <li>
                                    <div className="search-box">
                                        <button className="btn-search">
                                            <i
                                                className="fa fa-search"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                        <input
                                            type="text"
                                            className="input-search"
                                            placeholder="Type to Search..."
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hamburger-menu-container">
                        <div className="hamburger-menu">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;

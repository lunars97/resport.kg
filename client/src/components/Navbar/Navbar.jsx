import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";
import logo from "../../assets/images/logo.jpg";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getProductsBySearch, getProducts } from "../../actions/products";
import { PageBtn } from "../abstracts";
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Navbar = () => {
    const query = useQuery();

    const searchQuery = query.get("searchQuery");
    console.log(searchQuery);
    const page = query.get("page") || 1;
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");
    console.log(search);
    const history = useHistory();

    const searchProduct = () => {
        if (search.trim()) {
            dispatch(getProductsBySearch({ search }));
            history.push(`/products/search?searchQuery=${search || "none"}`);
        } else {
            history.push("/");
        }
    };
    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchProduct();
        }
    };
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
                                        <li
                                            className={classes.dropdown_link}
                                            name="men"
                                            id="men"
                                        >
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
                                        <li
                                            className={classes.dropdown_link}
                                            name="women"
                                            id="women"
                                        >
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
                                            onKeyDown={handleKeyPress}
                                            name="search"
                                            type="text"
                                            className={classes.input_search}
                                            placeholder=" Поиск"
                                            value={search}
                                            onChange={(e) =>
                                                setSearch(e.target.value)
                                            }
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
            <div className={classes.page}>
                {!searchQuery && <PageBtn page={page} />}
            </div>
        </>
    );
};

export default Navbar;

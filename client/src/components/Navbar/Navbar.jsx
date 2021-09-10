import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";
import logo from "../../assets/images/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import {
    getProductsBySearch,
    getProducts,
    getProduct,
} from "../../actions/products";
import { PageBtn } from "../abstracts";
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Navbar = () => {
    const { products, product } = useSelector((state) => state.products);
    const query = useQuery();
    const searchQuery = query.get("searchQuery");

    const page = query.get("page") || 1;
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");
    const history = useHistory();
    useEffect(() => {
        dispatch(getProducts(products));
    }, []);

    const womenFilter = (e) => {
        e.preventDefault();
        const women = products.filter(
            (products) => products.category === "women"
        );
        console.log(women);
        return women;
    };

    const menFilter = (e) => {
        e.preventDefault();
        const men = products.filter((products) => products.category === "men");
        console.log(men);
        return men;
    };

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
                                            onClick={menFilter}
                                        >
                                            Мужская
                                        </li>
                                        <li
                                            className={classes.dropdown_link}
                                            name="women"
                                            id="women"
                                            onClick={womenFilter}
                                        >
                                            Женская
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

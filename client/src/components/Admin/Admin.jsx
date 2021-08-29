import React, { useState, useEffect } from "react";
import classes from "./Admin.module.scss";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createProduct, updateProduct } from "../../actions/products";
import decode from "jwt-decode";
import * as actionTypes from "../../constants/actionTypes";
import { TableInfo, ProductCard } from "../index";

const Admin = () => {
    const [currentId, setCurrentId] = useState(0);
    const [loggedUser, setLoggedUser] = useState(
        JSON.parse(localStorage.getItem("profile"))
    );
    const [postProduct, setPostProduct] = useState({
        title: "",
        selectedFile: [],
        article: "",
        color: "",
        size: "",
        price: "",
        description: "",
        makeup: "",
        manufactured: "",
        category: "",
    });

    const product = useSelector((state) =>
        currentId
            ? state.products.products.find((p) => p._id === currentId)
            : null
    );
    const user = JSON.parse(localStorage.getItem("profile"));
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if (product) setPostProduct(product);
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setLoggedUser(JSON.parse(localStorage.getItem("profile")));
    }, []);

    const logout = () => {
        dispatch({ type: actionTypes.LOGOUT });

        history.push("/signin");

        setLoggedUser(null);
    };
    const clear = () => {
        setCurrentId(0);
        setPostProduct({
            title: "",
            selectedFile: [],
            article: "",
            color: "",
            size: "",
            price: "",
            makeup: "",
            description: "",
            manufactured: "",
            category: "",
        });
    };
    if (!user?.result?.name) {
        history.push("/signin");
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(
                createProduct(
                    { ...postProduct, name: user?.result?.name },
                    history
                )
            );
        } else {
            dispatch(
                updateProduct(currentId, {
                    ...postProduct,
                    name: user?.result?.name,
                })
            );
        }
    };
    return (
        <>
            <div className={classes.main_formContainer}>
                <div className={classes.main_formContainer__header}>
                    <h3>Добро пожаловать,</h3>
                    {user?.result && <span>{user?.result.name}</span>}
                    <button onClick={logout}>Выйти</button>
                </div>
                <div className={classes.form_wrapper}>
                    <form
                        autoComplete="off"
                        noValidate
                        className={classes.form}
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <FileBase
                                type="file"
                                multiple={true}
                                onDone={({ base64 }) =>
                                    setPostProduct({
                                        ...postProduct,
                                        selectedFile: base64,
                                    })
                                }
                            />
                        </div>
                        <input
                            name="title"
                            value={postProduct.title}
                            type="text"
                            placeholder="Название товара"
                            onChange={(e) =>
                                setPostProduct({
                                    ...postProduct,
                                    title: e.target.value,
                                })
                            }
                        />
                        <input
                            name="price"
                            value={postProduct.price}
                            type="text"
                            placeholder="Цена"
                            onChange={(e) =>
                                setPostProduct({
                                    ...postProduct,
                                    price: e.target.value,
                                })
                            }
                        />
                        <input
                            name="makeup"
                            value={postProduct.makeup}
                            type="text"
                            placeholder="Состав"
                            onChange={(e) =>
                                setPostProduct({
                                    ...postProduct,
                                    makeup: e.target.value,
                                })
                            }
                        />

                        <input
                            name="article"
                            value={postProduct.article}
                            type="text"
                            placeholder="Артикул"
                            onChange={(e) =>
                                setPostProduct({
                                    ...postProduct,
                                    article: e.target.value,
                                })
                            }
                        />
                        <input
                            name="size"
                            value={postProduct.size}
                            type="text"
                            placeholder="Размер"
                            onChange={(e) =>
                                setPostProduct({
                                    ...postProduct,
                                    size: e.target.value,
                                })
                            }
                        />
                        <input
                            name="color"
                            value={postProduct.color}
                            type="text"
                            placeholder="Цвет"
                            onChange={(e) =>
                                setPostProduct({
                                    ...postProduct,
                                    color: e.target.value,
                                })
                            }
                        />
                        <input
                            name="manufactured"
                            type="text"
                            value={postProduct.manufactured}
                            placeholder="Произведено"
                            onChange={(e) =>
                                setPostProduct({
                                    ...postProduct,
                                    manufactured: e.target.value,
                                })
                            }
                        />
                        <input
                            name="category"
                            type="text"
                            value={postProduct.category}
                            placeholder="Категория"
                            onChange={(e) =>
                                setPostProduct({
                                    ...postProduct,
                                    category: e.target.value,
                                })
                            }
                        />
                        <textarea
                            placeholder="Описание"
                            value={postProduct.description}
                            name="description"
                            className={classes.description}
                            onChange={(e) =>
                                setPostProduct({
                                    ...postProduct,
                                    description: e.target.value,
                                })
                            }
                        />
                        <button type="submit"> Добавить</button>
                    </form>
                </div>
            </div>
            <TableInfo
                currentId={currentId}
                setCurrentId={setCurrentId}
                product={product}
            />

            <div className={classes.none}>
                <ProductCard product={product} />
            </div>
        </>
    );
};

export default Admin;

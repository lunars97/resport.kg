import React, { useState, useEffect } from "react";
import classes from "./Admin.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createProduct, updateProduct } from "../../actions/products";
import decode from "jwt-decode";
import * as actionTypes from "../../constants/actionTypes";
import { TableInfo, ProductCard } from "../index";
import AdminPage from "../abstracts/AdminPage/AdminPage";

const Admin = () => {
    const [currentId, setCurrentId] = useState(0);
    const [loggedUser, setLoggedUser] = useState(
        JSON.parse(localStorage.getItem("profile"))
    );

    const [postProduct, setPostProduct] = useState({
        title: "",
        selectedFile: "",
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
            selectedFile: "",

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
                    <h3>Welcome,</h3>
                    {user?.result && <span>{user?.result.name}</span>}
                    <button onClick={logout}>Sign Out</button>
                </div>
                <div className={classes.form_wrapper}>
                    <form
                        autoComplete="off"
                        noValidate
                        className={classes.form}
                        onSubmit={handleSubmit}
                    >
                        <input
                            name="selectedFile"
                            placeholder="Image"
                            value={postProduct.selectedFile}
                            type="text"
                            onChange={(e) => {
                                setPostProduct({
                                    ...postProduct,
                                    selectedFile: e.target.value,
                                });
                            }}
                        />

                        <input
                            name="title"
                            value={postProduct.title}
                            type="text"
                            placeholder="Title"
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
                            placeholder="Price"
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
                            placeholder="Composition"
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
                            placeholder="Bar code"
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
                            placeholder="Size"
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
                            type="color"
                            placeholder="Color"
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
                            placeholder="Manufactured"
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
                            placeholder="Category"
                            onChange={(e) =>
                                setPostProduct({
                                    ...postProduct,
                                    category: e.target.value,
                                })
                            }
                        />
                        <textarea
                            placeholder="Description"
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
                        <div className={classes.button_container}>
                            <button type="submit"> Add</button>
                            <button onClick={clear}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
            <TableInfo
                currentId={currentId}
                setCurrentId={setCurrentId}
                product={product}
            />
            <AdminPage />
            <div className={classes.none}>
                <ProductCard product={product} />
            </div>
        </>
    );
};

export default Admin;

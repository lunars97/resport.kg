import React, { useState, useEffect } from "react";
import classes from "./Admin.module.scss";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    createProduct,
    updateProduct,
    getProducts,
} from "../../actions/products";
import { TableInfo } from "../index";
const Admin = () => {
    const [currentId, setCurrentId] = useState(0);
    const [postProduct, setPostProduct] = useState({
        title: "",
        selectedFile: [],
        article: "",
        color: "",
        size: "",
        newPrice: "",
        oldPrice: "",
        description: "",
        manufactured: "",
        category: "",
    });
    const product = useSelector((state) =>
        currentId ? state.products.find((p) => p._id === currentId) : null
    );
    const user = JSON.parse(localStorage.getItem("profile"));
    const history = useHistory();
    const dispatch = useDispatch();
    const clear = () => {
        setCurrentId(0);
        setPostProduct({
            title: "",
            selectedFile: "",
            article: "",
            color: "",
            size: "",
            newPrice: "",
            oldPrice: "",
            description: "",
            manufactured: "",
            category: "",
        });
    };
    useEffect(() => {
        if (!product?.title) clear();
        if (product) setPostProduct(product);
    }, [product]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(
                createProduct(
                    { ...postProduct, name: user?.result?.name },
                    history
                )
            );
            clear();
        } else {
            dispatch(
                updateProduct(currentId, {
                    ...postProduct,
                    name: user?.result?.name,
                })
            );
            clear();
        }
    };
    return (
        <>
            <div className={classes.main_formContainer}>
                <div className={classes.main_formContainer__header}>
                    <h3>Hello</h3>
                    <button>Выйти</button>
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
                                multiple={false}
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
                            name="oldPrice"
                            value={postProduct.oldPrice}
                            type="text"
                            placeholder="Старая цена"
                            onChange={(e) =>
                                setPostProduct({
                                    ...postProduct,
                                    oldPrice: e.target.value,
                                })
                            }
                        />
                        <input
                            name="newPrice"
                            value={postProduct.newPrice}
                            type="text"
                            placeholder="Новая цена"
                            onChange={(e) =>
                                setPostProduct({
                                    ...postProduct,
                                    newPrice: e.target.value,
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
            <TableInfo currentId={currentId} setCurrentId={setCurrentId} />
        </>
    );
};

export default Admin;

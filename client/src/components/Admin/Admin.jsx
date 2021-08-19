import React, { useState, useEffect } from "react";
import classes from "./Admin.module.scss";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    createProduct,
    updateProduct,
    deleteProduct,
} from "../../actions/products";
const Admin = () => {
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
    const [currentId, setCurrentId] = useState(0);
    // const product = useSelector((state) =>
    //     currentId
    //         ? state.products.find(
    //               (description) => description._id === currentId
    //           )
    //         : null
    // );
    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    // const user = JSON.parse(localStorage.getItem("profile"));
    const history = useHistory();
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
        // if (!product.title) {
        //     clear();
        // }
        setPostProduct(postProduct);
    }, [postProduct]);
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createProduct({ ...postProduct }, history));
            clear();
        } else {
            dispatch(
                updateProduct(currentId, {
                    ...postProduct,
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
                        <div className={classes.btn}>
                            <button type="submit"> Добавить</button>
                            <button onClick={() => clear()}>clear</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={classes.table}>
                <table>
                    <thead>
                        <tr>
                            <th>Изображение</th>
                            <th>Название</th>
                            <th>Артикул</th>
                            <th>Размер</th>
                            <th>Цвета</th>
                            <th>Старая цена</th>
                            <th>Новая цена</th>
                        </tr>
                    </thead>
                    {products?.map(
                        (
                            product // divide it into another folder
                        ) => (
                            <tbody key={product._id}>
                                <tr>
                                    <td>
                                        <img
                                            className={classes.img}
                                            src={product.selectedFile}
                                            alt={product.title}
                                        />
                                    </td>
                                    <td>{product.title}</td>
                                    <td>{product.article}</td>
                                    <td>{product.size}</td>
                                    <td>
                                        <div className={classes.colors}>
                                            <span
                                                style={{
                                                    backgroundColor:
                                                        product.color,
                                                }}
                                                className={classes.color}
                                            ></span>
                                        </div>
                                    </td>
                                    <td>{product.oldPrice}</td>
                                    <td>{product.newPrice}</td>
                                </tr>
                                <div className={classes.btn_wrapper}>
                                    <button
                                        onClick={() =>
                                            dispatch(deleteProduct(product._id))
                                        }
                                    >
                                        delete
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentId(product._id);
                                        }}
                                    >
                                        edit
                                    </button>
                                </div>
                            </tbody>
                        )
                    )}
                </table>
            </div>
        </>
    );
};

export default Admin;

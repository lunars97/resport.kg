import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./TableInfo.module.scss";
import { deleteProduct, getProducts } from "../../actions/products";
const TableInfo = ({ setCurrentId, currentId }) => {
    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts(products));
    }, []);
    return (
        <div className={classes.table}>
            <table>
                <thead>
                    <tr>
                        <th>Изображение</th>
                        <th>Название</th>
                        <th>Артикул</th>
                        <th>Размер</th>
                        <th>Цвет</th>
                        <th>Цена</th>
                        <th>Категория</th>
                        <th>Описание</th>
                        <th></th>
                    </tr>
                </thead>
                {products?.map((product) => (
                    <tbody key={product._id}>
                        <tr>
                            <td>
                                <img
                                    className={classes.img}
                                    src={product.selectedFile}
                                    alt={product.title}
                                />
                            </td>
                            <td className={classes.title}>{product.title}</td>
                            <td>{product.article}</td>
                            <td className={classes.size}>{product.size}</td>
                            <td>
                                <div className={classes.colors}>
                                    <span
                                        style={{
                                            backgroundColor: product.color,
                                        }}
                                        className={classes.color}
                                    ></span>
                                </div>
                            </td>
                            <td>{product.price}</td>

                            <td>{product.category}</td>
                            <td className={classes.description}>
                                {product.description}
                            </td>
                            <td className={classes.btn_wrapper}>
                                <button
                                    onClick={() =>
                                        dispatch(deleteProduct(product._id))
                                    }
                                >
                                    ✖️
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentId(product._id);
                                    }}
                                >
                                    🖊
                                </button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
};

export default TableInfo;

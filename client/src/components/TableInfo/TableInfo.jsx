import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./TableInfo.module.scss";
import { deleteProduct } from "../../actions/products";
const TableInfo = ({ setCurrentId, currentId }) => {
    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    return (
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
                            <td>{product.title}</td>
                            <td>{product.article}</td>
                            <td>{product.size}</td>
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
                            <td>{product.oldPrice}</td>
                            <td>{product.newPrice}</td>
                            <td className={classes.btn_wrapper}>
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
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
};

export default TableInfo;

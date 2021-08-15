import React from "react";
import classes from "./Admin.module.scss";
import FileBase from "react-file-base64";
import brand from "../../assets/images/yellowDress.png";
const Admin = () => {
    return (
        <>
            <div className={classes.main_formContainer}>
                <div className={classes.main_formContainer__header}>
                    <h3>Hello</h3>
                    <button>Выйти</button>
                </div>
                <div className={classes.form_wrapper}>
                    <form className={classes.form}>
                        <div>
                            <FileBase type="file" multiple={true} />
                        </div>
                        <input type="text" placeholder="Название товара" />
                        <input type="text" placeholder="Старая цена" />
                        <input type="text" placeholder="Новая цена" />
                        <input type="text" placeholder="Артикул" />
                        <input type="text" placeholder="Размер" />
                        <input type="text" placeholder="Цвет" />
                        <input type="text" placeholder="Произведено" />
                        <textarea
                            placeholder="Описание"
                            className={classes.description}
                        />
                    </form>
                    <div className={classes.btn}>
                        <button type="submit"> Добавить</button>
                    </div>
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
                    <tbody>
                        <tr>
                            <td>
                                <img
                                    className={classes.img}
                                    src={brand}
                                    alt="IPhone"
                                />
                            </td>
                            <td>cargo</td>
                            <td>1234fgb</td>
                            <td>44-48</td>
                            <td>
                                <div className={classes.colors}>
                                    <span className={classes.color}></span>
                                    <span className={classes.color}></span>
                                    <span className={classes.color}></span>
                                </div>
                            </td>
                            <td>10$</td>
                            <td>5$</td>
                        </tr>
                        <div className={classes.btn_wrapper}>
                            <button>delete</button>
                            <button>edit</button>
                        </div>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Admin;

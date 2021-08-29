import React, { useRef } from "react";
import classes from "./ModalWindow.module.scss";
import resport from "../../../assets/images/logo.jpg";
const ModalWindow = ({ modal, setModal }) => {
    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setModal(false);
        }
    };
    return modal ? (
        <div className={classes.main} ref={modalRef} onClick={closeModal}>
            <div className={classes.main__inner}>
                <span
                    className={classes.main__inner__close}
                    onClick={() => setModal((prev) => !prev)}
                >
                    ✖️
                </span>
                <div>
                    <img src={resport} alt="logo_resport" />
                </div>
                <span>
                    Уважаемый покупатель, данный товар можно заказать только
                    через Телеграм. Для этого надо сообщить детали товара
                    консультанту.
                </span>
                <span> Спасибо за ваше внимание!</span>
                <div>
                    <a href="https://t.me/ReSport_kg">
                        <button>Заказать</button>
                    </a>
                </div>
            </div>
        </div>
    ) : null;
};

export default ModalWindow;

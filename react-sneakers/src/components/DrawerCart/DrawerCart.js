import { useState } from "react";
import styles from "./drawerCart.module.scss";

export function DrawerCart({ onClose, onRemove, items = [] }) {
    // const [isDeleteItem, setIsDeleteItem] = useState(false);

    const deleteFromCart = (obj) => {
        // setIsDeleteItem(true)
        console.log(obj)
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <h2 className="d-flex justify-between mb-30">
                    Корзина
                    <img
                        onClick={onClose}
                        // className={styles.removeBtn + " " + "cu-p"}
                        className={(styles.removeBtn, "cu-p")}
                        src="/img/btn-remove.svg"
                        alt="Close"
                    />
                </h2>

                <div className={styles.items}>
                    {items.map((obj) => {
                        return (<div
                            className={
                                (styles.cartItem, "d-flex align-center mb-20")
                            }
                        >
                            <img
                                className="mr-20"
                                width={70}
                                height={70}
                                src={obj.img}
                                alt="Sneakers"
                            />
                            <div className="mr-20">
                                <p className="mb-5">
                                    {obj.title}
                                </p>
                                <b>{obj.price} руб.</b>
                            </div>
                            <img
                                onClick={() => deleteFromCart(obj)} ////////
                                className={styles.removeBtn}
                                src="/img/btn-remove.svg"
                                alt="Close"
                            />
                        </div>)
                    })}
                </div>

                <div className={styles.cartTotalBlock}>
                    <ul>
                        <li>
                            <span>Итого: </span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li>
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className={styles.greenBtn}>
                        Оформить заказ
                        <img src="/img/arrow.svg" alt="Arrow" />
                    </button>
                </div>
            </div>
        </div>
    );
}

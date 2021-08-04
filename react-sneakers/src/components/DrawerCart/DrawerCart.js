import styles from "./drawerCart.module.scss";

export function DrawerCart() {
    return ( 
        <div style={{ display: "none" }} className={styles.overlay}>
            <div className={styles.drawer}>
                <h2 className="d-flex justify-between mb-30">
                    Корзина
                    <img
                        className={styles.removeBtn + " " + "cu-p"}
                        src="/img/btn-remove.svg"
                        alt="Remove"
                    />
                </h2>

                <div className={styles.items}>
                    <div className={styles.cartItem + " " + "d-flex align-center mb-20"}>
                        <img
                            className="mr-20"
                            width={70}
                            height={70}
                            src="/img/sneakers/1.jpg"
                            alt="Sneakers"
                        />
                        <div className="mr-20">
                            <p className="mb-5">
                                Мужские Кроссовки Nike Air Max 270
                            </p>
                            <b>12 999 руб.</b>
                        </div>
                        <img
                            className={styles.removeBtn}
                            src="/img/btn-remove.svg"
                            alt="Remove"
                        />
                    </div>

                    <div className={styles.cartItem + " " + "d-flex align-center mb-20"}>
                        <img
                            className="mr-20"
                            width={70}
                            height={70}
                            src="/img/sneakers/1.jpg"
                            alt="Sneakers"
                        />
                        <div className="mr-20">
                            <p className="mb-5">
                                Мужские Кроссовки Nike Air Max 270
                            </p>
                            <b>12 999 руб.</b>
                        </div>
                        <img
                            className={styles.removeBtn}
                            src="/img/btn-remove.svg"
                            alt="Remove"
                        />
                    </div>
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

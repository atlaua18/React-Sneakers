import React from "react";
import styles from "./card.module.scss";

export function Card({title, img, price, onClickFavorite, onClickBtnPlus}) {
    // const onClickBtn = () => {
    //     alert('sdfgsdg')
    // }
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onClickBtnPlus({title, img, price});
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src={img} alt="" />
            <h5>{title}</h5>
            <div className="d-flex justify-between  align-center">
                <div className="d-flex flex-column">
                    <span>Цена: </span>
                    <b>{price} руб.</b>
                </div>
                {/* onClick={() => onClickBtn()} */}
                <img
                    className={styles.plus}
                    onClick={onClickPlus}
                    src = {isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                    alt="Плюс"
                />
            </div>
        </div>
    );
}

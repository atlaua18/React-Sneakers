import React from "react";
import styles from "./card.module.scss";

export function Card({
    id,
    name,
    img,
    price,
    onFavorite,
    onClickBtnPlus,
    favorited = false,
}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onClickBtnPlus({ name, img, price });
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite({ id, name, img, price });
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img
                    src={
                        isFavorite
                            ? "/img/heart-liked.svg"
                            : "/img/heart-unliked.svg"
                    }
                    alt="Favorite"
                />
            </div>
            <img width={133} height={112} src={img} alt="" />
            <h5>{name}</h5>
            <div className="d-flex justify-between  align-center">
                <div className="d-flex flex-column">
                    <span>Цена: </span>
                    <b>{price} руб.</b>
                </div>
                <img
                    className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                    alt="Плюс"
                />
            </div>
        </div>
    );
}

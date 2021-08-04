import styles from "./card.module.scss";

export function Card(props) {
    // const onClickBtn = () => {
    //     alert('sdfgsdg')
    // }
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src={props.img} alt="" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between  align-center">
                <div className="d-flex flex-column">
                    <span>Цена: </span>
                    <b>{props.price} руб.</b>
                </div>
                <button className={styles.button} onClick={props.onClickBtnPlus}> {/* onClick={() => onClickBtn()} */}
                    <img
                        width={11}
                        height={11}
                        src="/img/plus.svg"
                        alt="Плюс"
                    />
                </button>
            </div>
        </div>
    );
}
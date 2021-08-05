import React, { useState } from "react";
import { Card } from "./components/Card/Card";
import { DrawerCart } from "./components/DrawerCart/DrawerCart";
import { Header } from "./components/Header/Header";

// const arr = [
//     {
//         name: "Мужские Кроссовки Nike Blazer Mid Suede",
//         price: 12999,
//         img: "/img/sneakers/1.jpg",
//     },
//     {
//         name: "Мужские Кроссовки Nike Air Max 270",
//         price: 15600,
//         img: "/img/sneakers/2.jpg",
//     },
//     {
//         name: "Мужские Кроссовки Nike Blazer Mid Suede",
//         price: 8499,
//         img: "/img/sneakers/3.jpg",
//     },
//     {
//         name: "Кроссовки Puma X Aka Boku Future Rider",
//         price: 7600,
//         img: "/img/sneakers/4.jpg",
//     },
// ];

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {fetch("https://610c092a66dd8f0017b76c0b.mockapi.io/items")
    .then(resp => {
        return resp.json();
    })
    .then(json => {
        setItems(json);
    })}, []);

    const onAddToCart = (obj) => {
        setCartItems(prev => [...prev, obj]);
    }
    console.log(cartItems);

    return (
        <div className="wrapper clear">
            {cartOpened && <DrawerCart items={cartItems} onClose={() => setCartOpened(false)} />}
            <Header onClickCart={() => setCartOpened(true)} />

            <div className="content p-40">
                <div className="d-flex justify-between align-center mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex align-center">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                                stroke="#E4E4E4"
                                stroke-width="2"
                                stroke-linecap="round"
                            />
                        </svg>
                        <input placeholder="Поиск..." />
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {/* <Card/> */}
                    {items.map((item) => (
                        <Card
                            title={item.name}
                            price={item.price}
                            img={item.img}
                            onClickFavorite={() => console.log("Добавили в закладки")}
                            onClickBtnPlus={(obj) => onAddToCart(obj)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
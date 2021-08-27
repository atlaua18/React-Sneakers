import React, { useState } from "react";
// import { Card } from "./components/Card/Card";
import { DrawerCart } from "./components/DrawerCart/DrawerCart";
import { Header } from "./components/Header/Header";
import axios from "axios";
import { Home } from "./pages/Home";
import { Route } from "react-router-dom";
import { Favorites } from "./pages/Favorites";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        // fetch("https://610c092a66dd8f0017b76c0b.mockapi.io/items")
        //     .then((resp) => {
        //         return resp.json();
        //     })
        //     .then((json) => {
        //         setItems(json);
        //     });

        axios
            .get("https://610c092a66dd8f0017b76c0b.mockapi.io/items")
            .then((res) => setItems(res.data));

        axios
            .get("https://610c092a66dd8f0017b76c0b.mockapi.io/cart")
            .then((res) => setCartItems(res.data));

        axios
            .get("https://610c092a66dd8f0017b76c0b.mockapi.io/favorites")
            .then((res) => setFavorites(res.data));
    }, []);

    const onAddToCart = (obj) => {
        axios.post("https://610c092a66dd8f0017b76c0b.mockapi.io/cart", obj);
        setCartItems((prev) => [...prev, obj]);
    };

    const onAddFavorite = async (obj) => {
        try {
            if (favorites.find((favObj) => favObj.id === obj.id)) {
                axios.delete(
                    `https://610c092a66dd8f0017b76c0b.mockapi.io/favorites/${obj.id}`
                );
            } else {
                const { data } = await axios.post(
                    "https://610c092a66dd8f0017b76c0b.mockapi.io/favorites",
                    obj
                );
                setFavorites((prev) => [...prev, data]);
            }
        } catch (error) {
            alert('Не удалось добавить в избранное');
        }
    };

    const onChangeSearchInput = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    const onRemoveItem = (id) => {
        axios.delete(`https://610c092a66dd8f0017b76c0b.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id)); // скрыть элементы корзины с помощью react
    };

    return (
        <div className="wrapper clear">
            {cartOpened && (
                <DrawerCart
                    items={cartItems}
                    onClose={() => setCartOpened(false)}
                    onRemove={onRemoveItem}
                />
            )}

            <Header onClickCart={() => setCartOpened(true)} />

            <Route path="/" exact>
                <Home
                    items={items}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    onChangeSearchInput={onChangeSearchInput}
                    onAddFavorite={onAddFavorite}
                    onAddToCart={onAddToCart}
                />
            </Route>

            <Route path="/favorites" exact>
                <Favorites items={favorites} onAddFavorite={onAddFavorite} />
            </Route>
        </div>
    );
}

export default App;

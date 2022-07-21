import React from "react";
import s from './Content.module.scss'
import Card from "./Card/Card";

const Content = ({cartItems, setCartItems}) =>{

    const [item, setItems] = React.useState([]);

    let cardsElements = item.map ( c =>
        <Card
              title={c.title}
              price={c.price}
              imageUrl={c.imageUrl}
              onPlus={ (obj) => onAddToCart(obj)}/> )

    React.useEffect(() => {
        fetch('https://62d2d2b6afb0b03fc5ac29a6.mockapi.io/items')
            .then((res) =>{
                return res.json();
            } )
            .then((json) =>{
                setItems((json));
            } );
    }, [])

    const onAddToCart = (obj) => {
        setCartItems(prev => [...prev, obj]); //prev берет предыдущиие данные с  cartItems
    };

    return (
        <div className={`__container ${s.content}`}>
            <div className={s.header}>
                <h1>Все кроссовки</h1>
                <div className={s.search}>
                    <img src="/img/search.png" alt="search"/>
                    <input placeholder="Поиск..." type="text"/>
                </div>
            </div>
            <div className={s.body}>
                {cardsElements}
            </div>

        </div>
    );
}
export default Content;
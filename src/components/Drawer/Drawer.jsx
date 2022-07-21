import React from "react";
import s from './Drawer.module.scss'
import CartItem from "./CartItem/CartItem";

const Drawer = ({onClose, items = []}) =>{

    let cardsElements = items.map ( c => <CartItem id={c.id} title={c.title} price={c.price} imageUrl={c.imageUrl}/> )
    return (
        <div className={s.overlay}>
            <div className={s.drawer}>
                <h2>Корзина  <img onClick={onClose} src="/img/remove.svg" alt="remove"/></h2>
                <div className={s.items}>
                    {cardsElements}
                </div>
                <div className={s.totalBlock}>
                    <ul >
                        <li><span>Итого:</span>
                            <div></div>
                            <b>21 498 руб</b></li>
                        <li><span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб</b></li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="./img/arrow.svg" alt="Arrow"/></button>
                </div>
            </div>
        </div>
    );
}
export default Drawer;
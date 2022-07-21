import React from "react";
import s from './CartItem.module.scss'

const CartItem = (props) =>{

    return (

        <div className={s.cartItem}>
            <div className={s.sneakers} style={{ backgroundImage: `url( ${props.imageUrl})`}}>

            </div>
            <div className={s.tovar}>
                <p>{props.title}</p>
                <b>{props.price}</b>
            </div>
            <img src="/img/remove.svg" alt="remove"/>
        </div>

    );
}
export default CartItem;
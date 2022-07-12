import React from "react";
import s from './Drawer.module.scss'

const Drawer = (props) =>{
    return (
        <div className={s.overlay}>
            <div className={s.drawer}>
                <h2>Корзина   <button><img src="/img/remove.svg" alt="remove"/></button></h2>
                <div className={s.items}>
                    <div className={s.cartItem}>
                        <div className={s.sneakers}></div>
                        <div className={s.tovar}>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999руб</b>
                        </div>
                        <button><img src="/img/remove.svg" alt="remove"/></button>
                    </div>
                    <div className={s.cartItem}>
                        <div className={s.sneakers}></div>
                        <div className={s.tovar}>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999руб</b>
                        </div>
                        <button><img src="/img/remove.svg" alt="remove"/></button>
                    </div>
                    <div className={s.cartItem}>
                        <div className={s.sneakers}></div>
                        <div className={s.tovar}>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999руб</b>
                        </div>
                        <button><img src="/img/remove.svg" alt="remove"/></button>
                    </div>
                    <div className={s.cartItem}>
                        <div className={s.sneakers}></div>
                        <div className={s.tovar}>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999руб</b>
                        </div>
                        <button><img src="/img/remove.svg" alt="remove"/></button>
                    </div>
                    <div className={s.cartItem}>
                        <div className={s.sneakers}></div>
                        <div className={s.tovar}>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999руб</b>
                        </div>
                        <button><img src="/img/remove.svg" alt="remove"/></button>
                    </div>
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
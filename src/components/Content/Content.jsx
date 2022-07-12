import React from "react";
import s from './Header.module.scss'

const Header = (props) =>{
    return (
        <header>
            <div className={s.header}>
                <div className={s.left}>
                    <div className={s.logo}><img src="./img/header-logo.png" alt=""/></div>
                    <div className={s.info}>
                        <h3>react sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <div className={s.right}>
                    <ul>
                        <li>
                            <img src="./img/cart.svg" alt=""/>
                            <p>1205 руб</p>
                        </li>
                        <li><img src="./img/favorit.svg" alt=""/></li>
                        <li><img src="./img/user.svg" alt=""/></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;
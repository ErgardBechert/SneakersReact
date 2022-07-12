import React from "react";
import s from './Content.module.scss'

const Content = (props) =>{
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
                <div className={s.card}>
                    <div className={s.favorite}>
                        <img src="/img/heart-unliked.svg" alt="unliked"/>
                    </div>
                    <img src="/img/sneakers1.jpg" alt="sneakers"/>
                    <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                    <div  className={s.menu}>
                        <div className={s.price}>
                            <span>Цена:</span>
                            <b>12 999руб</b>
                        </div>
                        <button><img src="/img/add.svg" alt="add"/></button>
                    </div>
                </div>
                <div className={s.card}>
                    <img src="/img/sneakers1.jpg" alt="sneakers"/>
                    <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                    <div  className={s.menu}>
                        <div className={s.price}>
                            <span>Цена:</span>
                            <b>12 999руб</b>
                        </div>
                        <button><img src="/img/add.svg" alt="add"/></button>
                    </div>
                </div>
                <div className={s.card}>
                    <img src="/img/sneakers1.jpg" alt="sneakers"/>
                    <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                    <div  className={s.menu}>
                        <div className={s.price}>
                            <span>Цена:</span>
                            <b>12 999руб</b>
                        </div>
                        <button><img src="/img/add.svg" alt="add"/></button>
                    </div>
                </div>
                <div className={s.card}>
                    <img src="/img/sneakers1.jpg" alt="sneakers"/>
                    <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                    <div  className={s.menu}>
                        <div className={s.price}>
                            <span>Цена:</span>
                            <b>12 999руб</b>
                        </div>
                        <button><img src="/img/add.svg" alt="add"/></button>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Content;
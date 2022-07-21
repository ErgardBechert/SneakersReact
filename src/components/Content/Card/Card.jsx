import React from "react";
import s from './Card.module.scss'

function Card ({imageUrl, title , price , onPlus}) {

    const [isAdded, setIsAdded] = React.useState(false)

    const [isFavorite, setIsFavorite] = React.useState(false)

    const onClickPlus = () =>{
        onPlus({title, imageUrl, price});
        setIsAdded(!isAdded);
    };

    let onFavorite  = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={s.card}>
            <div className={s.favorite} >
                <img onClick={onFavorite} src={isFavorite ? '/img/btn-heart-liked.svg' : '/img/btn-heart-unliked.svg'} alt="unliked"/>
            </div>
            <img src={imageUrl} alt="sneakers"/>
            <p>{title}</p>
            <div className={s.menu}>
                <div className={s.price}>
                    <span>Цена:</span>
                    <b>{price}руб</b>
                </div>
                <div className={s.Add}>
                    <img onClick={ onClickPlus } src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} alt="add"/>
                </div>

            </div>
        </div>
    );
}
export default Card;
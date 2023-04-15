import styles from "./Card.module.scss";
import React from "react";

function Card({title, imageUrl, price, onFavorite, onPlus}) {
  const [isAddedPlus, setIsAddedPlus] = React.useState(false);

  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAddedPlus(!isAddedPlus);
  };

  const [isAddedFavorite, setIsAddedFavorite] = React.useState(false);

  const onClickFavorite = () => {
    setIsAddedFavorite(!isAddedFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={onClickFavorite}
          src={isAddedFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
          alt="Unliked"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>

        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAddedPlus ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;

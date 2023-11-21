import React, { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard, onCardLike, loggedIn }) => {
  const currentUser = useContext(CurrentUserContext);
  const cardId = item._id;
  const userId = currentUser ? currentUser._id : "";
  const isLiked = item.likes?.some((_id) => _id === currentUser?._id);

  const likeButtonClassName = isLiked
    ? "card__like-button card__like-button_liked"
    : "card__like-button ";

  const handleLikeCard = () => {
    onCardLike({ _id: cardId, isLiked, user: userId });
  };

  return (
    <div className="card" id={cardId}>
      <div className="card__image-container">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="card__image"
          onClick={() => onSelectCard(item)}
        />
      </div>

      {loggedIn ? (
        <div className="card__info">
          <h3 className="card__name">{item.name}</h3>
          <button
            className={likeButtonClassName}
            onClick={handleLikeCard}
          ></button>
        </div>
      ) : (
        <div className="card__info">
          <h3 className="card__name">{item.name}</h3>
        </div>
      )}
    </div>
  );
};

export default ItemCard;

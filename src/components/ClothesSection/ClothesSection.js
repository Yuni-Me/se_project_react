import React, { useContext } from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ClothesSection({
  clothingItems,
  onAddNewClick,
  onSelectCard,
  onCardLike,
  loggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);
  const userId = currentUser ? currentUser._id : "";

  const filteredCards = clothingItems?.filter((item) => {
    return item.owner === userId;
  });

  return (
    <section className="clothesSection">
      <div className="clothesSection__header">
        <div className="clothesSection__title">Your Items</div>
        <button
          className="clothesSection__button"
          type="text"
          onClick={onAddNewClick}
        >
          + Add new
        </button>
      </div>
      <div className="clothesSection__container">
        <div className="clothesSection__cards">
          {filteredCards?.map((item) => {
            return (
              <ItemCard
                item={item}
                key={item?.id || item?._id}
                onSelectCard={onSelectCard}
                onCardLike={onCardLike}
                loggedIn={loggedIn}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ClothesSection;

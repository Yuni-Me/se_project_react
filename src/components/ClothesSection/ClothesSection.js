import React from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = ({
  clothingItems,
  onAddNewClick,
  onSelectCard,
  // onCardDelete,
  // handleActiveModal,
}) => {
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
          {clothingItems.map((item) => (
            <ItemCard item={item} key={item.id} onSelectCard={onSelectCard} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClothesSection;

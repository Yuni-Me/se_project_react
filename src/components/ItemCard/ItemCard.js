import "./ItemCard.css";
const ItemCard = ({ item, myKey, onSelectCard }) => {
  return (
    <div className="card">
      <div>
        <img
          src={item.link}
          alt={item.name}
          id={myKey}
          className="card__image"
          onClick={() => onSelectCard(item)}
        />
      </div>
      <div className="card__name">{item.name}</div>
    </div>
  );
};

export default ItemCard;

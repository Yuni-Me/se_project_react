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
      <h3 className="card__name">{item.name}</h3>
    </div>
  );
};

export default ItemCard;

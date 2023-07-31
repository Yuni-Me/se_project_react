import "./ItemCard.css";
const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card" id={item?.id}>
      <div>
        <img
          src={item.imageUrl || item.link}
          alt={item.name}
          // id={myKey}
          className="card__image"
          onClick={() => onSelectCard(item)}
        />
      </div>
      <h3 className="card__name">{item.name}</h3>
    </div>
  );
};

export default ItemCard;

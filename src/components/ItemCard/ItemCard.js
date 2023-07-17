const ItemCard = ({ item }) => {
  return (
    <div className="card">
      <div>
        <img src={item.link} alt={item.name} className="card__image" />
      </div>
      <div className="card__name">{item.name}</div>
    </div>
  );
};

export default ItemCard;

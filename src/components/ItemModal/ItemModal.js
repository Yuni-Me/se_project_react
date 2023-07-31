import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, onDelete }) => {
  const handleDelete = () => {
    onDelete(selectedCard.id);
  };

  return (
    <div className={`modal`}>
      <div className="modal__content modal__content-preview">
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
        ></button>
        <img
          className="modal__image"
          src={selectedCard.imageUrl || selectedCard.link}
          alt={selectedCard.name}
        />
        <div className="modal__text">
          <h3 className="modal__preview-text">{selectedCard.name}</h3>
          <h3 className="modal__preview-text">
            Weather: {selectedCard.weather}
          </h3>
        </div>
        <button className="modal__delete" type="button" onClick={handleDelete}>
          Delete item
        </button>
      </div>
    </div>
  );
};

export default ItemModal;

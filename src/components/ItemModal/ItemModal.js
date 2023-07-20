import "./ItemModal.css";
const ItemModal = ({ selectedCard, onClose }) => {
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
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <h3 className="modal__preview-text">{selectedCard.name}</h3>
        <h3 className="modal__preview-text">
          Weather type: {selectedCard.weather}
        </h3>
      </div>
    </div>
  );
};

export default ItemModal;

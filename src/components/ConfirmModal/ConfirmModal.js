import React from "react";
import "./ConfirmModal.css";

const DeleteConfirmationModal = ({ onClose, selectedCard, onDelete }) => {
  return (
    <section className="modal" onClick={onClose}>
      <div className="modal__content modal__confirmation-content">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <div className="modal__confirmation-wrapper">
          <p className="modal__confirmation-notification">
            Are you sure you want to delete this item? <br />
            This action is irreversible
          </p>
          <button
            className="modal__confirmation-button modal__confirmation-button_yes"
            type="button"
            onClick={() => {
              onDelete(selectedCard);
            }}
          >
            Yes, delete item
          </button>
          <button
            className="modal__confirmation-button modal__confirmation-button_cancel"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeleteConfirmationModal;

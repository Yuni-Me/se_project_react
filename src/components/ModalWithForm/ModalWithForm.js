import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  title,
  onClose,
  name,
  onSubmit,
  isEnabled,
}) => {
  const submitButtonClass = `modal__button ${
    !isEnabled ? "modal__button_enabled" : "modal__button_disabled"
  }`;
  console.log();
  return (
    <div className={`modal`}>
      <div className={`modal__content modal__content-${name}`}>
        <button type="button" onClick={onClose} className="modal__close" />
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form">
          {children}
          <button
            type="submit"
            // className="modal__submit-button"
            className={submitButtonClass}
            disabled={isEnabled}
            onClick={onSubmit}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;

// .modal__button_disabled

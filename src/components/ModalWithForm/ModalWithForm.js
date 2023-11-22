import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  title,
  onClose,
  name,
  onSubmit,
  isEnabled,
  buttonText,
}) => {
  const submitButtonClass = `modal__button ${
    !isEnabled ? "modal__button_enabled" : "modal__button_disabled"
  }`;

  return (
    <div className={`modal`}>
      <div className={`modal__content modal__content-${name}`}>
        <button type="submit" onClick={onClose} className="modal__close" />
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button
            type="submit"
            className={submitButtonClass}
            disabled={isEnabled}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;

// .modal__button_disabled

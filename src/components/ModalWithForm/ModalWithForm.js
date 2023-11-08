import "./ModalWithForm.css";

// const ModalWithForm = ({
//   children,
//   buttonText,
//   title,
//   onClose,
//   name,
//   onSubmit,
//   // isEnabled,
// }) => {
//   // const submitButtonClass = `modal__button ${
//   //   isEnabled ? "modal__button_enabled" : "modal__button_disabled"
//   // }`;

//   return (
//     <div className="modal">
//       <div className={`modal__content modal__content_${name}`}>
//         <button className="modal__close" type="button" onClick={onClose} />
//         <h3 className="modal__title">{title}</h3>
//         <form onSubmit={onSubmit} className="modal__form">
//           {children}
//           <button className="modal__button" type="submit" onClick={onSubmit}>
//             {buttonText}
//           </button>
//           {/* <button
//             className={submitButtonClass}
//             type="submit"
//             disabled={isEnabled}
//           >
//             {buttonText}
//           </button> */}
//         </form>
//       </div>
//     </div>
//   );
// };

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

// const ModalWithForm = ({ children, title, onClose, modalName, isOpen }) => {
//   return (
//     <div className={`modal modal-type-${modalName}`}>
//       <div className={`modal__container modal-container-${modalName}`}>
//         <button
//           type="button"
//           onClick={onClose}
//           className="modal__close-button"
//         />
//         <h3 className="modal__title">{title}</h3>
//         <form className="modal__form">{children}</form>
//       </div>
//     </div>
//   );
// };

export default ModalWithForm;

// .modal__button_disabled

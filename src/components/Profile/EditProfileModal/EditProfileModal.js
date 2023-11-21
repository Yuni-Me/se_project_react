import React, { useState, useContext } from "react";
import ModalWithForm from "../../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import "./EditProfileModal.css";

const EditProfileModal = ({ handleCloseModal, onUserChanges }) => {
  const currentUser = useContext(CurrentUserContext);
  // const id = currentUser._id;
  // const id = currentUser.id;
  // console.log(id);
  // console.log(currentUser);
  // const token = localStorage.getItem("jwt");
  // console.log(token);
  const [name, setName] = useState(currentUser.name);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const [avatar, setAvatar] = useState(currentUser.avatar);
  const handleAvatar = (e) => {
    setAvatar(e.target.value);
  };

  const isEnabled = name.length > 0 && avatar.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(id + " " + name + " " + avatar + " " + token);
    // onUserChanges({ name, avatar, id, token });
    onUserChanges({ name, avatar });
  };

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save changes"
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      isEnabled={!isEnabled}
      name="profile"
    >
      <label>
        <h3 className="modal__label">Name*</h3>
        <input
          type="text"
          className="modal__input"
          name="name"
          value={name}
          onChange={handleName}
          minLength="1"
          maxLength="30"
        />
      </label>
      <label>
        <h3 className="modal__label">Avatar*</h3>
        <input
          type="url"
          className="modal__input"
          name="link"
          value={avatar}
          onChange={handleAvatar}
          minLength="1"
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;

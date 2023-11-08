import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

const RegisterModal = ({ onClose, onSignUp, handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleAvatar = (e) => setAvatar(e.target.value);

  const isEnabled =
    name.length > 0 &&
    email.length > 0 &&
    password.length > 0 &&
    avatar.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      title="Sign up"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Next"
      name="signup"
      isEnabled={!isEnabled}
    >
      <label className="modal__label">
        Email*
        <input
          className="modal__input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          required
          minLength="1"
        />
      </label>
      <label className="modal__label">
        Password*
        <input
          className="modal__input"
          type="password"
          name="password"
          placeholder="Password"
          minLength="1"
          maxLength="30"
          value={password}
          onChange={handlePassword}
          required
        />
      </label>
      <label className="modal__label">
        Name
        <input
          className="modal__input"
          type="text"
          name="name"
          placeholder="Name"
          minLength="1"
          maxLength="30"
          value={name}
          onChange={handleName}
        />
      </label>
      <label className="modal__label">
        Avatar URL
        <input
          className="modal__input"
          type="url"
          name="avatar"
          placeholder="Avatar URL"
          minLength="1"
          value={avatar}
          onChange={handleAvatar}
        />
      </label>
      <div className="modal__button-container">
        <button
          className="modal__login-button"
          type="button"
          name="button"
          onClick={handleLogin}
        >
          or Log in
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;

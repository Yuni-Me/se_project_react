import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

const LoginModal = ({ onLogin, handleSignUp, onClose }) => {
  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const isEnabled = email.length > 0 && password.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      onClose={onClose}
      onSubmit={handleSubmit}
      isEnabled={!isEnabled}
      name="login"
    >
      <label>
        <h3 className="modal__label">Email</h3>
        <input
          type="email"
          className="modal__input"
          name="email"
          value={email}
          onChange={handleEmail}
          minLength="1"
          placeholder="Email"
        />
      </label>
      <label>
        <h3 className="modal__label">Password</h3>
        <input
          type="password"
          className="modal__input"
          name="password"
          value={password}
          onChange={handlePassword}
          minLength="1"
          maxLength="20"
          placeholder="Password"
        />
      </label>
      <div className="modal__button-container">
        <button
          className="modal__login-button"
          type="button"
          name="button"
          onClick={handleSignUp}
        >
          or Register
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;

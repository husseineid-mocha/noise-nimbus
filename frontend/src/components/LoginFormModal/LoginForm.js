import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { deactivateLogin } from "../../store/modal";
import "./loginModal.css";

Modal.setAppElement(document.getElementById("root"));

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const loginState = useSelector((state) => state.modal.login);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const demoSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.demoLogin());
  };

  function closeModal() {
    dispatch(deactivateLogin());
  }

  return (
    <div className="modal-box">
      <Modal
        isOpen={loginState}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="welcome-span">
            <span>Welcome to NoiseNimbus</span>
          </div>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label>
            <input
              className="input"
              placeholder="Your User Name or Email"
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              className="input"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button className="login-button" type="submit">
            Sign In
          </button>
          <div className="auth-method-separator">
            <div className="before-or"></div>
            <span>or</span>
            <div className="after-or"></div>
          </div>
          <button
            className="demo-login-button"
            type="button"
            onClick={demoSubmit}
          >
            Demo Sign In
          </button>
        </form>
        {/* <form onSubmit={demoSubmit}>
          <button onClick={() => sessionActions.demoLogin()}>
            Demo Log In
          </button>
        </form> */}
      </Modal>
    </div>
  );
}

export default LoginForm;

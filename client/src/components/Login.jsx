import React, { useContext, useState } from 'react';
import { GeneralContext } from '../context/GeneralContext';

const Login = ({ setIsLogin }) => {
  const { setEmail, setPassword, login } = useContext(GeneralContext);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleLogin = async (e) => {
    e.preventDefault();
    await login();
  };

  return (
    <form className="authForm">
      <h2>Login</h2>
      <div className="form-floating mb-3 authFormInputs">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-3 authFormInputs password-container">
        <input
          type={showPassword ? 'text' : 'password'} // Toggle between text and password
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="floatingPassword">Password</label>
        <button
          type="button"
          className="toggle-password-btn"
          onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
        >
          {showPassword ? '🙈' : '👁️'}
        </button>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleLogin}>Sign in</button>
      <p>Not registered? <span onClick={() => setIsLogin(false)}>Register</span></p>
    </form>
  );
};

export default Login;

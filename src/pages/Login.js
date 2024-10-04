import { useState } from "react";
import Title from "../components/Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-container border-top">
      <div className="form-wrapper">
        <Title text2={isLogin ? "Login" : "Create Account"} className="p-2 text-center mb-4" />
        {isLogin ? (
          <form className="login-form">
            <div className="mb-3 input-icon-wrapper">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="Email" 
                required 
              />
              <div className="invalid-feedback">Please enter a valid email address.</div>
            </div>
            <div className="mb-3 input-icon-wrapper">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                placeholder="Password" 
                required 
              />
              <div className="invalid-feedback">Please provide a password.</div>
            </div>
            <div className="d-flex flex-column flex-sm-row justify-content-between gap-1 mb-3">
              <a href="/forgot-password" className="link">Forgot your password?</a>
              <a href="#" onClick={toggleForm} className="link">Create account</a>
            </div>
            <button type="submit" className="btn btn-dark w-100">Sign In</button>
          </form>
        ) : (
          <form className="signup-form">
            <div className="mb-3 input-icon-wrapper">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input 
                type="email" 
                className="form-control" 
                id="new-email" 
                placeholder="Email" 
                required 
              />
              <div className="invalid-feedback">Please enter a valid email address.</div>
            </div>
            <div className="mb-3 input-icon-wrapper">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input 
                type="password" 
                className="form-control" 
                id="new-password" 
                placeholder="Password" 
                required 
              />
              <div className="invalid-feedback">Please provide a password.</div>
            </div>
            <div className="mb-3 input-icon-wrapper">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input 
                type="password" 
                className="form-control" 
                id="confirm-password" 
                placeholder="Confirm Password" 
                required 
              />
              <div className="invalid-feedback">Passwords must match.</div>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <a href="#" onClick={toggleForm} className="link">Already have an account?</a>
            </div>
            <button type="submit" className="btn btn-dark w-100">Create Account</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;

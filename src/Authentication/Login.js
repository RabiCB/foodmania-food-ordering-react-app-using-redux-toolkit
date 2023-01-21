import { async } from "@firebase/util";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburger } from "react-icons/gi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserAuth } from "../AuthContext/Authcontext";
import "./Auth.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signup,login } = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert("success");
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };
  const handlesignup=()=>{
    navigate("/signup")
  }
  return (
    <>
      <div className="cart-nav">
        <div className="app-logo">
          <h4>foodmania</h4>
          <GiHamburger fontSize="20px" color="white" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Link style={{ color: "white" }} to="/">
            <AiOutlineArrowLeft color="white" fontSize="24px" />
          </Link>
        </div>
      </div>
      <div className="app-auth-section">
        <div className="auth-login-input">
        <div className="auth-options">
            <button onClick={handlesignup}>create account</button>
            
          </div>
          <form onSubmit={handleSubmit} className="auth-form-input">
            <input
              type="text"
              placeholder="enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            <p className="error">{error}</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

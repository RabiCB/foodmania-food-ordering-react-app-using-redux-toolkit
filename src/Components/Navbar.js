import React from "react";
import "./Navbar.css";
import { GiHamburger } from "react-icons/gi";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";
import { useSelector } from "react-redux";
import { UserAuth } from "../AuthContext/Authcontext";
import { Avatar } from "@mui/material";
import {motion} from "framer-motion"
function Navbar({ setSidebar, side }) {
  const [navbar, setNavbar] = useState(false);
  const items = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const handlesignup = () => {
    navigate("/signup");
  };
  const handlelogin = () => {
    navigate("/login");
  };
  const [showprofile, setShowProfile] = useState(false);
  const { currentUser, logout } = UserAuth();
  const handlelogout = async () => {
    try {
      logout();
      alert("logged out sucessfully");
      navigate("/");
    } catch (err) {
      console.llog(err.message);
    }
  };
  return (
    <div className="app-navbar">
      <div className="app-logo">
        <h4>foodmania</h4>
        <motion.div
        style={{display:"flex",alignItems:"center" ,justifyContent:"center"}}
        animate={{
          rotate:[0,0,360,360,0]
        }}
        transition={{
          duration:2
        }}
        >
           <GiHamburger fontSize="20px" color="white" />
        </motion.div>
       
      </div>
      <div className={navbar ? "app-small-screen-list" : "app-navbar-right"}>
        <div style={{ position: "relative" }} className="shopping-cart">
          <p style={{ color: "white", position: "absolute", bottom: "1.4rem" }}>
            {items.length}
          </p>
          <Link style={{ textDecoration: "none" }} to="/cart">
            <AiFillShopping color="white" fontSize="20px" />
            <p style={{ color: "white" }}></p>
          </Link>
        </div>
        <p className="cart-items-length" onClick={() => setSidebar(!side)}>
          About
        </p>
        {currentUser? 
          <div className="avatar">
            <Avatar
               src={`${currentUser.photoURL===null?"https://cdn.pixabay.com/photo/2013/07/13/11/44/penguin-158551__340.png":currentUser.photoURL}`}
              onClick={() => setShowProfile(!showprofile)}
              style={{ cursor: "pointer" }}
              
            />
            {showprofile ? (
              <div className="about-profile">
                <p>
                  {currentUser.displayName===null?"user07" : currentUser.displayName}
                </p>
                <p>{currentUser.email}</p>
                <button onClick={handlelogout}>logout</button>
              </div>
            ) : (
              ""
            )}
          </div>
         : 
          <div className="nav-button">
            <button onClick={handlelogin} className="login-btn">
              Login
            </button>
            <button onClick={handlesignup} className="sign-up">
              Sign up
            </button>
          </div>
        }
      </div>
      {!navbar ? (
        <div className="app-small-screen-menu">
          <div
            style={{ position: "relative", marginRight: "1rem" }}
            className="shopping-cart"
          >
            <p
              style={{ color: "white", position: "absolute", bottom: "1.4rem" }}
            >
              {items.length}
            </p>
            <Link style={{ textDecoration: "none" }} to="/cart">
              <AiFillShopping color="white" fontSize="20px" />
              <p style={{ color: "white" }}></p>
            </Link>
          </div>
          {currentUser?
          <div style={{ marginRight: "1rem" }} className="avatar">
            <Avatar
              src={`${currentUser.photoURL===null?"https://cdn.pixabay.com/photo/2013/07/13/11/44/penguin-158551__340.png":currentUser.photoURL}`}
              onClick={() => setShowProfile(!showprofile)}
              style={{ cursor: "pointer" }}
            />
            {showprofile ? (
              <div className="about-profile">
                <p>
                  {currentUser.displayName===null? "user07" : currentUser.displayName}
                </p>
                <p>{currentUser.email}</p>
                <button onClick={handlelogout}>logout</button>
              </div>
            ) : (
              ""
            )}
          </div>:''}
          <GiHamburgerMenu
            onClick={() => setNavbar(!navbar)}
            fontSize="28px"
            color="white"
            className="hamburger"
          />
        </div>
      ) : (
        <div className="cross">
          <ImCross
            onClick={() => setNavbar(false)}
            color="white"
            transition="0.3s ease"
            fontSize="20px"
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;

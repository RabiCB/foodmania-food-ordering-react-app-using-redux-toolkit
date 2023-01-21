import React, { useState, useEffect } from "react";
import { GiPriceTag } from "react-icons/gi";
import { useParams } from "react-router-dom";
import { foods } from "../Components/Data";
import { GiHamburger } from "react-icons/gi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Contact.css";
import { UserAuth } from "../AuthContext/Authcontext";
const Order = () => {
  const { Id } = useParams();
  const itemorder = foods.find((item) => item.id === Id);
  const { name, price } = itemorder;
  const [items, setnoofitems] = useState("");
  const [priceofitem, setPrice] = useState("");
  const [location, setLocation] = useState([]);
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  navigator.geolocation.getCurrentPosition(success, error, options);
  function success(pos) {
    const crd = pos.coords;
    setLocation(crd);
  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    setPrice(price * items);
  }, [items]);
  const { currentUser } = UserAuth();
  return (
    <>
      <div className="cart-nav">
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          <div className="app-logo">
            <h4>foodmania</h4>
            <GiHamburger fontSize="20px" color="white" />
          </div>
        </Link>
        <Link style={{ color: "white" }} to="/">
          <AiOutlineArrowLeft color="white" fontSize="24px" />
        </Link>
      </div>
      <div className="app-form">
        <form
          className="form-input"
          action="https://getform.io/f/9cfa4f5b-b371-4258-988c-32972c9575e1"
          method="POST"
        >
          <input type="text" name="order-item" value={name} />
          <p>price per packet: RS {price}</p>
          <input
            type="text"
            style={{ display: "none" }}
            name="name of customer"
            value={currentUser.displayName}
          />
          <input
            type="number"
            style={{ display: "none" }}
            name="latitude"
            value={location.latitude}
          />
          <input
            type="number"
            style={{ display: "none" }}
            name="longitude"
            value={location.longitude}
          />
          <input
            type="number"
            name="no-of-items"
            value={items}
            onChange={(e) => setnoofitems(e.target.value)}
          />
          <input
            type="text"
            name="totalprice"
            value={priceofitem}
            style={{ display: "none" }}
            
          />
          <p name="total price">Total amount: Rs {priceofitem}</p>
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};

export default Order;

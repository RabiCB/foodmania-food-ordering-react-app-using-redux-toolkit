import React from "react";
import "./Products.css";
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { GiHamburger } from "react-icons/gi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Popconfirm } from "antd";
import { remove } from "../Redux-toolkit/Cartslice";
import { clearcart } from "../Redux-toolkit/Cartslice";
const Cart = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const storeitem = useSelector((state) => state.cart);
  const handleorder=(id)=>{
    navigate(`/order/${id}`)
  }
  return (
    <>
      <div
      
        className="app-cart"
      >
        <div className="cart-nav">
          <div className="app-logo">
            <h4>foodmania</h4>
            <GiHamburger fontSize="20px" color="white" />
          </div>
          <Link style={{ color: "white" }} to="/">
            <AiOutlineArrowLeft color="white" fontSize="24px" />
          </Link>
        </div>
        {storeitem.length === 0 ? (
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop:"2rem",
            }}
          >
            your cart is empty
          </p>
        ) : (
          <div className="cart-products-grid">
            {storeitem.map((F) => {
              return (
                <div className="items-card" key={F.id}>
                  <img src={F.img} alt="foods" />
                  <div className="about">
                    <h5 style={{ color: "black" }}>{F.name}</h5>
                    <p style={{ color: "black" }}>RS {F.price}</p>
                    <div className="app-buttons">
                      <Popconfirm  title="are you sure want to remove this item" onConfirm={() => dispatch(remove(F.id))}>
                      <button >
                        Remove
                      </button>
                      </Popconfirm>
                     <button onClick={()=>handleorder(F.id)}>Order</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;

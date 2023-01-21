import React,{Component} from "react";
import { foods } from "./Data";
import { useState } from "react";
import { Link } from "react-router-dom";
import {add} from "../Redux-toolkit/Cartslice"
import { useDispatch } from "react-redux";
import "./Products.css";
import { UserAuth } from "../AuthContext/Authcontext";
import {motion} from "framer-motion"
import {Popconfirm} from "antd"
const Products = () => {
  const [fooditems, setfooditems] = useState(foods);
  const dispatch=useDispatch()
  const {currentUser}=UserAuth();
 

  

  return (
    <div id="product" className="app-product">
      <div className="product-title">Our Products</div>
      <div className="app-products-grid">
        {fooditems.map((F) => {
          return (
            <motion.div
            className="items-card"
              key={F.id}>
              <Link className="items-img" style={{textDecoration:"none",color:'black'}} to={`/singleitem/${F.id}`} >
              <img src={F.img} alt="foods" />
              </Link>
              <div className="about">
                <h5>{F.name}</h5>
                <p>RS {F.price}</p>
                <Popconfirm title="are you want to this item to cart" onConfirm={()=>dispatch(add(F))}>
                <button   className="btn">
                  Add to Cart
                </button>
                </Popconfirm>
              </div>
            </motion.div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Products;

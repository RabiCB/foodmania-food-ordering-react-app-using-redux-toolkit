import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { foods } from "../Components/Data";
import { GiHamburger } from "react-icons/gi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../Components/Navbar.css";
import { useDispatch,useSelector } from "react-redux";
import {AiFillShopping} from "react-icons/ai"
import {add} from "../Redux-toolkit/Cartslice"
import { UserAuth } from "../AuthContext/Authcontext";


const Singleitem = () => {

  const { Id } = useParams();
  const navigate=useNavigate();
  const dispatch=useDispatch()
  const {currentUser}=UserAuth();
  const handleorder=(id)=>{
    if(currentUser){
      navigate(`/order/${id}`)
      
    }
    else{
      navigate("/login")
      alert("please login")
    }
    
  }
  const product = foods.find((i) => i.id === Id);
  const items=useSelector((state)=>state.cart)

  return (
    <div className="app-single-section" style={{ backgroundColor: "black", }}>
      <div className="cart-nav">
        <div className="app-logo">
          <h4>foodmania</h4>
          <GiHamburger fontSize="20px" color="white" />
        </div>
        <div style={{display:"flex",alignItems:'center',justifyContent:'center',gap:"1rem"}}>
        <div style={{position:'relative'}}className="shopping-cart"><p style={{color:"white", position:"absolute", bottom:'1.4rem'}}>{items.length}</p><Link style={{textDecoration:'none'}} to="/cart"><AiFillShopping color="white" fontSize="20px"/><p style={{color:"white"}}></p></Link></div>
        <Link style={{ color: "white" }} to="/">
          <AiOutlineArrowLeft color="white" fontSize="24px" />
        </Link>
        </div>
      </div>
      <div className="app-single-item">
        <div className="singleitem-card">
          <img src={product.img} alt="itemimg" />
          <h5>{product.name}</h5>
          <div style={{display:"flex",alignItems:'center',justifyContent:'center',gap:"0.6rem"}}>
            <AiFillStar color='green'/>
            {product.rating}
            </div>
          <h6>RS {product.price}</h6>
          <h6>{product.about}</h6>
          <p>{product.ingredients}</p>
          <div className="app-buttons">
            <button onClick={()=>dispatch(add(product))} >Addtocart</button>
            <button onClick={()=>handleorder(product.id)}>Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleitem;

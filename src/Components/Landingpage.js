import React from "react";
import "./Landingpage.css";
import {Link} from 'react-router-dom'
const Landingpage = () => {
  return (
    <div className="app-option">
      <div className="slogan">
        <h2>
          We Belive on <br />
          Products and Delivery
        </h2>
        <p>We provide high quality food items delivered within short time.</p>
        <div className="buttons">
          <Link to="/contactform"><button className="btn">Contact-us</button></Link>
          <a href="#product"><button className="btn">Check our Products</button></a>
        </div>
      </div>
      <div className="cards-trending-food">
        <p style={{textAlign:'center'}}>Most Ordered Items Last Week</p>
        {
          
        }
        <div className="food-cards">
            <img src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=300" alt="pizza"/>
            <h6>The Hut Pizza</h6>
            <p>RS 280</p>
        </div>
        <div className="food-cards">
            <img src="https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=300" alt="pasta"/>
            <h6>Butter Pasta</h6>
            <p>RS 600</p>
            </div>
      </div>
    </div>
  );
};

export default Landingpage;

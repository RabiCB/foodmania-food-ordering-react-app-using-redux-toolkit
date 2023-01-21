import React, { useState } from 'react'
import Navbar from './Navbar'
import Landingpage from './Landingpage'
import "./Landingpage.css"
import { ImCross } from "react-icons/im";
import Products from './Products';
import Reviews from '../Contact/Reviews'
import Slide from '../Contact/Carousel'
const Home = () => {
    const [side,setSidebar]=useState(false)
  return (
    <>
    <Navbar setSidebar={setSidebar} side={side}/>
    <div className={side?"sidebar-after":"sidebar"}>
        <div className="sidebar-top">
          <h2>Who we are ?</h2>
          <p onClick={()=>setSidebar(false)}>CLOSE</p>
        </div>
        <div className="aboutus">
          <p>
            Our technology platform connects customers, restaurant partners and
            delivery partners, serving their multiple needs. Customers use our
            platform to search and discover their favourite food items, read and
            write customer generated reviews, offer various deals on food items,
            order food delivery and make payments while dining-out at
            restaurants. We provide high quality food items delivered within
            short time.
          </p>
        </div>
      </div>
    <Landingpage/>
    <Products/>
    <Slide/>
    <Reviews/>
    
    </>
  )
}

export default Home
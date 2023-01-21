import React ,{useState} from 'react'
import "./Review.css"
import { Avatar } from '@mui/material'
import {AiFillFacebook} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillTwitterSquare} from "react-icons/ai"
import {AiOutlineHome} from "react-icons/ai"
import {BsFillPhoneFill} from "react-icons/bs"
import {GrMail} from "react-icons/gr"


const Reviews = () => {
    
  return (
    <div className='app-review-section'>
    <div className='box'>
        <div className="title">
        <h4>More About Us</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.</p>
        </div>
       
    </div>
    <div className='box'>
        <h4>Connect with Us</h4>
        <div className="social-media">
            <div className='social-apps'><AiFillFacebook fontSize="24px"/><a href="#"><p>Like us on Facebook</p></a></div>
            <div className='social-apps'><AiFillInstagram  fontSize="24px"/><a href="#"><p>Follow us on Instagram</p></a></div>
            <div className='social-apps'><AiFillTwitterSquare  fontSize="24px"/><a href='#'><p>Catch us on Twitter</p></a></div>
        </div>
    </div>
    <div className='box'>
    <h4>Contact Information</h4>
        <div className="social-media">
            <div className='social-apps'><AiOutlineHome fontSize="24px"/><p>The foodmania Inc</p></div>
            <div className='social-apps'><BsFillPhoneFill  fontSize="24px"/><p>9848756422</p></div>
            <div className='social-apps'><GrMail   fontSize="24px"/><a style={{textDecoration:"none",color:'white'}} href="mailto:foodmania@gmail.com"><p>Email us</p></a></div>
        </div>
    </div>
    </div>
  )
}

export default Reviews
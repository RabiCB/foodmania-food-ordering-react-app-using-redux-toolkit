import React from 'react'
import {Carousel} from "antd"
import "./Review.css"
import {users} from "./UserData"
const contentStyle={
  margin: 0,
  height: '320px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'black',
};

const Slide = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    
  return (
    <div className='carousel-app'>
    <h3 style={{textAlign:'center',marginBottom:'1rem'}}>Trending items</h3>
    <Carousel afterChange={onChange}>
      <div >
         <h3 style={contentStyle}><img className='image' src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img className='image' src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img className='image' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img className='image' src="https://images.pexels.com/photos/14457194/pexels-photo-14457194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></h3>
      </div>
    </Carousel>
    </div>
  )
}

export default Slide
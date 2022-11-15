import React, { useState } from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { sliderItems } from './data';

const Slider = () => {
        const [slideIndex, setSlideIndex] = useState(0);
        const handleClick = (direction) => {
          if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
          } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
          }
        };
  return (
    <div className='Container2'>
        <div className='Arrow' direction="left" onClick={() => handleClick("left")}>
            <ArrowCircleLeftIcon />
        </div>
        <div className='Wrapper2' slideIndex={slideIndex}>
        {sliderItems.map((item) => (
            <div className='Slide' bg={item.bg} key={item.id}>
                <div className='ImgContainer'>
                    <img className='Image' src={item.img}></img>
                </div>
                <div className='InfoContainer'>
                    <h1 className='Title'>{item.title}</h1>
                    <p className='Desc'>{item.desc}</p>
                    <button className='Button'>SHOW NOW</button>
                </div>
            </div>
            ))}
        </div>
        <div className='Arrow' direction="left" onClick={() => handleClick("left")}>
            <ArrowCircleRightIcon />
        </div>
    </div>
  )
}

export default Slider
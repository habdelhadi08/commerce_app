import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

import "../Homepage/Homepage.css";
import CarouselCaption from "react-bootstrap/esm/CarouselCaption";

export default function Homepage() {
  return (
    <>
  
  
           
     
      <Carousel className="videoContainer">
    
        <Carousel.Item  interval={5000}>
                 
  
        <video src="/videos/video.1.mp4" autoPlay loop muted />
        
      
           
            
         
         
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        
          <video src="/videos/video.2.mp4" autoPlay loop muted />
        
            
         
        
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <video src="/videos/video.3.mp4" autoPlay loop muted /> 
      
  
      
         
        </Carousel.Item>
      </Carousel>
    </>
  );
}

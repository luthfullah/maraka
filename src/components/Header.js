
import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ImageSlider from "./ImageSlider";
function Header() {
  const [Images, setImages] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    // Fetch video URL from API on component mount
    const fetchVideoUrl = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_PUBLIC_URL}/v1/b2c/productImages/get`
        );
       
        setImages(Array.isArray(response.data) ? response.data : []); // Set the video URL from the response
      } catch (err) {
        setError("Error fetching video: " + err.message);
      }
    };

    fetchVideoUrl();
  }, []);


  return (
    <>
    <div  id="home"
        // className="shadow-sm border  slider-m" 
        style={{
          width: "100%",
          height: "500px",
          minHeight: "100vh",
          overflow: "hidden",
          objectFit: "cover",
        }}>
      {/* <ImageSlider Images={Images}/> */}
      <img 
       src="/homePage.jpeg" 
       alt="Home page"
       style={{
         width: "100%",
         height: "100%",
         objectFit: "cover",
         minHeight: "50vh",
        minWidth:"50vh",
       }}
      //  className="img-fluid"
        />
    </div>
    </>
  );
}

export default Header;

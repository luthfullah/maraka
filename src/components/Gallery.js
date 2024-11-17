import React, { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./Gallery.css";
import axios from "axios";

export const Gallery = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

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
    <div id="gallery" className="gallerycenter">
      <div className="gallery-container">
        <h2 className="gallery-heading fs-1">Gallery</h2>
        <div className="gallery-grid">
          {Images && Images.length > 0 ? (
            Images.map((image, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              >
                {/* <img src={image} alt={Gallery image ${index + 1}} /> */}
                {/* <img src={image} alt={`Gallery image ${index + 1}`} /> */}
                <img
                  src={process.env.REACT_APP_PUBLIC_URL + image.images[0]}
                  alt={`Gallery image ${index + 1}`}
                />
              </div>
            ))
          ) : (
            <h1>There are no images.</h1>
          )}
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={`${process.env.REACT_APP_PUBLIC_URL}${Images[photoIndex].images[0]}`}
            nextSrc={`${process.env.REACT_APP_PUBLIC_URL}${
              Images[(photoIndex + 1) % Images.length].images[0]
            }`}
            prevSrc={`${process.env.REACT_APP_PUBLIC_URL}${
              Images[(photoIndex + Images.length - 1) % Images.length].images[0]
            }`}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + Images.length - 1) % Images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % Images.length)
            }
          />
        )}
      </div>
    </div>
  );
};

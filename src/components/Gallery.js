// import React, { useEffect, useState } from "react";
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";
// import "./Gallery.css";
// import axios from "axios";

// export const Gallery = () => {

//   const [isOpen, setIsOpen] = useState(false);
//   const [photoIndex, setPhotoIndex] = useState(0);

//   const [Images, setImages] = useState("");
//   const [error, setError] = useState("");
//   useEffect(() => {
//     // Fetch video URL from API on component mount
//     const fetchVideoUrl = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_PUBLIC_URL}/v1/b2c/productImages/get`
//         );

//         setImages(Array.isArray(response.data) ? response.data : []); // Set the video URL from the response
//       } catch (err) {
//         setError("Error fetching video: " + err.message);
//       }
//     };

//     fetchVideoUrl();
//   }, []);

//   return (
//     <div id="gallery" className="gallerycenter">
//       <div className="gallery-container">
//         <h2 className="gallery-heading fs-1">Gallery</h2>
//         <div className="gallery-grid">
//           {Images && Images.length > 0 ? (
//             Images.map((image, index) => (
//               <div
//                 key={index}
//                 className="gallery-item"
//                 onClick={() => {
//                   setPhotoIndex(index);
//                   setIsOpen(true);
//                 }}
//               >
//                 {/* <img src={image} alt={Gallery image ${index + 1}} /> */}
//                 {/* <img src={image} alt={`Gallery image ${index + 1}`} /> */}
//                 <img
//                   src={process.env.REACT_APP_PUBLIC_URL + image.images[0]}
//                   alt={`Gallery image ${index + 1}`}
//                 />
//               </div>
//             ))
//           ) : (
//             <h1>There are no images.</h1>
//           )}
//         </div>

//         {isOpen && (
//           <Lightbox
//             mainSrc={`${process.env.REACT_APP_PUBLIC_URL}${Images[photoIndex].images[0]}`}
//             nextSrc={`${process.env.REACT_APP_PUBLIC_URL}${
//               Images[(photoIndex + 1) % Images.length].images[0]
//             }`}
//             prevSrc={`${process.env.REACT_APP_PUBLIC_URL}${
//               Images[(photoIndex + Images.length - 1) % Images.length].images[0]
//             }`}
//             onCloseRequest={() => setIsOpen(false)}
//             onMovePrevRequest={() =>
//               setPhotoIndex((photoIndex + Images.length - 1) % Images.length)
//             }
//             onMoveNextRequest={() =>
//               setPhotoIndex((photoIndex + 1) % Images.length)
//             }
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Gallery.css";

// export const Gallery = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [photoIndex, setPhotoIndex] = useState(0);
//   const [images, setImages] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     // Fetch images from API on component mount
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_PUBLIC_URL}/v1/b2c/productImages/get`);
//         setImages(Array.isArray(response.data) ? response.data : []); // Set images if valid response
//       } catch (err) {
//         setError("Error fetching images: " + err.message);
//       }
//     };

//     fetchImages();
//   }, []);

//   const handleImageClick = (index) => {
//     setPhotoIndex(index);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const nextImage = () => {
//     setPhotoIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setPhotoIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
//   };

//   return (
//     <div id="gallery" className="gallery-center">
//       <div className="gallery-container">
//         <h2 className="gallery-heading fs-1">Gallery</h2>
//         <div className="gallery-grid">
//           {images.length > 0 ? (
//             images.map((image, index) => (
//               <div
//                 key={index}
//                 className="gallery-item"
//                 onClick={() => handleImageClick(index)}
//               >
//                 <img
//                   src={process.env.REACT_APP_PUBLIC_URL + image.images[0]}
//                   alt={`Gallery image ${index + 1}`}
//                   className="gallery-image"
//                   style={{objectFit:"cover"}}
//                 />
//               </div>
//             ))
//           ) : (
//             <h1>No images available.</h1>
//           )}
//         </div>
//         {/* Custom Modal for Image Lightbox */}
//         {isOpen && (
//           <div className="modal-overlay" onClick={closeModal}>
//             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//               <div className="modal-header">
//                 <button className="close-btn" onClick={closeModal}>
//                   &times;
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <img
//                   src={process.env.REACT_APP_PUBLIC_URL + images[photoIndex].images[0]}
//                   alt={`Image ${photoIndex + 1}`}
//                   className="modal-image"
//                   style={{objectFit:"cover"}}
//                 />
//               </div>
//               <div className="modal-footer">
//                 <button className="nav-btn" onClick={prevImage}>Previous</button>
//                 <button className="nav-btn" onClick={nextImage}>Next</button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import "./Gallery.css";
import axios from "axios";

export const Gallery = () => {
  //   const images = [
  //     'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg',
  //     'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
  //     'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg',
  //     'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
  //   ];

  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    // Fetch images from API on component mount
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_PUBLIC_URL}/v1/b2c/productImages/get`
        );
        setImages(Array.isArray(response.data) ? response.data : []); // Set images if valid response
      } catch (err) {
        setError("Error fetching images: " + err.message);
      }
    };

    fetchImages();
  }, []);
  const openModal = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setPhotoIndex((photoIndex + 1) % images.length);
  };

  const prevImage = () => {
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
  };

  return (
    <div className="gallerycenter">
      <div className="gallery-container">
        <h2 className="gallery-heading">Gallery</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openModal(index)}
            >
              <img
                src={process.env.REACT_APP_PUBLIC_URL + image.images[0]}
                alt={`Gallery image ${index + 1}`}
                style={{objectFit:"cover"}}
              />
            </div>
          ))}
        </div>

        {isOpen && (
          <div className="custom-lightbox">
            <div className="lightbox-overlay" onClick={closeModal}></div>
            <div className="lightbox-content">
              <button className="lightbox-close" onClick={closeModal}>
                &times;
              </button>
              <button className="lightbox-prev" onClick={prevImage}>
                &#10094;
              </button>
              <img
                src={
                  process.env.REACT_APP_PUBLIC_URL +
                  images[photoIndex].images[0]
                }
                alt={`Gallery image ${photoIndex + 1}`}
              />
              <button className="lightbox-next" onClick={nextImage}>
                &#10095;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

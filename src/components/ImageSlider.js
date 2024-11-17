import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageSlider = ({ Images }) => {
  return (
    <div >
      <Carousel indicators={true} interval={3000} pause={false}>
        {Images && Images.length > 0 ? (
          Images.map((slider, i) => (
            <Carousel.Item key={slider?.id} style={{ width: '100%', height: '800px' }}>
              <img
                src={
                  slider?.images && slider.images[0]
                    ? process.env.REACT_APP_PUBLIC_URL + slider.images[0]
                    : 'https://tse1.mm.bing.net/th?id=OIP.eh5RRJ5l1pqHQDN1ubb1VAHaEx&pid=Api'
                }
                alt={`Slide ${i + 1}`}
                style={{
                    width: '100%',
                    height: '800px',
                    objectFit: 'contain',
                  }}
              />
            </Carousel.Item>
          ))
        ) : (
          <Carousel.Item style={{ width: '100%', height: '600px' }}>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.eh5RRJ5l1pqHQDN1ubb1VAHaEx&pid=Api"
              alt="No Images Available"
              style={{
                width: '100%',
                height: '600px',
                objectFit: 'cover',
              }}
            />
          </Carousel.Item>
        )}
      </Carousel>
    </div>
  );
};

export default ImageSlider;

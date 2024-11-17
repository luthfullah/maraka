import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ImagesDelete = () => {
  const [images, setImages] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_PUBLIC_URL}/v1/b2c/productImages/get`);
        setImages(response.data); // Assuming API returns images array in response.data.images
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  // Function to handle image deletion
  const handleDelete = async (productId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_PUBLIC_URL}/v1/b2c/productImages/${productId}`);
      setImages(images.filter(image => image.id !== productId)); // Filter out the deleted image
      setDeleteStatus('Image deleted successfully');
    } catch (error) {
      console.error('Error deleting image:', error);
      setDeleteStatus('Failed to delete image');
    }
  };

  return (
    <div className="container mt-5">
         <button 
        className="btn btn-secondary mb-3" 
        onClick={() => navigate("/admin")}
      >
        Back
      </button>

      <h2 className='main-title about-h2'>Delete Images</h2>

      {/* Display the delete status */}
      {deleteStatus && <div className={`alert ${deleteStatus.includes('successfully') ? 'alert-success' : 'alert-danger'}`}>{deleteStatus}</div>}

      <div className="d-flex justify-content-center align-item-center row container ">
        {images ? (
          images.map((image) => (
            <div key={image.id} className="col-lg-1 col-md-4 col-sm-12 row mb-4 g-3">
              <div className="card">
                <img src={process.env.REACT_APP_PUBLIC_URL + image.images[0]} className="card-img-top" alt="product" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <button
                    className="btn btn-danger w-100"
                    onClick={() => handleDelete(image.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>
    </div>
  );
};

export default ImagesDelete;

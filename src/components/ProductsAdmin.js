import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProductsAdmin = () => {
  const [images, setImages] = useState([]);
  const [id, setId] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');
  const navigate = useNavigate();
  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`${process.env.REACT_APP_PUBLIC_URL}/v1/b2c/productImages/`, {images:images[0]}, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadStatus('Upload successful');
    } catch (error) {
      setUploadStatus('Upload failed');
      console.error('Error uploading product image:', error);
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
      <h2 className='main-title about-h2 mb-4' >Upload Product Images</h2>
      {uploadStatus && <div className={`alert ${uploadStatus.includes('successful') ? 'alert-success' : 'alert-danger'}`}>{uploadStatus}</div>}
      
      <form onSubmit={handleSubmit}>
        

        <div className="mb-3">
          <label htmlFor="images" className="form-label">Upload Images</label>
          <input
            type="file"
            className="form-control"
            id="images"
            onChange={handleFileChange}
            multiple
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Upload</button>
      </form>
    </div>
  );
};

export default ProductsAdmin;

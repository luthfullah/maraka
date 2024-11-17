import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Events = () => {
  const [images, setImages] = useState([]);
  const [eventName, setEventName] = useState(''); // State for event name
  const [description, setDescription] = useState(''); // State for description
  const [uploadStatus, setUploadStatus] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_PUBLIC_URL}/v1/b2c/eventsImages/`,{images:images[0],eventName,description} , {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadStatus('Upload successful');
    } catch (error) {
      setUploadStatus('Upload failed');
      console.error('Error uploading event data:', error);
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

      <h2 className="mb-4">Upload Event</h2>
      {uploadStatus && (
        <div className={`alert ${uploadStatus.includes('successful') ? 'alert-success' : 'alert-danger'}`}>
          {uploadStatus}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Event Name Field */}
        <div className="mb-3">
          <label htmlFor="eventName" className="form-label">Event Name</label>
          <input
            type="text"
            className="form-control"
            id="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>

        {/* Description Field */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            required
          />
        </div>

        {/* Upload Images Field */}
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

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">Upload</button>
      </form>
    </div>
  );
};

export default Events;

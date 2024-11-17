import React, { useState } from 'react';
import axios from 'axios';

const VideoUpload = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');

  // Handle video file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!videoFile) {
      setUploadMessage('Please select a video file to upload.');
      return;
    }

    // Prepare FormData for sending the video file
    const formData = new FormData();
    formData.append('video', videoFile);

    setIsUploading(true);
    setUploadMessage('');

    try {
      // Send the video file using axios
      const response = await axios.post(`${process.env.REACT_APP_PUBLIC_URL}/v1/b2c/eventsVideo/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle successful upload
      if (response.status === 200) {
        setUploadMessage('Video uploaded successfully!');
      }
    } catch (error) {
      // Handle errors
      setUploadMessage('Error uploading video: ' + error.message);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className='container mt-5'>
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".mp4, .avi, .mkv"
          onChange={handleFileChange}
        />
        <button type="submit" disabled={isUploading}>
          {isUploading ? 'Uploading...' : 'Upload Video'}
        </button>
      </form>
      {uploadMessage && <p>{uploadMessage}</p>}
    </div>
  );
};

export default VideoUpload;

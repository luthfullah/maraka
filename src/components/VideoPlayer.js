import React, { useState, useEffect } from "react";
import axios from "axios";

const VideoPlayer = ({ videoId }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    // Fetch video URL from API on component mount
    const fetchVideoUrl = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_PUBLIC_URL}/v1/b2c/getVideo`
        );
      
        setVideoUrl(response.data.videoUrl[response.data.videoUrl.length -1].videoPath); // Set the video URL from the response
      } catch (err) {
        setError("Error fetching video: " + err.message);
      }
    };

    fetchVideoUrl();
  }, []);

  return (
    <div id="resources"
      className="d-flex justify-content-center align-item-center "
      style={{minHeight: '100vh'}}
    >
      {error && <p className="text-danger">{error}</p>}
      {videoUrl ? (
        <div className="text-center  ">
          <h3 className="py-4 tex-color  fs-1 fw-bolder">VIDEO RESOURCES</h3>
          <video
            className=" p-5 rounded shadow-lg  border  w-70 "
            controls
            style={{ width: "70%", height: "auto",}}
          >
            <source
            style={{ width: "100%", height: "100%" }}
              src={process.env.REACT_APP_PUBLIC_URL + videoUrl}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <p className="text-center">Loading video...</p>
      )}
    </div>
   
  );
};

export default VideoPlayer;

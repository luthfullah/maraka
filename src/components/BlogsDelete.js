

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./pdf.css"; // Ensure this file exists
import { useNavigate } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
const BlogsDelete = () => {
  const [pdfFiles, setPdfFiles] = useState([]); // Ensure initial state is an empty array
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPDFs = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_PUBLIC_URL}/v1/b2c/getBlogsPDFs/pdf`
        );
        setPdfFiles(response.data); // Set the fetched PDF files to state
      } catch (error) {
        console.error("Error fetching PDF files:", error);
      }
    };

    fetchPDFs();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_PUBLIC_URL}/v1/b2c/getBlogsPDFs/pdf/delete/${id}`
      );
      if (response.status === 200) {
        // Remove the deleted file from the state
        setPdfFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
        alert("PDF deleted successfully.");
      }
    } catch (error) {
      console.error("Error deleting PDF:", error);
      alert("Failed to delete PDF.");
    }
  };

  return (
  
      <div className="cen bg_color" style={{ minHeight: "100vh" }} >
        <div className="pdf-gallery bg_color w-100" style={{ minHeight: "80vh" }} >
          <h2 className="gallery-heading">BLOGS</h2>
          
          <div className="pdf-list">
            {pdfFiles.length > 0 ? (
              pdfFiles.map((file, index) => (
                <div className="pdf-item d-flex flex-column align-items-center">
  <a
    className="pdf-link mb-auto"
    href={process.env.REACT_APP_PUBLIC_URL + file.filePath[0]}
    download
    rel="noopener noreferrer"
  >
    <div className="pdf-icon">
      <FaFileDownload />
    </div>
    <p className="pdf-name">{file.fileName}</p>
  </a>
  <button
    className="btn btn-danger mt-auto"
    onClick={() => handleDelete(file.id)}
  >
    Delete
  </button>
</div>

              ))
            ) : (
              <p className="text-danger">NO FILES AVAILABLE.</p> // Render a loader if no files yet
            )}
          </div>
        </div>
      </div>
  );
};

export default BlogsDelete;

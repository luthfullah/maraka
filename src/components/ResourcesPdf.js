import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ResourcesPdf = () => {
  const [images, setImages] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");
  const [pdfFiles, setPdfFiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPDFs = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_PUBLIC_URL}/v1/b2c/getPDFs/pdf`
        );
        setPdfFiles(response.data);
      } catch (error) {
        console.error("Error fetching PDF files:", error);
      }
    };

    fetchPDFs();
  }, []);

  return (
    <div className="container mt-5">
      <button
        className="btn btn-secondary mb-3"
        onClick={() => navigate("/")}
      >
        Back
      </button>

      {uploadStatus && (
        <div
          className={`alert ${
            uploadStatus.includes("successful")
              ? "alert-success"
              : "alert-danger"
          }`}
        >
          {uploadStatus}
        </div>
      )}

      <h3 className=" nav-item about-h2 mt-5 mb-2">Uploaded PDFs</h3>
      <ul className="list-group">
        {pdfFiles.map((pdf) => (
          <li key={pdf.id} className="list-group-item">
            <a
              href={process.env.REACT_APP_PUBLIC_URL + pdf.filePath[0]}
              download 
              rel="noopener noreferrer"
            >
              {pdf.fileName} - {new Date(pdf.createdAt).toLocaleDateString()}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourcesPdf;

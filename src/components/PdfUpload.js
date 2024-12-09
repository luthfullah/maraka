// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const PdfUpload = () => {
//   const [files, setFiles] = useState(null);
//   const [fileName, setFileName] = useState('');
//   const [uploadStatus, setUploadStatus] = useState('');
// const navigate=useNavigate()
//   const handleFileChange = (e) => {
//     setFiles(e.target.files);
//   };

//   const handleFileNameChange = (e) => {
//     setFileName(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     Array.from(files).forEach(file => {
//       formData.append('pdf', file);
//     });
//     formData.append('fileName', fileName);

//     try {
//       const response = await axios.post(`${process.env.REACT_APP_PUBLIC_URL}/v1/b2c/pdfFile/pdf`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setUploadStatus('Upload successful');
      
//     } catch (error) {
//       setUploadStatus('Upload failed');
//       console.error('Upload failed:', error);
//     }
//   };

//   return (
//     <div className="container mt-5">
//          <button 
//         className="btn btn-secondary mb-5" 
//         onClick={() => navigate("/admin")}
//       >
//         Back
//       </button>

//       <h2 className=" main-title about-h2 mb-4">Upload PDF</h2>
      
//       {uploadStatus && (
//         <div className={`alert ${uploadStatus.includes('successful') ? 'alert-success' : 'alert-danger'}`}>
//           {uploadStatus}
//         </div>
//       )}

//       <form className='container' onSubmit={handleSubmit}>
//         {/* File Name Field */}
//         <div className="mb-3">
//           <label htmlFor="fileName" className="form-label">File Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="fileName"
//             name="fileName"
//             value={fileName}
//             onChange={handleFileNameChange}
//             required
//           />
//         </div>

//         {/* PDF Upload Field */}
//         <div className="mb-3">
//           <label htmlFor="pdf" className="form-label">Upload PDF files</label>
//           <input
//             type="file"
//             className="form-control"
//             id="pdf"
//             name="pdf"
//             onChange={handleFileChange}
//             multiple
//             accept=".pdf"
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="btn btn-primary w-100">Upload</button>
//       </form>
//     </div>
//   );
// };

// export default PdfUpload;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PdfUpload = () => {
  const [files, setFiles] = useState(null);
  const [fileName, setFileName] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleFileNameChange = (e) => {
    setFileName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Array.from(files).forEach(file => {
      formData.append('files', file); // Ensure this matches the backend field name
    });
    formData.append('fileName', fileName);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_PUBLIC_URL}/v1/b2c/pdfFile/pdf`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setUploadStatus('Upload successful');
    } catch (error) {
      setUploadStatus('Upload failed');
      console.error('Upload failed:', error);
    }
  };

  return (
    <div className="container mt-5">
      <button
        className="btn btn-secondary mb-5"
        onClick={() => navigate("/admin")}
      >
        Back
      </button>

      <h2 className="main-title about-h2 mb-4">Upload Files</h2>

      {uploadStatus && (
        <div className={`alert ${uploadStatus.includes('successful') ? 'alert-success' : 'alert-danger'}`}>
          {uploadStatus}
        </div>
      )}

      <form className="container" onSubmit={handleSubmit}>
        {/* File Name Field */}
        <div className="mb-3">
          <label htmlFor="fileName" className="form-label">File Name</label>
          <input
            type="text"
            className="form-control"
            id="fileName"
            name="fileName"
            value={fileName}
            onChange={handleFileNameChange}
            required
          />
        </div>

        {/* File Upload Field */}
        <div className="mb-3">
          <label htmlFor="files" className="form-label">Upload Files</label>
          <input
            type="file"
            className="form-control"
            id="files"
            name="files"
            onChange={handleFileChange}
            multiple
            accept=".pdf,.ppt,.pptx" // Allow multiple formats
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">Upload</button>
      </form>
    </div>
  );
};

export default PdfUpload;

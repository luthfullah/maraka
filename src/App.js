import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from "react";
import LoginPage from "./components/LoginPage";
import AdminPage from "./components/AdminPage";
import EventsAdmin from "./components/EventsAdmin";
import ProductsAdmin from "./components/ProductsAdmin";
import ImagesDelete from "./components/ImagesDelete";
import DeleteEvents from "./components/DeleteEvents";
import AdminContact from "./components/AdminContact";
import PdfUpload from "./components/PdfUpload";
import ProtectedRoute from "./components/ProtectedRoute";
import ResourcesPdf from "./components/ResourcesPdf";
import VideosAdmin from "./components/VideosAdmin";
import RegisteredUsers from "./components/RegisteredUsers";
import Partnership from "./components/Partnership";
import PdfDownloadList from "./components/pdfDownloadList";
import BlogsFileUpload from "./components/BlogsFileUpload";
function App() {
  const [token, setToken] = useState(localStorage.getItem('authToken') || null);
console.log("token",token)
  const handleLogin = (authToken) => {
    setToken(authToken);
    localStorage.setItem('authToken', authToken);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('authToken');
  };
  return (
    <>
     <Router>
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/admin" element={
            token ? (
              <AdminPage onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          } />

          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path='/contact' element={<AdminContact/>} />
          <Route path='/resourcesPDF' element={<ResourcesPdf/>} />
          <Route path='/blogs' element={<PdfDownloadList/>} />
          <Route path='/partnership' element={<Partnership/>} />

          {/* <Route path='/eventsImages' element={<EventsAdmin/>} />
          <Route path='/products' element={<ProductsAdmin/>} />
          <Route path='/images' element={<ImagesDelete/>} />
          <Route path='/eventsDelete' element={<DeleteEvents/>} />
          <Route path='/pdf' element={<PdfUpload/>} /> */}
          <Route path="/eventsImages" element={<ProtectedRoute token={token} element={<EventsAdmin />} />} />
          <Route path="/products" element={<ProtectedRoute token={token} element={<ProductsAdmin />} />} />
          <Route path="/images" element={<ProtectedRoute token={token} element={<ImagesDelete />} />} />
          <Route path="/eventsDelete" element={<ProtectedRoute token={token} element={<DeleteEvents />} />} />
          <Route path="/pdf" element={<ProtectedRoute token={token} element={<PdfUpload />} />} />
          <Route path="/blog" element={<ProtectedRoute token={token} element={<BlogsFileUpload />} />} />
          <Route path="/video" element={<ProtectedRoute token={token} element={<VideosAdmin />} />} />
          <Route path="/reg-eve" element={<ProtectedRoute token={token} element={<RegisteredUsers />} />} />
       

        </Routes>
        
      </>
    </Router>
    
    
      {/* <Navbar />
      <Header />
      <Main />
      <Footer /> */}
    </>
  );
}

export default App;

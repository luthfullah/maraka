import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarSide from './NavbarSide';
const AdminPage = ({ onLogout }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [activeSection, setActiveSection] = useState('addEvents');

  
  return (
    <div >
     
   <NavbarSide/>
    </div>
  );
};

export default AdminPage;

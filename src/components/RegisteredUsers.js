import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisteredUsers = () => {
  const [registrations, setRegistrations] = useState([]);
  const [error, setError] = useState("");
  const navigate=useNavigate()

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_PUBLIC_URL}/v1/b2c/registerations`);
        setRegistrations(response.data);
      } catch (err) {
        setError("Error fetching registrations: " + err.message);
      }
    };

    fetchRegistrations();
  }, []);

  return (
    <div className="container mt-5">
         <button 
        className="btn btn-secondary mb-3" 
        onClick={() => navigate("/admin")}
      >
        Back
      </button>
      <h2 className="text-center mb-4">Registered Users</h2>
      
      {error && <p className="text-danger">{error}</p>}
      
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>eventName</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Message</th>
            <th>Registration Date</th>
          </tr>
        </thead>
        <tbody>
          {registrations.length > 0 ? (
            registrations.map((registration) => (
              <tr key={registration.id}>
                <td>{registration.id}</td>
                <td>{registration.eventName}</td>
                <td>{registration.name}</td>
                <td>{registration.email}</td>
                <td>{registration.contact}</td>
                <td>{registration.message}</td>
                <td>{new Date(registration.createdAt).toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">No registrations found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RegisteredUsers;

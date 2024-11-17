import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminContact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fetch contacts from the API when the component mounts
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_PUBLIC_URL}/v1/b2c/get/contacts`);
        setContacts(response.data); // Assuming response.data contains the list of contacts
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contacts:', error);
        setError('Failed to fetch contacts');
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="container mt-5">
        <button 
        className="btn btn-secondary mb-3" 
        onClick={() => navigate("/admin")}
      >
        Back
      </button>
      <h2 className='main-title about-h2 mb-4'>Admin Contact List</h2>

      {/* Loading and Error handling */}
      {loading ? (
        <p>Loading contacts...</p>
      ) : error ? (
        <p className="alert alert-danger">{error}</p>
      ) : contacts.length === 0 ? (
        <p>No contacts available</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminContact;

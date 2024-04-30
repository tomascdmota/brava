import React, { useState, useEffect } from 'react';
import './LastContactsComponent.scss';
import ContactComponent from '../../Components/ContactComponent'; // Import the ContactComponent

const PAGE_SIZE = 5; // Number of contacts per page
const ROW_HEIGHT = 50; // Approximate height of each row in pixels

const LastContactsComponent = ({ contacts, count }) => {
  // Ensure contacts is an array, if not, default to an empty array
  const contactsArray = Array.isArray(contacts) ? contacts : [];
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedMessage, setSelectedMessage] = useState(null); // Track the selected message for the modal

  useEffect(() => {
    // Calculate the total number of pages
    const total = Math.ceil(count / PAGE_SIZE);
    setTotalPages(total);
  }, [count]);

  // Get contacts for the current page
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentContacts = contactsArray.slice(startIndex, endIndex);

  // Calculate the height of the table
  const tableHeight = Math.max(PAGE_SIZE, currentContacts.length) * ROW_HEIGHT;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Function to handle selecting a message and opening the modal
  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedMessage(null);
  };

  return (
    <div className="last-contacts-component">
      <div className="table-container" style={{ height: tableHeight }}>
        <h1>Recent Leads</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Contact Date</th>
              <th>Sector</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {currentContacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.name || '-'}</td>
                <td>{contact.company || '-'}</td>
                <td>{contact.email || '-'}</td>
                <td>{contact.phone || '-'}</td>
                <td>{contact.contact_date}</td>
                <td>{contact.sector || '-'}</td>
                {/* Render the ContactComponent for each contact */}
                <td>{contact.message || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        {/* Pagination controls go here */}
      </div>
      {/* Render the modal HTML structure conditionally */}
   
    </div>
  );
};

export default LastContactsComponent;

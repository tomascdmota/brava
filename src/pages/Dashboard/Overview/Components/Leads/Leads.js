import React, { useState, useEffect } from 'react';
import './Leads.scss';
import '../../Overview.scss';
import ContactComponent from '../ContactComponent';
import { saveAs } from 'file-saver';
import axios from 'axios';

const Leads = ({ userId, leadsData }) => {
  const [contactData, setContactData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('mostRecent');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const contactsPerPage = 7;
  const isMobile = window.innerWidth <= 1000;

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await axios.get(`https://${process.env.REACT_APP_HOST}/api/${userId}/contacts`);
        setContactData(response.data.contacts); // Update to set only the contacts array
        setLoading(false);
      } catch (error) {
        console.log('Error fetching contact data:', error);
        setLoading(false);
      }
    };

    fetchContactData();
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  // Ensure contactData is an array before filtering
  const filteredContacts = Array.isArray(contactData) ? contactData.filter(contact => {
    return (
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }).sort((a, b) => {
    if (filterOption === 'mostRecent') {
      return new Date(b.contact_date) - new Date(a.contact_date);
    } else {
      return new Date(a.contact_date) - new Date(b.contact_date);
    }
  }) : [];

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = filteredContacts.slice(indexOfFirstContact, indexOfLastContact);
  const contactCounter = currentContacts.length;

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const downloadCSV = () => {
    if (contactData && contactData.length > 0) {
      const header = ['Name', 'Email', 'Company', 'Contact Date', 'Message'];
      const csvData = [header.join(',')];

      contactData.forEach(contact => {
        const row = [
          contact.name,
          contact.email,
          contact.company,
          contact.sector,
          contact.phone,
          contact.contact_date,
          contact.message
        ];
        csvData.push(row.join(','));
      });

      const csvContent = csvData.join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
      saveAs(blob, 'leads.csv');
    }
  };

  const pagination = (
    <div className="pagination-container">
      <ul className="pagination">
        {Array.from({ length: Math.max(1, Math.ceil(filteredContacts.length / contactsPerPage)) }, (_, i) => (
          <li
            key={i}
            className={currentPage === i + 1 ? 'active' : ''}
            onClick={() => paginate(i + 1)}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
      <div className='lead-container'>
        <div className="lead-header">
          <h1 className='lead-title'>Card generated Leads</h1>
        </div>
        <div className="lead-wrapper">
          {/* Filter container */}
          <div className="filter-container">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ width: '100%' }} // Set the input width
            />
            <select
              value={filterOption}
              onChange={e => setFilterOption(e.target.value)}
              style={{ height: '40px' }} // Set the dropdown height
            >
              <option value="mostRecent">Most Recent</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
          {/* Contact description */}
          <div className="contact-description">
            <h1>Name, Company</h1>
            <h1>Email</h1>
            <h1 style={{marginLeft:"40px"}}>Phone</h1>
            <h1>Sector</h1>
            <h1>Contact Date</h1>
            <h1>Message</h1>
          </div>
          {/* Display contacts */}
          {loading ? (
            <p>Loading...</p>
          ) : (
            currentContacts.length > 0 ? (
              currentContacts.map(contact => (
                <ContactComponent
                  key={contact.contact_id} // Ensure the key is unique
                  user_id={contact.user_id}
                  contact_id={contact.contact_id}
                  name={contact.name}
                  company={contact.company}
                  email={contact.email}
                  sector={contact.sector}
                  phone={contact.phone}
                  message={contact.message}
                  contact_date={contact.contact_date} // Ensure this prop is passed
                />
              ))
            ) : (
              <p>No results found.</p>
            )
          )}
          {/* Export button */}
          <button className="download-csv-button" onClick={downloadCSV}>Export Leads</button>
        </div>
        {/* Pagination */}
        {pagination}
        {/* Sidebar */}
        <div className="overview-body-sidebar">
          <section className="payment-section">
            {!isMobile && (
              <div>
                <h2>GENERATED LEADS: </h2>
                <div className='contact-counter'>{contactData?.length ?? 0}</div>
              </div>
            )}
            <div className="payment-section-header"></div>
          </section>
        </div>
        
      </div>
  );
  
};

export default Leads;

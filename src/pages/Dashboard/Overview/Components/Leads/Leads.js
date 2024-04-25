import React, { useState } from 'react';
import './Leads.scss';
import '../../Overview.scss';
import ContactComponent from '../ContactComponent';
import { saveAs } from 'file-saver';

const Leads = ({ contactData }) => {
  const contactsPerPage = 5; // Number of contacts per page
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const contactCounter = contactData ? contactData.length : 0;
  const isMobile = window.innerWidth <= 1000;
  // Get contacts for the current page
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  var currentContacts = 0;
  if(contactData){
   currentContacts = contactData.slice(indexOfFirstContact, indexOfLastContact);
}
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const downloadCSV = () => {
    if (contactData && contactData.length > 0) {
      const header = ['Name', 'Email', 'Company', 'Contact Date', 'Message'];
      const csvData = [header.join(',')];

      contactData.forEach(contact => {
        const row = [
          contact.name,
          contact.email,
          contact.company,
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

  return (
    <div className='lead-container'>
    <div className="lead-wrapper">
      <div className="contact-description">
        <h1>Name, Company</h1>
        <h1>Email</h1>
        <h1>Contact Date</h1>
        <h1>Message</h1>
      </div>
      {currentContacts ? (
                currentContacts.map(contact => (
                  <ContactComponent
                    key={contact.contact_id}
                    name={contact.name}
                    email={contact.email}
                    company={contact.company}
                    contact_date={contact.contact_date}
                    message={contact.message}
                  />
                ))
              ) : (
                <p>Loading...</p>
              )}
      <button className="download-csv-button" onClick={downloadCSV}>Export Leads</button>
    </div>
    {/* Pagination */}
    {contactData.length > contactsPerPage && (
        <div className="pagination-container">
          <ul className="pagination">
            {Array.from({ length: Math.ceil(contactData.length / contactsPerPage) }, (_, i) => (
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
      )}
       
    <div className="overview-body-sidebar">
          <section className="payment-section">
            {!isMobile && (<div><h2>GENERATED LEADS: </h2>
              <div className='contact-counter'>{contactCounter}</div></div>)}
            <div className="payment-section-header">

            </div>
          
          </section>
        </div>
    </div>
  );
};

export default Leads;

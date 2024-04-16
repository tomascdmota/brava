import React from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';

function QRCodeModal({ isOpen, onClose, id, card_id }) {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="qr-modal-content">
            <div className="qr-code-container">
              <QRCode
                value={`https://app.bravanfc.com/${id}/cards/${card_id}`}
                size={256} // Increase the size of the QR code
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

QRCodeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  card_id: PropTypes.string.isRequired,
};

export default QRCodeModal;

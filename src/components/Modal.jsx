import React from 'react';

// This file contains only the reusable Modal (popup) component.
// It is self-contained and can be imported into any other component that needs a popup.

const modalStyles = `
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
  }

  .modal-content {
    background: #ffffff;
    padding: 2rem;
    border-radius: 0.75rem;
    width: 90%;
    max-width: 600px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    position: relative;
    animation: fadeIn 0.3s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }

  .modal-title {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: #1f2937;
  }

  .modal-close-btn {
    background: none;
    border: none;
    font-size: 2.25rem;
    font-weight: 300;
    line-height: 1;
    cursor: pointer;
    color: #6b7280;
    transition: color 0.2s;
  }

  .modal-close-btn:hover {
      color: #1f2937;
  }
  
  .modal-body p {
      margin: 0 0 0.75rem 0;
      line-height: 1.6;
      color: #6b7280;
  }

  .modal-body p strong {
      color: #1f2937;
      margin-right: 0.5rem;
      font-weight: 600;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  .form-group label {
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #1f2937;
  }
  .form-group input, .form-group textarea {
    padding: 0.75rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-family: inherit;
  }
`;

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <>
            <style>{modalStyles}</style>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h3 className="modal-title">{title}</h3>
                        <button onClick={onClose} className="modal-close-btn">&times;</button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;


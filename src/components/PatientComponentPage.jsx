import React, { useState } from 'react';

// --- CSS Styles ---
const allStyles = `
  :root {
    --primary-color: #3b82f6;
    --primary-dark: #2563eb;
    --secondary-color: #10b981;
    --background-color: #f3f4f6;
    --card-background: #ffffff;
    --text-primary: #1f2937;
    --text-secondary: #6b7280;
    --border-color: #e5e7eb;
    --sidebar-bg: #111827;
    --sidebar-text: #d1d5db;
    --sidebar-active: #3b82f6;
    --unread-message-bg: #eef2ff;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background-color: var(--background-color);
    color: var(--text-primary);
  }

  .dashboard-container {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .sidebar {
    width: 260px;
    background-color: var(--sidebar-bg);
    color: var(--sidebar-text);
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-shrink: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 1001;
  }

  .sidebar-header {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-align: center;
    margin-bottom: 2rem;
  }

  .sidebar-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .sidebar-nav li a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    text-decoration: none;
    color: var(--sidebar-text);
    font-weight: 500;
    margin-bottom: 0.5rem;
    transition: background-color 0.2s, color 0.2s;
  }
  
  .sidebar-nav li a:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
  }

  .sidebar-nav li a.active {
    background-color: var(--sidebar-active);
    color: white;
  }
  
  .main-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  .header {
    background-color: var(--card-background);
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
  }
  
  .header-main {
      display: flex;
      align-items: center;
      gap: 1rem;
  }

  .header h1 {
    margin: 0;
    font-size: 1.75rem;
  }

  .hamburger-btn {
      display: none;
      background: none;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      color: var(--text-primary);
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .notification-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    position: relative;
    transition: background-color 0.2s;
  }
  
  .notification-dot {
      height: 8px;
      width: 8px;
      background-color: var(--primary-color);
      border-radius: 50%;
      position: absolute;
      top: 6px;
      right: 6px;
      border: 1px solid var(--card-background);
  }

  .notification-button:hover {
      background-color: var(--background-color);
  }

  .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
  }
  
  .content-area {
    padding: 2rem;
    flex-grow: 1;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card {
    background-color: var(--card-background);
    padding: 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  }
  
  .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
  }

  .card-title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }
  
  .btn {
      padding: 0.5rem 1rem;
      border-radius: 0.375rem;
      border: 1px solid var(--primary-color);
      background-color: var(--primary-color);
      color: white;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      font-size: 0.875rem;
      transition: background-color 0.2s, transform 0.1s ease-out, box-shadow 0.2s;
  }
  .btn:hover {
      background-color: var(--primary-dark);
      transform: translateY(-2px);
      box-shadow: 0 2px 5px rgba(0,0,0,0.15);
  }
  
  .btn-secondary {
      background-color: var(--background-color);
      color: var(--text-primary);
      border: 1px solid var(--border-color);
  }
  .btn-secondary:hover {
      background-color: var(--border-color);
  }

  .sidebar-contact {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(209, 213, 219, 0.2);
    text-align: center;
    font-size: 0.875rem;
  }
  .contact-title {
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    color: white;
  }
  .contact-info {
    margin: 0.25rem 0;
    color: var(--sidebar-text);
  }

  .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.5);
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  .overlay.visible {
      opacity: 1;
      visibility: visible;
  }
  
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
    background: var(--card-background);
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
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }

  .modal-title {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .modal-close-btn {
    background: none;
    border: none;
    font-size: 2.25rem;
    font-weight: 300;
    line-height: 1;
    cursor: pointer;
    color: var(--text-secondary);
    transition: color 0.2s;
  }

  .modal-close-btn:hover {
      color: var(--text-primary);
  }
  
  .modal-body p {
      margin: 0 0 0.75rem 0;
      line-height: 1.6;
      color: var(--text-secondary);
  }

  .modal-body p strong {
      color: var(--text-primary);
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
  }
  .form-group input, .form-group textarea {
    padding: 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
    font-size: 1rem;
    font-family: inherit;
  }


  .patient-info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
  }
  
  .section-divider {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border-color);
  }

  .info-item {
      display: flex;
      flex-direction: column;
  }

  .info-item .label {
      font-size: 0.875rem;
      color: var(--text-secondary);
      margin-bottom: 0.25rem;
  }
  .info-item .value {
      font-weight: 500;
  }

  .table-wrapper {
    width: 100%;
    overflow-x: auto;
  }

  .data-table {
    width: 100%;
    border-collapse: collapse;
  }
  .data-table th, .data-table td {
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 1px solid var(--border-color);
    white-space: nowrap;
  }
  .data-table th {
    background-color: var(--background-color);
    font-weight: 600;
  }
  .data-table tbody tr {
      transition: background-color 0.2s;
  }
  .data-table tbody tr:hover {
      background-color: #f9fafb;
  }
  
  .message-list {
      list-style: none;
      padding: 0;
      margin: 0;
  }
  .message-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      border-bottom: 1px solid var(--border-color);
      cursor: pointer;
      transition: background-color 0.2s;
  }
  .message-item:hover {
      background-color: var(--unread-message-bg);
  }
  .message-item.unread {
      background-color: var(--unread-message-bg);
  }
  .message-item .message-sender {
    font-weight: 600;
  }
  .message-details {
      display: flex;
      gap: 1rem;
      align-items: center;
      flex-grow: 1;
      min-width: 0;
  }
  .message-content {
      flex-grow: 1;
      min-width: 0;
  }
  .message-subject {
      color: var(--text-primary);
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }
  .message-snippet {
      font-size: 0.875rem;
      color: var(--text-secondary);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }
  .message-sender-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      flex-shrink: 0;
  }
  .message-date {
      color: var(--text-secondary);
      font-size: 0.875rem;
      flex-shrink: 0;
  }
  
  .overview-header {
    margin-bottom: 2rem;
  }
  .overview-header h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
  }
  .overview-header p {
      font-size: 1rem;
      color: var(--text-secondary);
      margin-top: 0.25rem;
  }
  .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
  }
  .stat-card {
      background-color: var(--card-background);
      padding: 1.5rem;
      border-radius: 0.75rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
      display: flex;
      align-items: center;
      gap: 1rem;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .stat-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }
  .stat-card-icon {
      padding: 0.75rem;
      border-radius: 50%;
      flex-shrink: 0;
  }
  .stat-card-icon.red { background-color: #fee2e2; color: #dc2626; }
  .stat-card-icon.blue { background-color: #dbeafe; color: #2563eb; }
  .stat-card-icon.indigo { background-color: #e0e7ff; color: #4f46e5; }
  .stat-card-info .label { font-size: 0.875rem; color: var(--text-secondary); margin: 0; }
  .stat-card-info .value { font-size: 1.5rem; font-weight: 600; margin: 0.25rem 0 0 0; }
  
  .overview-main-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
  .overview-grid-left, .overview-grid-right {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .quick-actions-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;
  }
  .quick-actions-item a {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem;
      border-radius: 0.5rem;
      text-decoration: none;
      color: var(--text-primary);
      background-color: var(--background-color);
      transition: background-color 0.2s, transform 0.2s ease;
      font-weight: 500;
  }
   .quick-actions-item a:hover {
       background-color: var(--border-color);
       transform: translateX(3px);
   }

  @media (min-width: 1024px) {
    .overview-main-grid {
      grid-template-columns: 2fr 1fr;
    }
  }

  @media (max-width: 768px) {
    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        transform: translateX(-100%);
        box-shadow: 2px 0 10px rgba(0,0,0,0.1);
    }
    .sidebar.open {
        transform: translateX(0);
    }
    .hamburger-btn {
        display: block;
    }
    
    .header {
      padding: 1rem;
    }

    .header h1 {
        font-size: 1.25rem;
    }
    .content-area {
        padding: 1rem;
    }
    .card-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
    .modal-content {
      width: 95%;
      padding: 1.5rem;
    }
  }
`;

// --- SVG Icons ---
const HomeIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>);
const CalendarIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>);
const UserStethoscopeIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0zM12 14c-2.5 0-4.7 1-6.3 2.5" /><path d="M15.5 2.1a2 2 0 0 1 2.8 0L21 4.8a2 2 0 0 1 0 2.8l-1.4 1.4" /><path d="M18 9.5V14a2 2 0 0 1-2 2h-1" /><path d="m15 16-1 1" /><path d="M12 21v-4" /><path d="M9 16.5a2.5 2.5 0 0 1 5 0V18a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1.5z" /></svg>);
const UserIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>);
const FileTextIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>);
const MessageSquareIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>);
const PillIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>);
const BellIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>);
const MenuIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>);
const HeartIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>);
const DropletIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4.5-5.5c-1 1.5-2.5 4-4.5 5.5S5 13 5 15a7 7 0 0 0 7 7z"></path></svg>);
const PlusIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>);

// --- Mock Data ---
const patientData = { name: 'John Appleseed', dob: '1985-05-20', gender: 'Male', bloodType: 'O+', primaryDoctor: 'Dr. Evelyn Reed', insurance: 'Blue Cross Blue Shield', emergencyContact: { name: 'Jane Appleseed', relationship: 'Spouse', phone: '(555) 123-4568' } };
const appointmentsData = [ { id: 1, date: '2025-10-15', time: '10:00 AM', doctor: 'Dr. Evelyn Reed', reason: 'Annual Checkup', status: 'Upcoming' }, { id: 2, date: '2025-09-01', time: '02:30 PM', doctor: 'Dr. Evelyn Reed', reason: 'Follow-up', status: 'Completed' }, { id: 3, date: '2025-08-15', time: '09:00 AM', doctor: 'Dr. Evelyn Reed', reason: 'Lab Work', status: 'Cancelled' }, { id: 4, date: '2025-07-20', time: '11:00 AM', doctor: 'Dr. Mark Johnson', reason: 'Cardiology Consult', status: 'Completed' } ];
const doctorsData = [ { id: 1, name: 'Dr. Evelyn Reed', specialty: 'General Practice', image: 'https://i.pravatar.cc/150?img=1', phone: '(555) 987-6543' }, { id: 2, name: 'Dr. Mark Johnson', specialty: 'Cardiology', image: 'https://i.pravatar.cc/150?img=2', phone: '(555) 987-6544' } ];
const reportsData = [ 
    { id: 1, name: 'Complete Blood Count', date: '2025-09-02', type: 'Lab Result', status: 'Ready', details: 'All values within normal ranges. Reviewed by Dr. Reed.' }, 
    { id: 2, name: 'Lipid Panel', date: '2025-09-02', type: 'Lab Result', status: 'Ready', details: 'Total Cholesterol: 190 mg/dL. LDL: 110 mg/dL. HDL: 60 mg/dL.' }, 
    { id: 3, name: 'Chest X-Ray', date: '2025-07-21', type: 'Imaging', status: 'Ready', details: 'No abnormalities detected. Lungs are clear.' } 
];
const messagesData = [ { id: 1, sender: 'Dr. Evelyn Reed', subject: 'Your recent lab results', date: '2025-09-05', read: false, senderImg: 'https://i.pravatar.cc/150?img=1', snippet: "Hi John, your results are back and look good. I've added them to your reports tab.", body: "Hi John, your recent lab results for the Complete Blood Count and Lipid Panel have been reviewed. Everything appears to be within the normal range. I've uploaded the detailed report to your portal under the 'My Reports' section for your records. Please feel free to schedule a follow-up if you have any questions. Best, Dr. Reed." }, { id: 2, sender: 'ClinicPlus Notifications', subject: 'Appointment Reminder: Oct 15, 2025', date: '2025-10-01', read: true, senderImg: null, snippet: "This is a reminder for your upcoming appointment with Dr. Reed...", body: "This is a reminder for your upcoming appointment with Dr. Evelyn Reed on October 15, 2025 at 10:00 AM for an Annual Checkup. Please arrive 15 minutes early for check-in. If you need to reschedule, please call our office at (555) 123-4567." } ];
const prescriptionsData = [ { id: 1, name: 'Lisinopril', dosage: '10mg', frequency: 'Once a day', status: 'Active', refillsLeft: 2, prescribedBy: 'Dr. Evelyn Reed' }, { id: 2, name: 'Atorvastatin', dosage: '20mg', frequency: 'Once a day', status: 'Active', refillsLeft: 2, prescribedBy: 'Dr. Mark Johnson' }, { id: 3, name: 'Amoxicillin', dosage: '500mg', frequency: 'Three times a day', status: 'Expired', refillsLeft: 0, prescribedBy: 'Dr. Evelyn Reed' } ];

// --- Reusable Components ---
const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
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
    );
};

// --- Page Components ---

const OverviewStatCard = ({ title, value, icon, color }) => {
    const Icon = icon;
    return (
        <div className="stat-card">
            <div className={`stat-card-icon ${color}`}>
                <Icon style={{width: 24, height: 24}} />
            </div>
            <div className="stat-card-info">
                <p className="label">{title}</p>
                <p className="value">{value}</p>
            </div>
        </div>
    );
};

const VitalsChart = () => (
    <div style={{height: '150px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '1rem'}}>
        <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
            <path d="M 0 80 C 50 20, 100 100, 150 50, 200 0, 250 60, 300 20" fill="none" stroke="var(--primary-color)" strokeWidth="2"/>
            <circle cx="0" cy="80" r="3" fill="var(--primary-color)" />
            <circle cx="150" cy="50" r="3" fill="var(--primary-color)" />
            <circle cx="300" cy="20" r="3" fill="var(--primary-color)" />
        </svg>
    </div>
);


const OverviewContent = () => {
    const nextAppointment = appointmentsData.find(a => a.status === 'Upcoming');
    const unreadMessages = messagesData.filter(m => !m.read);

    return (
        <div>
            <div className="overview-header">
                <h1>My Health Dashboard</h1>
                <p>Welcome back, John!</p>
            </div>
            <div className="stats-grid">
                <OverviewStatCard title="Heart Rate" value="72 bpm" icon={HeartIcon} color="red" />
                <OverviewStatCard title="Blood Pressure" value="120/80" icon={UserStethoscopeIcon} color="blue" />
                <OverviewStatCard title="Glucose Level" value="95 mg/dL" icon={DropletIcon} color="indigo" />
            </div>
            <div className="overview-main-grid">
                <div className="overview-grid-left">
                    <div className="card">
                        <h3 className="card-title">Next Appointment</h3>
                        {nextAppointment ? (
                            <div>
                                <p style={{fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary-color)', margin: '0 0 0.5rem 0'}}>{nextAppointment.date}</p>
                                <p><strong>Time:</strong> {nextAppointment.time}</p>
                                <p><strong>Doctor:</strong> {nextAppointment.doctor}</p>
                                <p><strong>Reason:</strong> {nextAppointment.reason}</p>
                            </div>
                        ) : <p>You have no upcoming appointments.</p>}
                    </div>
                     <div className="card">
                        <h3 className="card-title">Blood Pressure Trend</h3>
                        <VitalsChart />
                    </div>
                </div>
                <div className="overview-grid-right">
                    <div className="card">
                         <h3 className="card-title">Quick Actions</h3>
                         <ul className="quick-actions-list">
                             <li className="quick-actions-item"><a href="#"><PlusIcon width={20} height={20}/> Schedule Appointment</a></li>
                             <li className="quick-actions-item"><a href="#"><PillIcon width={20} height={20}/> Request Refill</a></li>
                             <li className="quick-actions-item"><a href="#"><FileTextIcon width={20} height={20}/> View Reports</a></li>
                         </ul>
                    </div>
                    <div className="card">
                        <h3 className="card-title">Recent Messages</h3>
                        {unreadMessages.length > 0 ? (
                            <ul className="message-list" style={{margin: '-1.5rem', padding: '0.5rem 0'}}>
                                {unreadMessages.map(msg => (
                                    <li key={msg.id} className="message-item" style={{border: 'none'}}>
                                        <div className="message-details">
                                            <div className="message-content">
                                                <p className="message-subject" style={{fontSize: '0.875rem'}}>{msg.subject}</p>
                                                <p className="message-snippet" style={{fontSize: '0.875rem'}}>From: {msg.sender}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : <p>You have no new messages.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

const AppointmentsContent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAppt, setSelectedAppt] = useState(null);

    const openModal = (appt) => {
        setSelectedAppt(appt);
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="card">
                <div className="card-header"><h2 className="card-title">My Appointments</h2><button className="btn">Schedule New</button></div>
                <div className="table-wrapper">
                    <table className="data-table">
                        <thead><tr><th>Date</th><th>Time</th><th>Doctor</th><th>Reason</th><th>Status</th><th>Action</th></tr></thead>
                        <tbody>
                            {appointmentsData.map(appt => (
                                <tr key={appt.id}>
                                    <td>{appt.date}</td><td>{appt.time}</td><td>{appt.doctor}</td><td>{appt.reason}</td><td>{appt.status}</td>
                                    <td><button onClick={() => openModal(appt)} className="btn btn-secondary">Details</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Appointment Details">
                {selectedAppt && (
                    <div>
                        <p><strong>Date:</strong> {selectedAppt.date} at {selectedAppt.time}</p>
                        <p><strong>Doctor:</strong> {selectedAppt.doctor}</p>
                        <p><strong>Reason for Visit:</strong> {selectedAppt.reason}</p>
                        <p><strong>Status:</strong> {selectedAppt.status}</p>
                    </div>
                )}
            </Modal>
        </>
    );
};

const MyDoctorsContent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    const openModal = (doc) => {
        setSelectedDoctor(doc);
        setIsModalOpen(true);
    };
    
    return (
        <>
        <div className="card">
            <div className="card-header"><h2 className="card-title">My Doctors</h2></div>
            <div className="table-wrapper">
                <table className="data-table">
                    <thead><tr><th>Photo</th><th>Name</th><th>Specialty</th><th>Contact</th><th>Action</th></tr></thead>
                    <tbody>
                        {doctorsData.map(doc => (
                            <tr key={doc.id}>
                                <td><img src={doc.image} alt={doc.name} style={{width: '40px', height: '40px', borderRadius: '50%'}}/></td>
                                <td>{doc.name}</td><td>{doc.specialty}</td><td>{doc.phone}</td>
                                <td><button onClick={() => openModal(doc)} className="btn btn-secondary">Send Message</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={`Message ${selectedDoctor?.name}`}>
            <form onSubmit={e => e.preventDefault()}>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" defaultValue={`Question for ${selectedDoctor?.name}`} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="5"></textarea>
                </div>
                <button type="submit" className="btn">Send</button>
            </form>
        </Modal>
        </>
    );
};
const MyProfileContent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return(
        <>
        <div className="card">
            <div className="card-header"><h2 className="card-title">My Profile</h2><button onClick={() => setIsModalOpen(true)} className="btn">Edit Profile</button></div>
            <div className="patient-info-grid">
                <div className="info-item"><span className="label">Full Name</span><span className="value">{patientData.name}</span></div>
                <div className="info-item"><span className="label">Date of Birth</span><span className="value">{patientData.dob}</span></div>
                <div className="info-item"><span className="label">Gender</span><span className="value">{patientData.gender}</span></div>
                <div className="info-item"><span className="label">Blood Type</span><span className="value">{patientData.bloodType}</span></div>
                <div className="info-item"><span className="label">Primary Care Physician</span><span className="value">{patientData.primaryDoctor}</span></div>
                <div className="info-item"><span className="label">Insurance Provider</span><span className="value">{patientData.insurance}</span></div>
            </div>
            <div className="section-divider">
                <h3 className="card-title" style={{marginBottom: '1rem'}}>Emergency Contact</h3>
                <div className="patient-info-grid">
                    <div className="info-item"><span className="label">Name</span><span className="value">{patientData.emergencyContact.name}</span></div>
                    <div className="info-item"><span className="label">Relationship</span><span className="value">{patientData.emergencyContact.relationship}</span></div>
                    <div className="info-item"><span className="label">Phone</span><span className="value">{patientData.emergencyContact.phone}</span></div>
                </div>
            </div>
        </div>
         <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Edit Profile">
            <form onSubmit={e => e.preventDefault()}>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" defaultValue={patientData.name} />
                </div>
                 <div className="form-group">
                    <label htmlFor="phone">Emergency Contact Phone</label>
                    <input type="tel" id="phone" defaultValue={patientData.emergencyContact.phone} />
                </div>
                <button type="submit" className="btn">Save Changes</button>
            </form>
        </Modal>
        </>
    );
};
const MyReportsContent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedReport, setSelectedReport] = useState(null);

    const openModal = (report) => {
        setSelectedReport(report);
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="card">
                <div className="card-header"><h2 className="card-title">My Reports</h2></div>
                <div className="table-wrapper">
                    <table className="data-table">
                        <thead><tr><th>Report Name</th><th>Type</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
                        <tbody>
                            {reportsData.map(report => (
                                <tr key={report.id}>
                                    <td>{report.name}</td><td>{report.type}</td><td>{report.date}</td><td>{report.status}</td>
                                    <td><button onClick={() => openModal(report)} className="btn btn-secondary">View</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={selectedReport?.name}>
                {selectedReport && (
                    <div>
                        <p><strong>Date:</strong> {selectedReport.date}</p>
                        <p><strong>Type:</strong> {selectedReport.type}</p>
                        <hr style={{margin: '1rem 0', border: 'none', borderTop: '1px solid var(--border-color)'}} />
                        <p><strong>Details:</strong></p>
                        <p>{selectedReport.details}</p>
                    </div>
                )}
            </Modal>
        </>
    );
};

const MessagesContent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState(null);

    const openModal = (msg) => {
        setSelectedMessage(msg);
        setIsModalOpen(true);
    };

    return(
        <>
            <div className="card">
                <div className="card-header"><h2 className="card-title">Messages</h2><button onClick={() => openModal('new')} className="btn">New Message</button></div>
                <ul className="message-list">
                    {messagesData.map(msg => (
                        <li key={msg.id} onClick={() => openModal(msg)} className={`message-item ${!msg.read ? 'unread' : ''}`}>
                            <div className="message-details">
                                {msg.senderImg ? <img src={msg.senderImg} alt={msg.sender} className="message-sender-avatar"/> : <div style={{width: 40, height: 40, borderRadius: '50%', backgroundColor: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0}}>{msg.sender.charAt(0)}</div>}
                                <div className="message-content">
                                    <p className="message-subject">{msg.subject}</p>
                                    <p className="message-snippet">{msg.snippet}</p>
                                </div>
                            </div>
                            <span className="message-date">{msg.date}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={selectedMessage === 'new' ? 'New Message' : selectedMessage?.subject}>
                {selectedMessage === 'new' ? (
                     <form onSubmit={e => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="recipient">To</label>
                            <input type="text" id="recipient" defaultValue="Dr. Evelyn Reed" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="msg-subject">Subject</label>
                            <input type="text" id="msg-subject" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="msg-body">Message</label>
                            <textarea id="msg-body" rows="5"></textarea>
                        </div>
                        <button type="submit" className="btn">Send</button>
                    </form>
                ) : (
                    <div>
                        <p><strong>From:</strong> {selectedMessage?.sender}</p>
                        <p><strong>Date:</strong> {selectedMessage?.date}</p>
                        <hr style={{margin: '1rem 0', border: 'none', borderTop: '1px solid var(--border-color)'}} />
                        <p>{selectedMessage?.body}</p>
                    </div>
                )}
            </Modal>
        </>
    );
};
const PrescriptionsContent = () => ( <div className="card"> <div className="card-header"><h2 className="card-title">My Prescriptions</h2><button className="btn">Request Refill</button></div> <div className="table-wrapper"> <table className="data-table"> <thead><tr><th>Medication</th><th>Dosage</th><th>Frequency</th><th>Prescribed By</th><th>Status</th><th>Refills Left</th></tr></thead> <tbody> {prescriptionsData.map(rx => ( <tr key={rx.id}> <td>{rx.name}</td><td>{rx.dosage}</td><td>{rx.frequency}</td><td>{rx.prescribedBy}</td><td>{rx.status}</td><td>{rx.refillsLeft}</td> </tr> ))} </tbody> </table> </div> </div> );

// --- Main App Component ---
export default function ClinicalDashboard() {
  const [activePage, setActivePage] = useState('Overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { name: 'Overview', icon: HomeIcon },
    { name: 'Appointments', icon: CalendarIcon },
    { name: 'My Doctors', icon: UserStethoscopeIcon },
    { name: 'My Profile', icon: UserIcon },
    { name: 'My Reports', icon: FileTextIcon },
    { name: 'Messages', icon: MessageSquareIcon },
    { name: 'Prescriptions', icon: PillIcon },
  ];

  const handleNavClick = (e, pageName) => {
    e.preventDefault();
    setActivePage(pageName);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };
  
  const renderContent = () => {
    switch (activePage) {
        case 'Overview': return <OverviewContent />;
        case 'Appointments': return <AppointmentsContent />;
        case 'My Doctors': return <MyDoctorsContent />;
        case 'My Profile': return <MyProfileContent />;
        case 'My Reports': return <MyReportsContent />;
        case 'Messages': return <MessagesContent />;
        case 'Prescriptions': return <PrescriptionsContent />;
        default: return <OverviewContent />;
    }
  };

  return (
    <>
      <style>{allStyles}</style>
      <div className="dashboard-container">
        {isSidebarOpen && <div className="overlay visible" onClick={() => setIsSidebarOpen(false)}></div>}
        <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div>
                <h2 className="sidebar-header">Patient Portal</h2>
                <nav className="sidebar-nav">
                    <ul>
                        {navItems.map(item => (
                            <li key={item.name}>
                                <a 
                                    href="#" 
                                    className={activePage === item.name ? 'active' : ''}
                                    onClick={(e) => handleNavClick(e, item.name)}
                                >
                                    <item.icon />
                                    <span>{item.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
             <div>
                <div className="sidebar-contact">
                    <h4 className="contact-title">Contact Support</h4>
                    <p className="contact-info">support@clinicplus.com</p>
                    <p className="contact-info">(555) 123-4567</p>
                </div>
            </div>
        </aside>
        <main className="main-content">
          <header className="header">
            <div className="header-main">
                <button className="hamburger-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <MenuIcon />
                </button>
                <h1>{activePage}</h1>
            </div>
            <div className="header-right">
                <button className="notification-button">
                    <BellIcon />
                    {messagesData.some(m => !m.read) && <div className="notification-dot"></div>}
                </button>
                <img src="https://i.pravatar.cc/150?img=10" alt="Patient Avatar" className="avatar" />
            </div>
          </header>
          <div className="content-area">
            {renderContent()}
          </div>
        </main>
      </div>
    </>
  );
}


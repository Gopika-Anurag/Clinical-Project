import React, { useState } from 'react';

// --- CSS Styles ---
const allStyles = `
  #root {
    width: 100%;
    height: 100%;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    --blue-600: #2563eb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-800: #1f2937;
    --white: #ffffff;
    --red-500: #ef4444;
    --green-100: #d1fae5;
    --green-700: #047857;
    --indigo-100: #e0e7ff;
    --indigo-600: #4f46e5;
    --red-100: #fee2e2;
    --red-600: #dc2626;
    --blue-100: #dbeafe;
    --sidebar-bg: #1D2B3A;
    --sidebar-secondary-bg: #2A3B4E;
  }

  body {
    font-family: sans-serif;
    background-color: var(--gray-100);
  }

  .app-container {
    display: flex;
    min-height: 100vh;
  }

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0; /* Prevents content from overflowing */
  }
  
  .content-wrapper {
    flex: 1;
    padding: 2rem;
  }

  /* --- Sidebar --- */
  .sidebar {
    background-color: var(--sidebar-bg);
    color: var(--white);
    width: 256px;
    flex-shrink: 0; /* Prevent sidebar from shrinking */
    min-height: 100vh;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease-in-out;
  }
  .sidebar-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
    padding: 0.5rem;
  }
  .sidebar-logo {
    background-color: var(--blue-600);
    border-radius: 9999px;
    padding: 0.5rem;
  }
  .sidebar-logo svg {
      width: 1.5rem;
      height: 1.5rem;
  }
  .sidebar-title {
    font-size: 1.25rem;
    font-weight: bold;
  }
  .search-container {
    position: relative;
    margin-bottom: 1.5rem;
  }
  .search-icon {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--gray-400);
    width: 1.25rem;
    height: 1.25rem;
  }
  .search-input {
    width: 100%;
    background-color: var(--sidebar-secondary-bg);
    border: 1px solid var(--gray-600);
    border-radius: 0.5rem;
    padding: 0.5rem 2.5rem;
    color: var(--white);
  }
  .search-input::placeholder {
    color: var(--gray-400);
  }
  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .nav-item {
    margin-bottom: 0.5rem;
  }
  .nav-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
    text-decoration: none;
    color: var(--gray-300);
    transition: background-color 0.2s, color 0.2s;
  }
  .nav-link:hover {
    background-color: var(--sidebar-secondary-bg);
    color: var(--white);
  }
  .nav-link.active {
    background-color: var(--blue-600);
    color: var(--white);
  }
  .nav-link .icon {
      width: 1.5rem;
      height: 1.5rem;
  }
  .nav-link .nav-text {
      flex-grow: 1;
  }
  .nav-count {
    background-color: var(--red-500);
    color: var(--white);
    font-size: 0.75rem;
    font-weight: bold;
    border-radius: 9999px;
    height: 1.25rem;
    width: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .help-center {
    background-color: var(--sidebar-secondary-bg);
    padding: 1rem;
    border-radius: 0.5rem;
    text-align: center;
  }
  .help-icon-container {
    background-color: var(--blue-600);
    border-radius: 9999px;
    padding: 0.75rem;
    display: inline-block;
    margin-top: -2.5rem;
    margin-bottom: 0.5rem;
  }
  .help-icon {
      width: 2rem;
      height: 2rem;
      color: var(--white);
  }
  .help-center h3 {
      font-weight: bold;
      color: var(--white);
      margin: 0 0 0.5rem 0;
  }
  .help-center p {
      font-size: 0.875rem;
      color: var(--gray-400);
      margin-bottom: 1rem;
  }
  .help-button {
      background-color: var(--white);
      color: var(--gray-800);
      font-weight: 600;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      width: 100%;
      border: none;
      cursor: pointer;
      transition: background-color 0.2s;
  }
  .help-button:hover {
      background-color: var(--gray-200);
  }

  /* --- Header --- */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: var(--white);
    border-bottom: 1px solid var(--gray-200);
  }
  .header-left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .menu-button {
      display: none; /* Hidden by default */
  }
  .header-title h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--gray-800);
    margin: 0;
  }
  .header-title p {
    font-size: 0.875rem;
    color: var(--gray-500);
    margin: 0;
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .notification-button {
    padding: 0.5rem;
    border-radius: 9999px;
    border: none;
    background: none;
    cursor: pointer;
  }
  .notification-button:hover {
    background-color: var(--gray-100);
  }
  .notification-icon {
      width: 1.5rem;
      height: 1.5rem;
      color: var(--gray-600);
  }
  .divider {
      height: 2rem;
      width: 1px;
      background-color: var(--gray-300);
  }
  .avatar {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 9999px;
  }

  /* --- Patient Info Card --- */
  .patient-info-card {
    background-color: var(--white);
    padding: 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
  }
  .patient-avatar {
      width: 6rem;
      height: 6rem;
      border-radius: 9999px;
      border: 4px solid var(--white);
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  }
  .patient-details {
      flex-grow: 1;
  }
  .patient-name {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--gray-800);
      margin: 0;
  }
  .patient-contact-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem 2rem;
      margin-top: 1rem;
      color: var(--gray-600);
  }
  .contact-item span {
      font-size: 0.875rem;
      font-weight: 500;
  }
  .contact-item p {
      font-size: 0.875rem;
      margin: 0;
  }

  /* --- Stat Cards --- */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
  .stat-card {
    background-color: var(--white);
    padding: 1.25rem;
    border-radius: 0.75rem;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .stat-card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .stat-icon-wrapper {
      padding: 0.5rem;
      border-radius: 0.5rem;
  }
  .stat-icon {
      width: 1.5rem;
      height: 1.5rem;
  }
  .icon-blue { background-color: rgba(59, 130, 246, 0.2); color: #2563eb; }
  .icon-indigo { background-color: rgba(99, 102, 241, 0.2); color: #4f46e5; }
  .icon-red { background-color: rgba(239, 68, 68, 0.2); color: #dc2626; }
  .more-button {
      color: var(--gray-400);
      background: none;
      border: none;
      cursor: pointer;
  }
  .more-button:hover {
      color: var(--gray-600);
  }
  .stat-card-body p:first-child {
      font-size: 0.875rem;
      color: var(--gray-500);
      margin-top: 1rem;
      margin-bottom: 0;
  }
  .stat-card-body p:last-child {
      font-size: 1.875rem;
      font-weight: bold;
      color: var(--gray-800);
      margin: 0;
  }

  /* --- Appointment Table --- */
  .appointment-table-container {
    background-color: var(--white);
    padding: 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
    margin-top: 1.5rem;
  }
  .table-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .table-title {
    font-size: 1.125rem;
    font-weight: bold;
    color: var(--gray-800);
    margin-bottom: 1rem;
  }
  .table-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
  .table-search {
      position: relative;
      flex-grow: 1;
  }
  .table-search-icon {
      position: absolute;
      left: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--gray-400);
      width: 1.25rem;
      height: 1.25rem;
  }
  .table-search-input {
      padding: 0.5rem 0.5rem 0.5rem 2.5rem;
      border: 1px solid var(--gray-300);
      border-radius: 0.5rem;
      width: 100%;
  }
  .filter-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--gray-300);
    border-radius: 0.5rem;
    color: var(--gray-800);
    background-color: var(--white);
    cursor: pointer;
  }
  .filter-button:hover {
      background-color: var(--gray-100);
  }
  .table-wrapper {
      overflow-x: auto;
  }
  .appointment-table {
      width: 100%;
      text-align: left;
      border-collapse: collapse;
  }
  .appointment-table thead { display: none; }
  .appointment-table th {
    padding: 0.75rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--gray-600);
  }
  .appointment-table tr {
      border-bottom: 1px solid var(--gray-200);
  }
  .appointment-table tbody tr:hover {
      background-color: var(--gray-50);
  }
  .appointment-table td {
      padding: 0.75rem;
  }
  .doctor-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
  }
  .doctor-avatar {
      width: 2rem;
      height: 2rem;
      border-radius: 9999px;
  }
  .doctor-name {
      font-weight: 500;
      color: var(--gray-800);
  }
  .status-badge {
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
      font-weight: 500;
      border-radius: 9999px;
  }
  .status-completed {
      background-color: var(--green-100);
      color: var(--green-700);
  }

  /* --- Overview Page --- */
  .overview-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
  .overview-card {
    background-color: var(--white);
    padding: 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  }
  .overview-card h3 {
    margin-top: 0;
    font-size: 1.125rem;
    color: var(--gray-800);
  }
  .appointment-list, .lab-results-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .appointment-item, .lab-results-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid var(--gray-200);
  }
  .appointment-item:last-child, .lab-results-item:last-child {
    border-bottom: none;
  }
  .appointment-details p, .lab-results-details p {
    margin: 0;
    font-size: 0.875rem;
    color: var(--gray-500);
  }
  .appointment-details p:first-child, .lab-results-details p:first-child {
    font-weight: 500;
    color: var(--gray-800);
    margin-bottom: 0.25rem;
  }
  .view-results-btn {
    color: var(--blue-600);
    font-weight: 600;
    text-decoration: none;
    font-size: 0.875rem;
  }
  
  /* --- Responsive --- */
  @media (max-width: 1023px) {
    .sidebar {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      transform: translateX(-100%);
      z-index: 30;
    }
    .sidebar.open {
        transform: translateX(0);
    }
    .sidebar-overlay {
        position: fixed;
        inset: 0;
        background-color: rgba(0,0,0,0.5);
        z-index: 20;
    }
    .menu-button {
        display: block;
        padding: 0.5rem;
        border-radius: 0.375rem;
        background: none;
        border: none;
        cursor: pointer;
    }
    .menu-button svg {
      stroke: var(--gray-800);
      width: 1.5rem;
      height: 1.5rem;
    }
    .menu-button:hover {
        background-color: var(--gray-100);
    }
  }

  @media (min-width: 640px) {
      .patient-contact-grid {
          grid-template-columns: repeat(2, 1fr);
      }
      .stats-grid {
          grid-template-columns: repeat(2, 1fr);
      }
      .filter-button span {
          display: inline;
      }
      .content-wrapper {
        padding: 1.5rem;
      }
  }

  @media (min-width: 768px) {
    .patient-info-card {
        flex-direction: row;
        text-align: left;
    }
    .table-header {
        flex-direction: row;
    }
    .table-title {
        margin-bottom: 0;
    }
    .table-controls {
        width: auto;
    }
    .appointment-table thead {
      display: table-header-group;
    }
    .appointment-table tr {
        border-bottom: 1px solid var(--gray-200);
    }
    .appointment-table td, .appointment-table th {
        padding: 0.75rem;
    }
    .responsive-table-row {
        display: table-row;
    }
    .responsive-table-cell {
        display: table-cell;
    }
    .responsive-table-cell::before {
        display: none;
    }
    .overview-grid {
        grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
      .sidebar {
          position: relative;
          transform: translateX(0);
      }
      .stats-grid {
          grid-template-columns: repeat(3, 1fr);
      }
      .patient-contact-grid {
          grid-template-columns: repeat(3, 1fr);
      }
      .patient-contact-grid .sm-col-span-2 {
          grid-column: span 2 / span 2;
      }
       .patient-contact-grid .lg-col-span-1 {
          grid-column: span 1 / span 1;
      }
  }

  /* Responsive Table styles from original */
  @media (max-width: 767px) {
    .responsive-table-row {
      display: block;
      border: 1px solid #e5e7eb;
      border-radius: 0.5rem;
      padding: 1rem;
      margin-bottom: 1rem;
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    }
    .responsive-table-cell {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 0;
      border-bottom: 1px solid #f3f4f6;
    }
    .responsive-table-cell:last-child {
      border-bottom: none;
    }
    .responsive-table-cell::before {
      content: attr(data-label);
      font-weight: 600;
      margin-right: 1rem;
      color: #374151;
    }
  }
`;

// --- SVG Icons ---
const HomeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const CalendarIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const UserStethoscopeIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0zM12 14c-2.5 0-4.7 1-6.3 2.5" />
        <path d="M15.5 2.1a2 2 0 0 1 2.8 0L21 4.8a2 2 0 0 1 0 2.8l-1.4 1.4" />
        <path d="M18 9.5V14a2 2 0 0 1-2 2h-1" />
        <path d="m15 16-1 1" />
        <path d="M12 21v-4" />
        <path d="M9 16.5a2.5 2.5 0 0 1 5 0V18a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1.5z" />
    </svg>
);

const UsersIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const FileTextIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" x2="8" y1="13" y2="13" />
    <line x1="16" x2="8" y1="17" y2="17" />
    <line x1="10" x2="8" y1="9" y2="9" />
  </svg>
);

const MessageSquareIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const PillIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/>
        <path d="m8.5 8.5 7 7"/>
    </svg>
);

const SearchIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" x2="16.65" y1="21" y2="16.65" />
  </svg>
);

const SlidersHorizontalIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="21" x2="14" y1="4" y2="4"/>
        <line x1="10" x2="3" y1="4" y2="4"/>
        <line x1="21" x2="12" y1="12" y2="12"/>
        <line x1="8" x2="3" y1="12" y2="12"/>
        <line x1="21" x2="16" y1="20" y2="20"/>
        <line x1="12" x2="3" y1="20" y2="20"/>
        <line x1="14" x2="14" y1="2" y2="6"/>
        <line x1="8" x2="8" y1="10" y2="14"/>
        <line x1="16" x2="16" y1="18" y2="22"/>
    </svg>
);

const MoreHorizontalIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
);

const BellIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const HelpCircleIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <line x1="12" x2="12.01" y1="17" y2="17"/>
    </svg>
);


// --- Mock Data ---
const appointmentHistoryData = [
  { date: '22 Jan 2024', doctor: 'Dr. Savannah Nguyen', doctorImg: 'https://i.pravatar.cc/150?img=1', reason: 'Annual Checkup', status: 'Completed' },
  { date: '15 Nov 2023', doctor: 'Dr. Mark Johnson', doctorImg: 'https://i.pravatar.cc/150?img=2', reason: 'Follow-up', status: 'Completed' },
  { date: '05 Sep 2023', doctor: 'Dr. Emily White', doctorImg: 'https://i.pravatar.cc/150?img=3', reason: 'Blood Test', status: 'Completed' },
  { date: '10 May 2023', doctor: 'Dr. Savannah Nguyen', doctorImg: 'https://i.pravatar.cc/150?img=1', reason: 'Consultation', status: 'Completed' },
  { date: '02 Feb 2023', doctor: 'Dr. David Smith', doctorImg: 'https://i.pravatar.cc/150?img=4', reason: 'Dental Cleaning', status: 'Completed' },
];

const upcomingAppointmentsData = [
  { date: '15 Oct 2025', time: '10:30 AM', doctor: 'Dr. Evelyn Reed', reason: 'Quarterly Checkup' },
  { date: '28 Oct 2025', time: '02:00 PM', doctor: 'Dr. Mark Johnson', reason: 'Follow-up Consultation' },
];

const recentLabResultsData = [
  { test: 'Complete Blood Count (CBC)', date: '01 Oct 2025', status: 'View Results' },
  { test: 'Lipid Panel', date: '01 Oct 2025', status: 'View Results' },
  { test: 'Basic Metabolic Panel (BMP)', date: '25 Sep 2025', status: 'View Results' },
];


// --- Components ---

const Sidebar = ({ activePage, setActivePage, isOpen, setIsSidebarOpen }) => {
  const navItems = [
    { name: 'Overview', icon: HomeIcon },
    { name: 'Appointments', icon: CalendarIcon },
    { name: 'Doctors', icon: UserStethoscopeIcon },
    { name: 'Patients', icon: UsersIcon },
    { name: 'Reports', icon: FileTextIcon },
    { name: 'Messages', icon: MessageSquareIcon, count: 5 },
    { name: 'Prescriptions', icon: PillIcon },
  ];

  const handleNavClick = (e, pageName) => {
    e.preventDefault();
    setActivePage(pageName);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="sidebar-title">Patient Portal</h1>
        </div>
        
        <div className="search-container">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            placeholder="Search here..."
            className="search-input"
          />
        </div>
        
        <nav>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <a
                  href="#"
                  onClick={(e) => handleNavClick(e, item.name)}
                  className={`nav-link ${activePage === item.name ? 'active' : ''}`}
                >
                  <item.icon className="icon" />
                  <span className="nav-text">{item.name}</span>
                  {item.count && (
                    <span className="nav-count">
                      {item.count}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="help-center">
        <div className="help-icon-container">
            <HelpCircleIcon className="help-icon"/>
        </div>
        <h3>Help Center</h3>
        <p>Having trouble? Please contact us for more questions.</p>
        <button className="help-button">
          Go to Help Center
        </button>
      </div>
    </div>
  );
};

const Header = ({ onMenuClick }) => {
  return (
    <header className="header">
        <div className="header-left">
            <button onClick={onMenuClick} className="menu-button">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <div className="header-title">
                <h1>My Health Dashboard</h1>
                <p>Welcome back, John!</p>
            </div>
        </div>
      <div className="header-right">
        <button className="notification-button">
          <BellIcon className="notification-icon" />
        </button>
        <div className="divider"></div>
        <img src="https://i.pravatar.cc/150?img=10" alt="Patient Avatar" className="avatar" />
      </div>
    </header>
  );
};

const PatientInfoCard = () => {
    return (
        <div className="patient-info-card">
            <img src="https://i.pravatar.cc/150?img=10" alt="John Appleseed" className="patient-avatar"/>
            <div className="patient-details">
                <h2 className="patient-name">John Appleseed</h2>
                <div className="patient-contact-grid">
                    <div className="contact-item">
                        <span>Email address:</span>
                        <p>john.appleseed@example.com</p>
                    </div>
                    <div className="contact-item">
                        <span>Phone number:</span>
                        <p>(555) 123-4567</p>
                    </div>
                    <div className="contact-item sm-col-span-2 lg-col-span-1">
                        <span>House location:</span>
                        <p>123 Health St. Wellness City, MedState 12345</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ title, value, icon, color }) => {
    const IconComponent = icon;
    const iconColorClass = {
        blue: 'icon-blue',
        indigo: 'icon-indigo',
        red: 'icon-red'
    }[color] || '';

    return (
        <div className="stat-card">
            <div className="stat-card-header">
                <div className={`stat-icon-wrapper ${iconColorClass}`}>
                    <IconComponent className="stat-icon" />
                </div>
                <button className="more-button">
                    <MoreHorizontalIcon />
                </button>
            </div>
            <div className="stat-card-body">
                <p>{title}</p>
                <p>{value}</p>
            </div>
        </div>
    );
};

const AppointmentHistoryTable = () => {
    const getStatusBadge = (status) => {
        switch (status) {
            case 'Completed': return 'status-completed';
            default: return '';
        }
    };
    
    return (
        <div className="appointment-table-container">
            <div className="table-header">
                <h3 className="table-title">My Appointment History</h3>
                <div className="table-controls">
                    <div className="table-search">
                        <SearchIcon className="table-search-icon"/>
                        <input type="text" placeholder="Search..." className="table-search-input"/>
                    </div>
                    <button className="filter-button">
                        <SlidersHorizontalIcon />
                        <span>Filters</span>
                    </button>
                </div>
            </div>
            <div className="table-wrapper">
                <table className="appointment-table">
                    <thead>
                        <tr>
                            <th>Doctor</th>
                            <th>Date</th>
                            <th>Reason</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointmentHistoryData.map((appointment, index) => (
                            <tr key={index} className="responsive-table-row">
                                <td className="responsive-table-cell" data-label="Doctor">
                                    <div className="doctor-info">
                                        <img src={appointment.doctorImg} alt={appointment.doctor} className="doctor-avatar"/>
                                        <span className="doctor-name">{appointment.doctor}</span>
                                    </div>
                                </td>
                                <td className="responsive-table-cell" data-label="Date">{appointment.date}</td>
                                <td className="responsive-table-cell" data-label="Reason">{appointment.reason}</td>
                                <td className="responsive-table-cell" data-label="Status">
                                    <span className={`status-badge ${getStatusBadge(appointment.status)}`}>
                                        {appointment.status}
                                    </span>
                                </td>
                                <td className="responsive-table-cell" data-label="Action">
                                    <button className="more-button">
                                        <MoreHorizontalIcon/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const PatientDashboardContent = () => {
    return (
        <>
            <PatientInfoCard />
            <div className="stats-grid">
                <StatCard title="Total Completed Sessions" value="120" icon={UsersIcon} color="blue"/>
                <StatCard title="Upcoming Appointments" value="02" icon={CalendarIcon} color="indigo"/>
                <StatCard title="Total Reports Available" value="193" icon={FileTextIcon} color="red"/>
            </div>
            <AppointmentHistoryTable />
        </>
    )
};

const OverviewDashboardContent = () => {
    return (
        <div>
            <div className="stats-grid">
                <StatCard title="Heart Rate" value="72 bpm" icon={UsersIcon} color="red"/>
                <StatCard title="Blood Pressure" value="120/80" icon={CalendarIcon} color="blue"/>
                <StatCard title="Glucose Level" value="95 mg/dL" icon={FileTextIcon} color="indigo"/>
            </div>
            <div className="overview-grid">
                <div className="overview-card">
                    <h3>Upcoming Appointments</h3>
                    <ul className="appointment-list">
                        {upcomingAppointmentsData.map((appt, index) => (
                            <li key={index} className="appointment-item">
                                <div className="appointment-details">
                                    <p>{appt.date} - {appt.time}</p>
                                    <p>{appt.doctor}</p>
                                </div>
                                <p>{appt.reason}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="overview-card">
                    <h3>Recent Lab Results</h3>
                     <ul className="lab-results-list">
                        {recentLabResultsData.map((result, index) => (
                            <li key={index} className="lab-results-item">
                                <div className="lab-results-details">
                                    <p>{result.test}</p>
                                    <p>Date: {result.date}</p>
                                </div>
                                <a href="#" className="view-results-btn">{result.status}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};


// --- Main App Component ---
export default function PatientComponentPage() {
  const [activePage, setActivePage] = useState('Patients');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const pageContent = {
    'Patients': <PatientDashboardContent />,
    'Overview': <OverviewDashboardContent />,
    'Appointments': <div style={{textAlign: 'center', padding: '2.5rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)'}}><h1>Appointments Page</h1><p>Content for Appointments goes here.</p></div>,
    'Doctors': <div style={{textAlign: 'center', padding: '2.5rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)'}}><h1>Doctors Page</h1><p>Content for Doctors goes here.</p></div>,
    'Reports': <div style={{textAlign: 'center', padding: '2.5rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)'}}><h1>Reports Page</h1><p>Content for Reports goes here.</p></div>,
    'Messages': <div style={{textAlign: 'center', padding: '2.5rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)'}}><h1>Messages Page</h1><p>Content for Messages goes here.</p></div>,
    'Prescriptions': <div style={{textAlign: 'center', padding: '2.5rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)'}}><h1>Prescriptions Page</h1><p>Content for Prescriptions goes here.</p></div>
  };

  const renderContent = () => {
    return pageContent[activePage] || <div style={{textAlign: 'center', padding: '2.5rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)'}}><h1>{activePage}</h1><p>Content for {activePage} goes here.</p></div>;
  }

  return (
    <>
      <style>{allStyles}</style>
      <div className="app-container">
          <Sidebar activePage={activePage} setActivePage={setActivePage} isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          {isSidebarOpen && <div onClick={() => setIsSidebarOpen(false)} className="sidebar-overlay"></div>}
        
          <main className="main-content">
              <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
              <div className="content-wrapper">
                {renderContent()}
              </div>
          </main>
      </div>
    </>
  );
}


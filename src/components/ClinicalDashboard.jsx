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
    --tab-inactive-bg: #e5e7eb;
    --tab-inactive-text: #6b7280;
    --status-paid-bg: #dcfce7;
    --status-paid-text: #166534;
    --status-pending-bg: #fef9c3;
    --status-pending-text: #854d0e;
    --status-denied-bg: #fee2e2;
    --status-denied-text: #991b1b;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
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
    overflow-y: auto; /* Changed from hidden to auto */
  }

  .header {
    background-color: var(--card-background);
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
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

  .role-switcher {
    display: flex;
    gap: 0.5rem;
    background-color: var(--background-color);
    padding: 0.5rem;
    border-radius: 0.5rem;
  }

  .role-switcher button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.375rem;
    background-color: transparent;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
    color: var(--text-secondary);
  }
  
  .role-switcher button.active {
    background-color: var(--card-background);
    color: var(--primary-color);
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }

  .content-area {
    padding: 2rem;
    flex-grow: 1;
  }

  .grid {
    display: grid;
    gap: 1.5rem;
  }

  .grid-cols-4 {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }

  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  
  .col-span-3 {
    grid-column: span 3 / span 3;
  }

  .card {
    background-color: var(--card-background);
    padding: 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  }

  .card-title {
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .stat-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .stat-value {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--primary-color);
  }

  .stat-label {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: var(--text-secondary);
  }

  .item-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .item-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid var(--border-color);
  }

  .item-list li:last-child {
    border-bottom: none;
  }

  .item-list .item-info {
    font-weight: 500;
  }

  .item-list .item-meta {
    font-size: 0.875rem;
    color: var(--text-secondary);
  }

  .btn {
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-weight: 600;
    text-decoration: none;
    border: 1px solid transparent;
    cursor: pointer;
  }

  .btn-primary {
    background-color: var(--primary-color);
    color: white;
  }

  .btn-secondary {
    background-color: var(--secondary-color);
    color: white;
  }
  
  .tabs {
    display: flex;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 1.5rem;
    overflow-x: auto;
  }
  
  .tab {
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: -1px; /* Align with bottom border */
    white-space: nowrap;
  }
  
  .tab.active {
    color: var(--primary-color);
    border-bottom: 2px solid var(--primary-color);
  }

  .table-wrapper {
    width: 100%;
    overflow-x: auto;
  }

  .data-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1.5rem;
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
  .form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  .form-group {
    display: flex;
    flex-direction: column;
  }
  .form-group label {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  .form-group input {
    padding: 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
  }

  .status-badge {
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 0.75rem;
  }
  .status-paid { background-color: var(--status-paid-bg); color: var(--status-paid-text); }
  .status-pending { background-color: var(--status-pending-bg); color: var(--status-pending-text); }
  .status-denied { background-color: var(--status-denied-bg); color: var(--status-denied-text); }
  
  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1px;
    background-color: var(--border-color);
    border: 1px solid var(--border-color);
  }
  .calendar-day {
    background-color: var(--card-background);
    padding: 0.5rem;
  }
  .calendar-day-header {
    text-align: center;
    font-weight: 600;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border-color);
  }
  .calendar-appointments {
    min-height: 400px;
  }
  .calendar-appointment {
    background-color: #eef2ff;
    border-left: 3px solid var(--primary-color);
    padding: 0.5rem;
    border-radius: 0.25rem;
    margin-top: 0.5rem;
  }
  .calendar-appointment p { margin: 0; }
  .calendar-appointment .time { font-weight: bold; }
  .calendar-appointment .patient { font-size: 0.875rem; }

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
      z-index: 999;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  .overlay.visible {
      opacity: 1;
      visibility: visible;
  }

  @media (max-width: 768px) {
    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        z-index: 1000;
        transform: translateX(-100%);
        box-shadow: 2px 0 10px rgba(0,0,0,0.1);
    }
    .sidebar.open {
        transform: translateX(0);
    }
    .hamburger-btn {
        display: block;
    }

    /* New Mobile Header Layout */
    .header {
      flex-wrap: wrap;
      padding: 1rem;
      gap: 0.5rem 1rem;
    }
    .header-main {
       flex-grow: 1;
    }
    .role-switcher {
      width: 100%;
      order: 3;
    }

    .header h1 {
        font-size: 1.25rem;
    }
    .content-area {
        padding: 1rem;
    }

    /* New Mobile Grid Layout */
    .grid-cols-4 {
      grid-template-columns: repeat(2, 1fr);
    }
    .grid-cols-4 .col-span-2 {
      grid-column: span 2 / span 2;
    }
    .grid-cols-3, .grid-cols-2 {
      grid-template-columns: 1fr;
    }
    .col-span-3, .col-span-2 {
      grid-column: span 1 / span 1;
    }

    .form-grid {
        grid-template-columns: 1fr;
    }
    .role-switcher button {
        flex-grow: 1;
        padding: 0.5rem;
    }
    .stat-value {
        font-size: 2rem;
    }
    
    .calendar-grid {
        display: block;
    }
    .calendar-day {
        margin-bottom: 1rem;
    }
  }
`;

// --- Mock Data ---
const userManagementData = [
  { id: 1, name: 'Dr. Evelyn Reed', role: 'Doctor', email: 'e.reed@clinicplus.com', status: 'Active' },
  { id: 2, name: 'Dr. Mark Johnson', role: 'Doctor', email: 'm.johnson@clinicplus.com', status: 'Active' },
  { id: 3, name: 'Michael Scott', role: 'Office Manager', email: 'm.scott@clinicplus.com', status: 'Active' },
  { id: 4, name: 'Pam Beesly', role: 'Receptionist', email: 'p.beesly@clinicplus.com', status: 'Inactive' },
];

const claimsManagementData = [
    { id: 'C5821', patient: 'John Appleseed', insurer: 'Blue Cross', amount: 150.00, submitted: '2025-10-01', status: 'Pending' },
    { id: 'C5820', patient: 'Jane Doe', insurer: 'Aetna', amount: 225.50, submitted: '2025-09-28', status: 'Paid' },
    { id: 'C5819', patient: 'Peter Jones', insurer: 'Cigna', amount: 75.00, submitted: '2025-09-25', status: 'Paid' },
    { id: 'C5818', patient: 'Alice Williams', insurer: 'Blue Cross', amount: 310.00, submitted: '2025-09-22', status: 'Denied' },
];

const masterCalendarEventsData = {
    'Monday': [{ time: '09:00 AM', doctor: 'Dr. Reed', patient: 'A. Smith', reason: 'New Patient Visit' }, { time: '10:00 AM', doctor: 'Dr. Johnson', patient: 'B. Miller', reason: 'Follow-up' }],
    'Tuesday': [{ time: '10:00 AM', doctor: 'Dr. Reed', patient: 'John Appleseed', reason: 'Annual Checkup' }],
    'Wednesday': [],
    'Thursday': [{ time: '11:00 AM', doctor: 'Dr. Johnson', patient: 'C. Davis', reason: 'Consultation' }],
    'Friday': [{ time: '09:30 AM', doctor: 'Dr. Reed', patient: 'D. Evans', reason: 'Physical' }],
};

const doctorPatientListData = [
  { id: 101, name: 'John Appleseed', dob: '1985-05-20', lastVisit: '2025-10-01' },
  { id: 102, name: 'Jane Doe', dob: '1992-11-15', lastVisit: '2025-09-18' },
  { id: 103, name: 'Peter Jones', dob: '1978-03-10', lastVisit: '2025-08-22' },
];

const doctorMessagesData = [
    { id: 1, from: 'Pam Beesly (Reception)', subject: 'Question about Mr. Smith\'s appointment', date: '2025-10-07', read: false },
    { id: 2, from: 'Patient Portal', subject: 'Refill Request: Jane Doe', date: '2025-10-07', read: false },
    { id: 3, from: 'Dr. Mark Johnson', subject: 'Consult on patient #103', date: '2025-10-06', read: true },
];

const masterScheduleData = [
  { time: '09:00 AM', doctor: 'Dr. Reed', patient: 'A. Smith', reason: 'New Patient Visit' },
  { time: '09:30 AM', doctor: 'Dr. Johnson', patient: 'B. Miller', reason: 'Follow-up' },
  { time: '10:00 AM', doctor: 'Dr. Reed', patient: 'John Appleseed', reason: 'Annual Checkup' },
];

const reportsListData = [
    { name: 'Monthly Revenue Summary', description: 'Detailed breakdown of revenue, payments, and adjustments.'},
    { name: 'Insurance Claim Aging', description: 'List of all outstanding claims, sorted by age.'},
    { name: 'Patient Demographics', description: 'Report on patient age, location, and other demographics.'},
];

const recentRegistrationsData = [
    { name: 'Alice Williams', date: '2025-10-07' },
    { name: 'Bob Brown', date: '2025-10-07' },
    { name: 'Charlie Davis', date: '2025-10-06' },
]

// --- Icon Component ---
const MenuIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);


// --- Components for Each Role's Tabs ---
const AdminOverviewTab = () => (
    <div className="grid grid-cols-4">
        <div className="card stat-card"><div className="stat-value">23</div><div className="stat-label">New Patients (Month)</div></div>
        <div className="card stat-card"><div className="stat-value">45</div><div className="stat-label">Appointments Today</div></div>
        <div className="card stat-card"><div className="stat-value">12</div><div className="stat-label">Pending Claims</div></div>
        <div className="card stat-card"><div className="stat-value">$15.2k</div><div className="stat-label">Revenue (Week)</div></div>

        <div className="card col-span-2">
            <h3 className="card-title">Recent Patient Registrations</h3>
            <ul className="item-list">
                {recentRegistrationsData.map(patient => (
                    <li key={patient.name}>
                        <div><p className="item-info">{patient.name}</p></div>
                        <span className="item-meta">{patient.date}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="card col-span-2">
            <h3 className="card-title">Today's High-Priority Tasks</h3>
            <ul className="item-list">
                <li><div><p className="item-info">Follow up on pending claim #5821</p></div><button className="btn btn-primary">View</button></li>
                <li><div><p className="item-info">Confirm Dr. Reed's schedule for tomorrow</p></div><button className="btn btn-primary">Confirm</button></li>
                <li><div><p className="item-info">Order new supplies for Room 3</p></div><button className="btn btn-primary">Order</button></li>
            </ul>
        </div>
    </div>
);


const UserManagementTab = () => (
    <div className="card">
        <h3 className="card-title">All Users</h3>
        <div className="table-wrapper">
            <table className="data-table">
                <thead>
                    <tr><th>Name</th><th>Role</th><th>Email</th><th>Status</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    {userManagementData.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.role}</td>
                            <td>{user.email}</td>
                            <td>{user.status}</td>
                            <td><button className="btn btn-primary">Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const InsuranceClaimsTab = () => {
    const getStatusClass = (status) => {
        if (status === 'Paid') return 'status-paid';
        if (status === 'Pending') return 'status-pending';
        if (status === 'Denied') return 'status-denied';
        return '';
    };

    return (
        <div className="card">
            <h3 className="card-title">Insurance Claims Management</h3>
             <div className="table-wrapper">
                <table className="data-table">
                    <thead>
                        <tr><th>Claim ID</th><th>Patient</th><th>Insurer</th><th>Amount</th><th>Submitted</th><th>Status</th><th>Actions</th></tr>
                    </thead>
                    <tbody>
                        {claimsManagementData.map(claim => (
                            <tr key={claim.id}>
                                <td>{claim.id}</td>
                                <td>{claim.patient}</td>
                                <td>{claim.insurer}</td>
                                <td>${claim.amount.toFixed(2)}</td>
                                <td>{claim.submitted}</td>
                                <td><span className={`status-badge ${getStatusClass(claim.status)}`}>{claim.status}</span></td>
                                <td><button className="btn btn-primary">View Details</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const MasterCalendarTab = () => (
    <div className="card">
        <h3 className="card-title">Master Calendar - This Week</h3>
        <div className="calendar-grid">
            {Object.keys(masterCalendarEventsData).map(day => (
                <div key={day} className="calendar-day">
                    <div className="calendar-day-header">{day}</div>
                    <div className="calendar-appointments">
                        {masterCalendarEventsData[day].map(appt => (
                            <div key={appt.time} className="calendar-appointment">
                                <p className="time">{appt.time}</p>
                                <p className="patient">{appt.patient}</p>
                                <p className="item-meta">{appt.doctor}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const DoctorPatientsTab = () => (
    <div className="card">
        <h3 className="card-title">My Patients</h3>
        <div className="table-wrapper">
            <table className="data-table">
                <thead>
                    <tr><th>Name</th><th>Date of Birth</th><th>Last Visit</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    {doctorPatientListData.map(patient => (
                        <tr key={patient.id}>
                            <td>{patient.name}</td>
                            <td>{patient.dob}</td>
                            <td>{patient.lastVisit}</td>
                            <td><button className="btn btn-primary">Open Chart</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const DoctorMessagesTab = () => (
    <div className="card">
        <h3 className="card-title">Inbox</h3>
        <ul className="item-list">
            {doctorMessagesData.map(msg => (
                <li key={msg.id} style={{ fontWeight: msg.read ? 'normal' : 'bold' }}>
                    <div>
                        <p className="item-info">{msg.from}</p>
                        <p className="item-meta">{msg.subject}</p>
                    </div>
                    <span>{msg.date}</span>
                </li>
            ))}
        </ul>
    </div>
);

const OfficeAppointmentsTab = () => (
    <div className="card">
        <h3 className="card-title">Master Schedule - Today</h3>
        <ul className="item-list">
            {masterScheduleData.map(appt => (
                <li key={appt.time}>
                    <div>
                        <p className="item-info">{appt.time} - {appt.patient}</p>
                        <p className="item-meta">{appt.doctor} - {appt.reason}</p>
                    </div>
                    <button className="btn btn-primary">Reschedule</button>
                </li>
            ))}
        </ul>
    </div>
);

const OfficeReportsTab = () => (
    <div className="card">
        <h3 className="card-title">Available Reports</h3>
        <ul className="item-list">
            {reportsListData.map(report => (
                <li key={report.name}>
                    <div>
                        <p className="item-info">{report.name}</p>
                        <p className="item-meta">{report.description}</p>
                    </div>
                    <button className="btn btn-secondary">Generate</button>
                </li>
            ))}
        </ul>
    </div>
);

const PatientRegistrationTab = () => (
    <div className="card">
        <h3 className="card-title">New Patient Registration</h3>
        <form>
            <div className="form-grid">
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" />
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" id="dob" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" />
                </div>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary">Register Patient</button>
        </form>
    </div>
);

// --- Role Dashboards ---

const AdminDashboard = ({ activeTab, setActiveTab }) => {
  const renderTabContent = () => {
    switch(activeTab) {
      case 'Overview': return <AdminOverviewTab />;
      case 'User Management': return <UserManagementTab />;
      case 'Claims': return <InsuranceClaimsTab />;
      case 'Analytics': return <div className="card"><p>Advanced analytics charts on patient demographics, revenue, and appointments would be here.</p></div>;
      case 'Settings': return <div className="card"><p>Forms to manage clinic-wide settings, billing codes, and integrations would be here.</p></div>;
      case 'Dashboard':
      default:
        return (
          <div className="grid grid-cols-3">
            <div className="card stat-card"><div className="stat-value">4</div><div className="stat-label">Doctors</div></div>
            <div className="card stat-card"><div className="stat-value">8</div><div className="stat-label">Staff Members</div></div>
            <div className="card stat-card"><div className="stat-value">1,204</div><div className="stat-label">Total Patients</div></div>
          </div>
        )
    }
  }

  return (
    <div>
        <div className="tabs">
            {['Overview', 'Dashboard', 'User Management', 'Claims', 'Analytics', 'Settings'].map(tab => (
                 <button key={tab} className={`tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>{tab}</button>
            ))}
        </div>
        <div>{renderTabContent()}</div>
    </div>
  );
};

const DoctorDashboard = ({ activeTab, setActiveTab }) => {
  const renderTabContent = () => {
    switch(activeTab) {
      case 'Patients': return <DoctorPatientsTab />;
      case 'Messages': return <DoctorMessagesTab />;
      case "Today's Schedule":
      default:
        return (
           <div className="card">
              <h3 className="card-title">Today's Appointments</h3>
              <ul className="item-list">
                <li>
                  <div><p className="item-info">John Appleseed</p><p className="item-meta">10:00 AM - Annual Checkup</p></div>
                  <a href="#" className="btn btn-primary">Open Chart</a>
                </li>
                <li>
                  <div><p className="item-info">Jane Doe</p><p className="item-meta">10:30 AM - Follow-up</p></div>
                  <a href="#" className="btn btn-primary">Open Chart</a>
                </li>
              </ul>
           </div>
        )
    }
  }
  
  return (
    <div>
      <div className="tabs">
        {["Today's Schedule", 'Patients', 'Messages'].map(tab => (
            <button key={tab} className={`tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>{tab}</button>
        ))}
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
};

const OfficeDashboard = ({ activeTab, setActiveTab }) => {
   const renderTabContent = () => {
    switch(activeTab) {
      case 'Appointments': return <OfficeAppointmentsTab />;
      case 'Claims': return <InsuranceClaimsTab />;
      case 'Reports': return <OfficeReportsTab />;
      case 'Billing':
      default:
        return (
          <div className="grid grid-cols-2">
            <div className="card stat-card"><div className="stat-value">$12,450</div><div className="stat-label">Revenue This Week</div></div>
            <div className="card stat-card"><div className="stat-value">32</div><div className="stat-label">Pending Claims</div></div>
            <div className="card col-span-2">
              <h3 className="card-title">Billing & Invoicing</h3>
               <ul className="item-list">
                <li>
                  <div><p className="item-info">Invoice #1023 - John Appleseed</p><p className="item-meta">Amount: $150.00 - Status: Paid</p></div>
                  <a href="#" className="btn btn-primary">View</a>
                </li>
              </ul>
            </div>
          </div>
        )
    }
  }

  return (
    <div>
      <div className="tabs">
        {['Billing', 'Claims', 'Appointments', 'Reports'].map(tab => (
            <button key={tab} className={`tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>{tab}</button>
        ))}
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
};

const ReceptionDashboard = ({ activeTab, setActiveTab }) => {
    const renderTabContent = () => {
      switch(activeTab) {
        case 'Master Calendar': return <MasterCalendarTab />;
        case 'Patient Registration': return <PatientRegistrationTab />;
        case 'Patient Queue':
        default:
          return (
            <div className="card">
              <h3 className="card-title">Today's Patient Queue</h3>
              <ul className="item-list">
                <li>
                  <div><p className="item-info">John Appleseed (10:00 AM)</p><p className="item-meta">Dr. Reed - Annual Checkup</p></div>
                  <a href="#" className="btn btn-secondary">Check In</a>
                </li>
                <li>
                  <div><p className="item-info">Jane Doe (10:30 AM)</p><p className="item-meta">Dr. Reed - Follow-up</p></div>
                  <span style={{color: "var(--text-secondary)"}}>Waiting</span>
                </li>
              </ul>
            </div>
          );
      }
    };

    return (
        <div>
            <div className="tabs">
                 {['Patient Queue', 'Master Calendar', 'Patient Registration'].map(tab => (
                    <button key={tab} className={`tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>{tab}</button>
                 ))}
            </div>
            <div>{renderTabContent()}</div>
        </div>
    );
};


// --- Main App Component ---
export default function ClinicalDashboard() {
  const [role, setRole] = useState('admin'); // admin, doctor, office, reception
  const [activeView, setActiveView] = useState('Overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getSidebarLinks = () => {
    const links = {
        admin: ['Overview', 'Dashboard', 'User Management', 'Claims', 'Analytics', 'Settings'],
        doctor: ["Today's Schedule", 'Patients', 'Messages'],
        office: ['Billing', 'Claims', 'Appointments', 'Reports'],
        reception: ['Patient Queue', 'Master Calendar', 'Patient Registration'],
    };
    return links[role] || [];
  };

  React.useEffect(() => {
    const links = getSidebarLinks();
    setActiveView(links[0] || '');
  }, [role]);

  const renderDashboard = () => {
    switch (role) {
      case 'admin':
        return <AdminDashboard activeTab={activeView} setActiveTab={setActiveView} />;
      case 'doctor':
        return <DoctorDashboard activeTab={activeView} setActiveTab={setActiveView} />;
      case 'office':
        return <OfficeDashboard activeTab={activeView} setActiveTab={setActiveView} />;
      case 'reception':
        return <ReceptionDashboard activeTab={activeView} setActiveTab={setActiveView} />;
      default:
        return <div>Select a role</div>;
    }
  };

  return (
    <>
      <style>{allStyles}</style>
      <div className="dashboard-container">
        <div className={`overlay ${isSidebarOpen ? 'visible' : ''}`} onClick={() => setIsSidebarOpen(false)}></div>
        <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div>
                <h2 className="sidebar-header">ClinicPlus</h2>
                <nav className="sidebar-nav">
                    <ul>
                        {getSidebarLinks().map(link => (
                            <li key={link}>
                                <a 
                                    href="#" 
                                    className={activeView === link ? 'active' : ''}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveView(link);
                                        setIsSidebarOpen(false);
                                    }}
                                >
                                    {link}
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
                <button className="hamburger-btn" onClick={() => setIsSidebarOpen(true)}>
                    <MenuIcon />
                </button>
                <h1>{role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</h1>
            </div>
            <div className="role-switcher">
              <button onClick={() => setRole('admin')} className={role === 'admin' ? 'active' : ''}>Admin</button>
              <button onClick={() => setRole('doctor')} className={role === 'doctor' ? 'active' : ''}>Doctor</button>
              <button onClick={() => setRole('office')} className={role === 'office' ? 'active' : ''}>Office</button>
              <button onClick={() => setRole('reception')} className={role === 'reception' ? 'active' : ''}>Reception</button>
            </div>
          </header>
          <div className="content-area">
            {renderDashboard()}
          </div>
        </main>
      </div>
    </>
  );
}


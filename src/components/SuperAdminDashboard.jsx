import React from 'react';

// --- CSS Styles ---
const allStyles = `
  :root {
    --primary-color: #4f46e5;
    --primary-dark: #4338ca;
    --secondary-color: #10b981;
    --background-color: #f3f4f6;
    --card-background: #ffffff;
    --text-primary: #1f2937;
    --text-secondary: #6b7280;
    --border-color: #e5e7eb;
    --sidebar-bg: #1f2937;
    --sidebar-text: #d1d5db;
    --sidebar-active: #4f46e5;
    --status-active-bg: #dcfce7;
    --status-active-text: #166534;
    --status-inactive-bg: #fee2e2;
    --status-inactive-text: #991b1b;
    --status-paid-bg: #dcfce7;
    --status-paid-text: #166534;
    --status-pending-bg: #fef9c3;
    --status-pending-text: #854d0e;
    --status-denied-bg: #fee2e2;
    --status-denied-text: #991b1b;
    --status-overdue-bg: #fee2e2;
    --status-overdue-text: #991b1b;
    --status-onleave-bg: #fef9c3;
    --status-onleave-text: #854d0e;

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

  .admin-dashboard-container {
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
    overflow-y: auto;
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

  .grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
  .grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
  .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .lg-grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .col-span-1 { grid-column: span 1 / span 1; }
  .col-span-2 { grid-column: span 2 / span 2; }
  .col-span-4 { grid-column: span 4 / span 4; }


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

  .stat-card-lg {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .stat-value-lg {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--text-primary);
  }

  .stat-label-lg {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: var(--text-secondary);
  }
  
  .stat-change {
      display: inline-flex;
      align-items: center;
      font-weight: 600;
      font-size: 0.875rem;
      margin-top: 0.5rem;
  }
  .stat-change-positive { color: var(--secondary-color); }
  .stat-change-negative { color: #ef4444; }


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
  
  .status-badge {
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 0.75rem;
  }
  .status-active { background-color: var(--status-active-bg); color: var(--status-active-text); }
  .status-inactive { background-color: var(--status-inactive-bg); color: var(--status-inactive-text); }
  .status-paid { background-color: var(--status-paid-bg); color: var(--status-paid-text); }
  .status-pending { background-color: var(--status-pending-bg); color: var(--status-pending-text); }
  .status-denied { background-color: var(--status-denied-bg); color: var(--status-denied-text); }
  .status-overdue { background-color: var(--status-overdue-bg); color: var(--status-overdue-text); }
  .status-onleave { background-color: var(--status-onleave-bg); color: var(--status-onleave-text); }
  
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
    background-color: #e5e7eb;
    color: #374151;
  }
  
  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .form-group label {
    font-weight: 500;
  }
  .form-group input {
    padding: 0.75rem;
    border-radius: 0.375rem;
    border: 1px solid var(--border-color);
  }

  .sidebar-footer {
      text-align: center;
      font-size: 0.875rem;
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
  
  .chart-legend {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      font-size: 0.875rem;
  }
  .legend-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
  }
  .legend-color-box {
      width: 12px;
      height: 12px;
      border-radius: 2px;
  }
  .item-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .item-list li {
    display: flex;
    flex-direction: column;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border-color);
  }
  .item-list li:last-child {
    border-bottom: none;
  }
  .item-list p { margin: 0; }
  .item-list .item-info { font-weight: 500; }
  .item-list .item-meta { font-size: 0.875rem; color: var(--text-secondary); }

  @media (max-width: 1024px) {
    .lg-grid-cols-3 { grid-template-columns: repeat(1, 1fr); }
  }

  @media (max-width: 768px) {
    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        z-index: 1000;
        transform: translateX(-100%);
    }
    .sidebar.open {
        transform: translateX(0);
    }
    .hamburger-btn { display: block; }
    .header { flex-wrap: wrap; padding: 1rem; }
    .header-main { flex-grow: 1; }
    .role-switcher { width: 100%; order: 3; }
    .header h1 { font-size: 1.25rem; }
    .content-area { padding: 1rem; }
    .grid-cols-4, .grid-cols-2 { grid-template-columns: 1fr; }
    .col-span-4 { grid-column: span 1 / span 1; }
    .form-grid { grid-template-columns: 1fr; }
    .stat-value-lg { font-size: 2rem; }
  }
`;

// --- Mock Data ---
const clinicsData = [
    { id: 1, name: 'Wellness Center - Downtown', admin: 'Michael Scott', users: 15, revenue: 25200, status: 'Active' },
    { id: 2, name: 'Northside Family Health', admin: 'Dwight Schrute', users: 22, revenue: 38900, status: 'Active' },
    { id: 3, name: 'Southshore Specialty Care', admin: 'Jim Halpert', users: 8, revenue: 12500, status: 'Inactive' },
];
const adminUsersData = [
    { id: 101, name: 'Michael Scott', email: 'm.scott@clinicplus.com', role: 'Admin', clinic: 'Wellness Center - Downtown', status: 'Active'},
    { id: 102, name: 'Dwight Schrute', email: 'd.schrute@clinicplus.com', role: 'Admin', clinic: 'Northside Family Health', status: 'Active'},
    { id: 103, name: 'Jim Halpert', email: 'j.halpert@clinicplus.com', role: 'Admin', clinic: 'Southshore Specialty Care', status: 'Inactive'},
];
const billingData = [
    { clinicId: 1, clinicName: 'Wellness Center - Downtown', plan: 'Pro Tier', status: 'Paid', nextBilling: '2025-11-01', amount: 299 },
    { clinicId: 2, clinicName: 'Northside Family Health', plan: 'Pro Tier', status: 'Paid', nextBilling: '2025-11-01', amount: 299 },
    { clinicId: 3, clinicName: 'Southshore Specialty Care', plan: 'Basic Tier', status: 'Overdue', nextBilling: '2025-10-01', amount: 99 },
];
const staffData = [
    { id: 201, name: 'Dr. Evelyn Reed', role: 'Doctor', email: 'e.reed@wellness.com', status: 'Active' },
    { id: 202, name: 'Dr. Mark Johnson', role: 'Doctor', email: 'm.johnson@wellness.com', status: 'Active' },
    { id: 203, name: 'Pam Beesly', role: 'Receptionist', email: 'p.beesly@wellness.com', status: 'Active' },
    { id: 204, name: 'Kevin Malone', role: 'Billing Specialist', email: 'k.malone@wellness.com', status: 'On Leave' },
];
const singleClinicClaimsData = [
    { id: 'WC5821', patient: 'John Appleseed', insurer: 'Blue Cross', amount: 150.00, submitted: '2025-10-01', status: 'Pending' },
    { id: 'WC5820', patient: 'Jane Doe', insurer: 'Aetna', amount: 225.50, submitted: '2025-09-28', status: 'Paid' },
    { id: 'WC5819', patient: 'Peter Jones', insurer: 'Cigna', amount: 75.00, submitted: '2025-09-25', status: 'Paid' },
];
const superAdminActivityData = [
    { activity: 'New clinic "Eastside General" onboarded.', timestamp: '2 hours ago' },
    { activity: 'System update v2.5.1 deployed successfully.', timestamp: '8 hours ago' },
    { activity: 'Admin "Dwight Schrute" updated user roles.', timestamp: '1 day ago' },
];
const adminAppointmentTypesData = [
    { type: 'Annual Checkup', count: 15, color: '#4f46e5' },
    { type: 'Follow-up', count: 20, color: '#10b981' },
    { type: 'New Patient', count: 8, color: '#f59e0b' },
    { type: 'Consultation', count: 2, color: '#6b7280' },
];


// --- Icons ---
const MenuIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg> );
const ArrowUpIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m18 11-6-6-6 6"/></svg> );

// --- Helper Components ---
const DataTable = ({ headers, data, renderRow }) => (
    <div className="table-wrapper">
        <table className="data-table">
            <thead><tr>{headers.map(h => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>{data.map(item => renderRow(item))}</tbody>
        </table>
    </div>
);
const StatusBadge = ({ status }) => {
    const statusClassMap = { 'Active': 'status-active', 'Inactive': 'status-inactive', 'Paid': 'status-paid', 'Overdue': 'status-overdue', 'Pending': 'status-pending', 'Denied': 'status-denied', 'On Leave': 'status-onleave' };
    return <span className={`status-badge ${statusClassMap[status] || ''}`}>{status}</span>;
};
const PieChart = ({ data }) => {
    const total = data.reduce((sum, item) => sum + item.count, 0);
    let cumulativePercent = 0;
    const gradients = data.map(item => {
        const percent = (item.count / total) * 100;
        const start = cumulativePercent;
        cumulativePercent += percent;
        return `${item.color} ${start}% ${cumulativePercent}%`;
    });
    return (
        <div style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
            <div style={{width: 150, height: 150, borderRadius: '50%', background: `conic-gradient(${gradients.join(', ')})`}}></div>
            <ul className="chart-legend">
                {data.map(item => (
                    <li key={item.type} className="legend-item">
                        <span className="legend-color-box" style={{backgroundColor: item.color}}></span>
                        {item.type} ({Math.round((item.count/total)*100)}%)
                    </li>
                ))}
            </ul>
        </div>
    );
};

// --- Super Admin Components ---

const SuperAdminDashboardView = () => {
    const totalRevenue = clinicsData.reduce((sum, clinic) => sum + clinic.revenue, 0);
    const maxRevenue = Math.max(...clinicsData.map(c => c.revenue));
    return (
        <div className="grid grid-cols-1 lg-grid-cols-3">
            <div className="col-span-1 lg:col-span-2">
                 <div className="grid grid-cols-2">
                    <div className="card stat-card-lg col-span-2 sm:col-span-1">
                        <p className="stat-label-lg">Total Revenue (Monthly)</p>
                        <p className="stat-value-lg">${(totalRevenue / 1000).toFixed(1)}k</p>
                        <p className="stat-change stat-change-positive"><ArrowUpIcon /> 5.2% vs last month</p>
                    </div>
                    <div className="card stat-card-lg col-span-2 sm:col-span-1">
                        <p className="stat-label-lg">Active Clinics</p>
                        <p className="stat-value-lg">{clinicsData.filter(c => c.status === 'Active').length}</p>
                        <p className="stat-change stat-change-positive"><ArrowUpIcon /> 2 new this month</p>
                    </div>
                    <div className="card col-span-2">
                        <h3 className="card-title">Monthly Revenue By Clinic</h3>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '1rem'}}>
                            {clinicsData.map(clinic => (
                                <div key={clinic.id}>
                                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem'}}>
                                        <span>{clinic.name}</span>
                                        <strong>${clinic.revenue.toLocaleString()}</strong>
                                    </div>
                                    <div style={{height: '8px', backgroundColor: 'var(--background-color)', borderRadius: '4px'}}>
                                        <div style={{width: `${(clinic.revenue / maxRevenue) * 100}%`, height: '100%', backgroundColor: 'var(--primary-color)', borderRadius: '4px'}}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                 </div>
            </div>
            <div className="col-span-1">
                <div className="card">
                    <h3 className="card-title">System-Wide Activity</h3>
                    <ul className="item-list">
                        {superAdminActivityData.map(item => (
                            <li key={item.timestamp}><p className="item-info">{item.activity}</p><p className="item-meta">{item.timestamp}</p></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
const SuperAdminBilling = () => (
    <div className="card">
        <h3 className="card-title">System-Wide Billing</h3>
        <DataTable headers={['Clinic', 'Plan', 'Amount', 'Next Billing Date', 'Status', 'Actions']} data={billingData} renderRow={item => ( <tr key={item.clinicId}><td>{item.clinicName}</td><td>{item.plan}</td><td>${item.amount}</td><td>{item.nextBilling}</td><td><StatusBadge status={item.status} /></td><td><button className="btn btn-secondary">View Invoice</button></td></tr> )}/>
    </div>
);
const SuperAdminSystemSettings = () => (
    <div className="card">
        <h3 className="card-title">System Settings</h3>
        <div className="form-grid">
            <div className="form-group"><label htmlFor="appName">Application Name</label><input id="appName" type="text" defaultValue="AdminPlus" /></div>
            <div className="form-group"><label htmlFor="supportEmail">Support Email</label><input id="supportEmail" type="email" defaultValue="support@adminplus.com" /></div>
            <div className="form-group"><label htmlFor="apiKey">API Key</label><input id="apiKey" type="text" defaultValue="********" /></div>
            <div className="form-group"><label htmlFor="maintenance">Maintenance Mode</label><input id="maintenance" type="checkbox" /></div>
        </div>
    </div>
);
const AdminUserManagement = () => (
     <div className="card">
        <h3 className="card-title">Admin User Management</h3>
        <DataTable headers={['Name', 'Email', 'Role', 'Assigned Clinic', 'Status', 'Actions']} data={adminUsersData} renderRow={user => ( <tr key={user.id}><td>{user.name}</td><td>{user.email}</td><td>{user.role}</td><td>{user.clinic}</td><td><StatusBadge status={user.status} /></td><td><button className="btn btn-secondary">Edit</button></td></tr> )}/>
    </div>
);

// --- Admin (Single Clinic) Components ---
const AdminDashboard = () => {
    return (
        <div className="grid grid-cols-1 lg-grid-cols-3">
            <div className="col-span-1 lg:col-span-2">
                <div className="grid grid-cols-2">
                    <div className="card stat-card-lg col-span-2 sm:col-span-1"><p className="stat-label-lg">Revenue (Today)</p><p className="stat-value-lg">$4,250</p></div>
                    <div className="card stat-card-lg col-span-2 sm:col-span-1"><p className="stat-label-lg">Appointments Today</p><p className="stat-value-lg">45</p></div>
                    <div className="card col-span-2">
                        <h3 className="card-title">Appointment Distribution</h3>
                        <PieChart data={adminAppointmentTypesData} />
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                 <div className="grid grid-cols-1">
                    <div className="card"><h3 className="card-title">Today's Schedule</h3><p>Schedule details here...</p></div>
                    <div className="card"><h3 className="card-title">Team Overview</h3><p>Team info for the single clinic...</p></div>
                </div>
            </div>
        </div>
    );
};
const AdminStaffManagement = () => (
    <div className="card">
        <h3 className="card-title">Staff Management</h3>
        <DataTable headers={['Name', 'Email', 'Role', 'Status', 'Actions']} data={staffData} renderRow={user => ( <tr key={user.id}><td>{user.name}</td><td>{user.email}</td><td>{user.role}</td><td><StatusBadge status={user.status} /></td><td><button className="btn btn-secondary">Edit</button></td></tr> )}/>
    </div>
);
const AdminClaimsManagement = () => (
    <div className="card">
        <h3 className="card-title">Insurance Claims</h3>
        <DataTable headers={['Claim ID', 'Patient', 'Insurer', 'Amount', 'Submitted', 'Status', 'Actions']} data={singleClinicClaimsData} renderRow={claim => ( <tr key={claim.id}><td>{claim.id}</td><td>{claim.patient}</td><td>{claim.insurer}</td><td>${claim.amount.toFixed(2)}</td><td>{claim.submitted}</td><td><StatusBadge status={claim.status} /></td><td><button className="btn btn-secondary">Details</button></td></tr> )}/>
    </div>
);
const AdminAnalytics = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="card"><h3 className="card-title">Patient Volume (Last 30 Days)</h3>{/* Chart would go here */}</div>
        <div className="card"><h3 className="card-title">Appointment Types</h3>{/* Chart would go here */}</div>
    </div>
);
const AdminClinicSettings = () => (
    <div className="card">
        <h3 className="card-title">Clinic Settings</h3>
        <div className="form-grid">
            <div className="form-group"><label htmlFor="clinicName">Clinic Name</label><input id="clinicName" type="text" defaultValue="Wellness Center - Downtown" /></div>
            <div className="form-group"><label htmlFor="clinicEmail">Public Email</label><input id="clinicEmail" type="email" defaultValue="contact@wellness.com" /></div>
            <div className="form-group"><label htmlFor="clinicPhone">Phone Number</label><input id="clinicPhone" type="tel" defaultValue="(555) 123-4567" /></div>
            <div className="form-group"><label htmlFor="clinicAddress">Address</label><input id="clinicAddress" type="text" defaultValue="123 Health St, Wellness City" /></div>
        </div>
    </div>
);


// --- Main App Component ---
export default function SuperAdminDashboard() {
  const [role, setRole] = React.useState('superAdmin'); // superAdmin, admin
  const [activeView, setActiveView] = React.useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const sidebarLinks = {
    superAdmin: ['Dashboard', 'Clinic Management', 'User Management', 'Billing', 'System Settings'],
    admin: ['Dashboard', 'Staff Management', 'Claims', 'Analytics', 'Clinic Settings']
  };

  React.useEffect(() => {
    setActiveView('Dashboard');
  }, [role]);

  const renderContent = () => {
    if (role === 'superAdmin') {
        switch(activeView) {
            case 'Dashboard': return <SuperAdminDashboardView />;
            case 'Clinic Management': return <div className="card"><h3 className="card-title">Clinic Management</h3><p>Detailed clinic management interface here.</p></div>;
            case 'User Management': return <AdminUserManagement />;
            case 'Billing': return <SuperAdminBilling />;
            case 'System Settings': return <SuperAdminSystemSettings />;
            default: return <div className="card"><h3 className="card-title">{activeView}</h3></div>;
        }
    }
    if (role === 'admin') {
        switch(activeView) {
            case 'Dashboard': return <AdminDashboard />;
            case 'Staff Management': return <AdminStaffManagement />;
            case 'Claims': return <AdminClaimsManagement />;
            case 'Analytics': return <AdminAnalytics />;
            case 'Clinic Settings': return <AdminClinicSettings />;
            default: return <div className="card"><h3 className="card-title">{activeView}</h3></div>;
        }
    }
  };

  return (
    <>
      <style>{allStyles}</style>
      <div className="admin-dashboard-container">
        <div className={`overlay ${isSidebarOpen ? 'visible' : ''}`} onClick={() => setIsSidebarOpen(false)}></div>
        <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div>
                <h2 className="sidebar-header">AdminPlus</h2>
                <nav className="sidebar-nav">
                    <ul>
                        {sidebarLinks[role].map(link => (
                            <li key={link}>
                                <a href="#" className={activeView === link ? 'active' : ''}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveView(link);
                                        setIsSidebarOpen(false);
                                    }}>
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="sidebar-footer">
                <p>&copy; 2025 ClinicPlus Corp.</p>
            </div>
        </aside>
        <main className="main-content">
          <header className="header">
            <div className="header-main">
                <button className="hamburger-btn" onClick={() => setIsSidebarOpen(true)}><MenuIcon /></button>
                <h1>{role === 'superAdmin' ? 'System' : 'Clinic'} Overview</h1>
            </div>
            <div className="role-switcher">
              <button onClick={() => setRole('superAdmin')} className={role === 'superAdmin' ? 'active' : ''}>Super Admin</button>
              <button onClick={() => setRole('admin')} className={role === 'admin' ? 'active' : ''}>Admin</button>
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


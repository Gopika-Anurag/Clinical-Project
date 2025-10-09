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
    --status-open-bg: #dbeafe;
    --status-open-text: #1e40af;
    --status-overdue-bg: #fee2e2;
    --status-overdue-text: #991b1b;
    --status-published-bg: #dcfce7;
    --status-published-text: #166534;
    --status-draft-bg: #f3f4f6;
    --status-draft-text: #4b5563;

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
  .status-open { background-color: var(--status-open-bg); color: var(--status-open-text); }
  .status-overdue { background-color: var(--status-overdue-bg); color: var(--status-overdue-text); }
  .status-published { background-color: var(--status-published-bg); color: var(--status-published-text); }
  .status-draft { background-color: var(--status-draft-bg); color: var(--status-draft-text); }
  
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
  
  .item-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .item-list li {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border-color);
  }
  .item-list li:last-child {
    border-bottom: none;
  }
  .item-list p { margin: 0; }
  .item-list .item-info { font-weight: 500; flex-grow: 1; }
  .item-list .item-meta { font-size: 0.875rem; color: var(--text-secondary); }
  
  .activity-icon {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
  }

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
const supportTicketsData = [
    { id: 'TKT-001', subject: 'Login Issue for Northside', clinic: 'Northside Family Health', status: 'Open', lastUpdate: '2 hours ago'},
    { id: 'TKT-002', subject: 'Billing question', clinic: 'Wellness Center', status: 'Pending', lastUpdate: '1 day ago'},
    { id: 'TKT-003', subject: 'Feature Request: Custom Reports', clinic: 'Southshore Specialty', status: 'Open', lastUpdate: '3 days ago'},
];
const contentPagesData = [
    { id: 1, title: 'Homepage', path: '/', status: 'Published', lastModified: '2025-10-01' },
    { id: 2, title: 'About Us', path: '/about', status: 'Published', lastModified: '2025-09-15' },
    { id: 3, title: 'Pricing', path: '/pricing', status: 'Draft', lastModified: '2025-10-05' },
];
const superAdminActivityData = [
    { type: 'new_clinic', activity: 'New clinic "Eastside General" was onboarded.', timestamp: '2 hours ago' },
    { type: 'update', activity: 'System update v2.5.1 deployed successfully.', timestamp: '8 hours ago' },
    { type: 'user', activity: 'Admin "Dwight Schrute" updated user roles.', timestamp: '1 day ago' },
];
const adminTicketStatusData = [
    { status: 'Open', count: 2, color: '#3b82f6' },
    { status: 'Pending', count: 1, color: '#f59e0b' },
    { status: 'Closed', count: 12, color: '#10b981' },
];

// --- Icons ---
const MenuIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg> );
const ArrowUpIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m18 11-6-6-6 6"/></svg> );
const DollarSignIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> );
const BuildingIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="7" y1="7" x2="7.01" y2="7"></line><line x1="11" y1="7" x2="11.01" y2="7"></line><line x1="15" y1="7" x2="15.01" y2="7"></line><line x1="7" y1="11" x2="7.01" y2="11"></line><line x1="11" y1="11" x2="11.01" y2="11"></line><line x1="15" y1="11" x2="15.01" y2="11"></line><line x1="7" y1="15" x2="7.01" y2="15"></line><line x1="11" y1="15" x2="11.01" y2="15"></line><line x1="15" y1="15" x2="15.01" y2="15"></line></svg> );
const TicketIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 18v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2M8 12h8m-8 4h4m-7-8h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg> );
const UsersIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> );
const PlusCircleIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>;
const SettingsIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>;


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
    const statusClassMap = { 'Active': 'status-active', 'Inactive': 'status-inactive', 'Paid': 'status-paid', 'Overdue': 'status-overdue', 'Pending': 'status-pending', 'Open': 'status-open', 'Published': 'status-published', 'Draft': 'status-draft' };
    return <span className={`status-badge ${statusClassMap[status] || ''}`}>{status}</span>;
};
const BarChart = ({ data }) => {
    const maxValue = Math.max(...data.map(d => d.count));
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', height: '200px', padding: '1rem 0' }}>
            {data.map(item => (
                <div key={item.status} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                    <div style={{ width: '40px', backgroundColor: item.color, height: `${(item.count / maxValue) * 100}%`, borderRadius: '4px 4px 0 0' }}></div>
                    <p style={{ marginTop: '0.5rem', fontWeight: '500', color: 'var(--text-secondary)' }}>{item.status}</p>
                </div>
            ))}
        </div>
    );
};
const StatCard = ({ icon, label, value, change }) => (
    <div className="card">
        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <div style={{padding: '0.75rem', backgroundColor: 'var(--primary-color)', color: 'white', borderRadius: '50%'}}>
                {icon}
            </div>
            <div>
                <p style={{margin: 0, color: 'var(--text-secondary)', fontWeight: 500}}>{label}</p>
                <p style={{margin: '0.25rem 0 0 0', fontSize: '1.75rem', fontWeight: 'bold'}}>{value}</p>
                {change && <p className={`stat-change ${change.type === 'positive' ? 'stat-change-positive' : 'stat-change-negative'}`}><ArrowUpIcon style={{transform: change.type === 'negative' ? 'rotate(180deg)' : 'none'}}/> {change.value}</p>}
            </div>
        </div>
    </div>
);


// --- Super Admin Components ---
const SuperAdminDashboardView = () => {
    const totalRevenue = clinicsData.reduce((sum, clinic) => sum + clinic.revenue, 0);
    const activityIconMap = {
        new_clinic: { icon: <PlusCircleIcon/>, color: '#3b82f6' },
        update: { icon: <SettingsIcon/>, color: '#10b981' },
        user: { icon: <UsersIcon/>, color: '#f59e0b' },
    };
    return (
        <div className="grid grid-cols-1 lg-grid-cols-3">
             <div className="grid col-span-1 lg:col-span-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard icon={<DollarSignIcon/>} label="Monthly Recurring Revenue" value={`$${(totalRevenue / 1000).toFixed(1)}k`} change={{type: 'positive', value: '5.2%'}} />
                <StatCard icon={<BuildingIcon/>} label="Active Subscriptions" value={clinicsData.filter(c => c.status === 'Active').length} change={{type: 'positive', value: '+2'}} />
                <StatCard icon={<TicketIcon/>} label="Open Support Tickets" value={supportTicketsData.filter(t => t.status === 'Open').length} />
                <StatCard icon={<UsersIcon/>} label="Platform Admins" value={adminUsersData.length} />
            </div>
            <div className="card col-span-1 lg:col-span-2">
                <h3 className="card-title">System Health</h3>
                 <ul className="item-list">
                    <li>
                        <div className="activity-icon" style={{backgroundColor: 'var(--secondary-color)'}}>✓</div>
                        <div className="item-info"><p>API Status</p></div>
                        <p className="item-meta" style={{color: 'var(--secondary-color)'}}>Operational</p>
                    </li>
                    <li>
                        <div className="activity-icon" style={{backgroundColor: 'var(--secondary-color)'}}>✓</div>
                        <div className="item-info"><p>Database</p></div>
                        <p className="item-meta" style={{color: 'var(--secondary-color)'}}>Operational</p>
                    </li>
                 </ul>
            </div>
             <div className="card col-span-1">
                <h3 className="card-title">Recent Platform Activity</h3>
                <ul className="item-list">
                    {superAdminActivityData.map(item => (
                        <li key={item.timestamp}>
                            <div className="activity-icon" style={{backgroundColor: activityIconMap[item.type].color}}>
                                {activityIconMap[item.type].icon}
                            </div>
                            <div>
                                <p className="item-info" style={{fontSize: '0.875rem'}}>{item.activity}</p>
                                <p className="item-meta">{item.timestamp}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
const ClinicManagementView = () => (
     <div className="card">
        <h3 className="card-title">Clinic Management</h3>
        <DataTable 
            headers={['Clinic Name', 'Admin', 'Users', 'Status', 'Actions']}
            data={clinicsData}
            renderRow={clinic => (
                <tr key={clinic.id}>
                    <td>{clinic.name}</td><td>{clinic.admin}</td><td>{clinic.users}</td>
                    <td><StatusBadge status={clinic.status} /></td>
                    <td><button className="btn btn-secondary">Manage</button></td>
                </tr>
            )}
        />
    </div>
);
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
        <h3 className="card-title">Platform Admin Management</h3>
        <DataTable headers={['Name', 'Email', 'Role', 'Assigned Clinic', 'Status', 'Actions']} data={adminUsersData} renderRow={user => ( <tr key={user.id}><td>{user.name}</td><td>{user.email}</td><td>{user.role}</td><td>{user.clinic}</td><td><StatusBadge status={user.status} /></td><td><button className="btn btn-secondary">Edit</button></td></tr> )}/>
    </div>
);

// --- Admin (Platform Manager) Components ---
const AdminDashboard = () => {
    return (
        <div className="grid grid-cols-1 lg-grid-cols-3">
             <div className="grid col-span-1 lg:col-span-3 grid-cols-1 sm:grid-cols-3">
                <StatCard icon={<BuildingIcon/>} label="Assigned Clinics" value="5" />
                <StatCard icon={<TicketIcon/>} label="Open Support Tickets" value="2" />
                <StatCard icon={<UsersIcon/>} label="Pending Content" value="1" />
             </div>
             <div className="card col-span-1 lg:col-span-2">
                <h3 className="card-title">Support Tickets by Status</h3>
                <BarChart data={adminTicketStatusData} />
             </div>
             <div className="card col-span-1">
                <h3 className="card-title">Recent Content Updates</h3>
                <ul className="item-list">
                    {contentPagesData.map(page => (
                        <li key={page.id}><p className="item-info">{page.title}</p><p className="item-meta">Modified: {page.lastModified}</p></li>
                    ))}
                </ul>
             </div>
        </div>
    );
};
const AssignedClinicsView = () => (
    <div className="card">
        <h3 className="card-title">My Assigned Clinics</h3>
        <DataTable headers={['Clinic Name', 'Admin', 'Users', 'Status']} data={clinicsData.slice(0, 2)} renderRow={clinic => (
            <tr key={clinic.id}><td>{clinic.name}</td><td>{clinic.admin}</td><td>{clinic.users}</td><td><StatusBadge status={clinic.status} /></td></tr>
        )}/>
    </div>
);
const SupportTicketsView = () => (
    <div className="card">
        <h3 className="card-title">Support Tickets</h3>
        <DataTable headers={['Ticket ID', 'Subject', 'Clinic', 'Status', 'Last Update', 'Actions']} data={supportTicketsData} renderRow={ticket => (
            <tr key={ticket.id}><td>{ticket.id}</td><td>{ticket.subject}</td><td>{ticket.clinic}</td><td><StatusBadge status={ticket.status} /></td><td>{ticket.lastUpdate}</td><td><button className="btn btn-secondary">View</button></td></tr>
        )}/>
    </div>
);
const ContentManagementView = () => (
    <div className="card">
        <h3 className="card-title">Content Management</h3>
        <DataTable headers={['Page Title', 'Path', 'Status', 'Last Modified', 'Actions']} data={contentPagesData} renderRow={page => (
            <tr key={page.id}><td>{page.title}</td><td>{page.path}</td><td><StatusBadge status={page.status} /></td><td>{page.lastModified}</td><td><button className="btn btn-secondary">Edit</button></td></tr>
        )}/>
    </div>
);


// --- Main App Component ---
export default function SuperAdminDashboard() {
  const [role, setRole] = React.useState('superAdmin'); // superAdmin, admin
  const [activeView, setActiveView] = React.useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const sidebarLinks = {
    superAdmin: [ 'Dashboard', 'Clinic Management', 'User Management', 'Billing', 'System Settings', 'Support Tickets', 'Content Management' ],
    admin: ['Dashboard', 'Assigned Clinics', 'Support Tickets', 'Content Management']
  };

  React.useEffect(() => {
    setActiveView('Dashboard');
  }, [role]);

  const renderContent = () => {
    switch(role) {
        case 'superAdmin':
            switch(activeView) {
                case 'Dashboard': return <SuperAdminDashboardView />;
                case 'Clinic Management': return <ClinicManagementView />;
                case 'User Management': return <AdminUserManagement />;
                case 'Billing': return <SuperAdminBilling />;
                case 'System Settings': return <SuperAdminSystemSettings />;
                case 'Support Tickets': return <SupportTicketsView />;
                case 'Content Management': return <ContentManagementView />;
                default: return <div className="card"><h3 className="card-title">{activeView}</h3></div>;
            }
        case 'admin':
            switch(activeView) {
                case 'Dashboard': return <AdminDashboard />;
                case 'Assigned Clinics': return <AssignedClinicsView />;
                case 'Support Tickets': return <SupportTicketsView />;
                case 'Content Management': return <ContentManagementView />;
                default: return <div className="card"><h3 className="card-title">{activeView}</h3></div>;
            }
        default: return null;
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
                <h1>{role === 'superAdmin' ? 'Super Admin' : 'Admin'} Dashboard</h1>
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


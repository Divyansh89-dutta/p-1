import { useState } from 'react';
import { BsBell } from 'react-icons/bs';
import './AdminAccess.css';

function AdminAccess() {
  const [users, setUsers] = useState([
    { name: 'Mohamed Mafaz P R', role: 'Administrator' },
    { name: 'Abdul Kader Jailani P R', role: 'Author' },
    { name: 'Ashok Babu Laguduva', role: 'Property Manager' },
    { name: 'Roland Adegboye', role: 'Tele-Callers' },
    { name: 'Mohamed Mafaz P R', role: 'Administrator' },
  ]);
  
  const [editingUser, setEditingUser] = useState<string | null>(null);
  const [newRole, setNewRole] = useState<string>('Administrator');

  // Handle showing the popup to edit user role
  const handleEditAccess = (name: string) => {
    setEditingUser(name);
  };

  // Handle saving the new role
  const handleSaveRole = () => {
    setUsers(users.map(user =>
      user.name === editingUser ? { ...user, role: newRole } : user
    ));
    setEditingUser(null); // Close popup after saving
  };

  // Handle remove user
  const handleRemove = (name: string) => {
    setUsers(users.filter(user => user.name !== name));
  };

  return (
    <div className="adminaccess">
      <div className="adminpropheader">
        <div className="headertitle">
          <h1>Admin Access</h1>
          <button className="add-new-btn"><a href='AddAdmin.html'>+ Add New</a></button>
        </div>
        <div>
          <BsBell />
          <img src="./src/assets/User 1.jpeg" alt="Profile" />
        </div>
      </div>

      <div className="admin-list">
        {users.map((user, index) => (
          <div key={index} className="user-card">
            <div className="user-info">
              <h3>{user.name}</h3>
              <div className="user-actions">
                <span onClick={() => handleEditAccess(user.name)}>Edit Access</span> |
                <span onClick={() => handleRemove(user.name)}>Remove</span>
              </div>
            </div>
            <div className={`role-badge ${user.role.replace(/\s/g, '-').toLowerCase()}`}>
              {user.role}
            </div>
          </div>
        ))}
      </div>

      {/* Popup for Editing Role */}
      {editingUser && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Edit Role for {editingUser}</h3>
            <select
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              className="role-select"
            >
              <option value="Administrator">Administrator</option>
              <option value="Author">Author</option>
              <option value="Property Manager">Property Manager</option>
              <option value="Tele-Callers">Tele-Callers</option>
            </select>
            <div className="popup-actions">
              <button className="save-btn" onClick={handleSaveRole}>Save</button>
              <button className="cancel-btn" onClick={() => setEditingUser(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminAccess;

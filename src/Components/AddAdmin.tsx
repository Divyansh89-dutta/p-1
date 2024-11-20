import { BsBell } from "react-icons/bs";
import "./AddAdmin.css";

function AddAdmin() {
  return (
    <div className="addadmin">
      <div className="adminpropheader">
        <div className="headertitle">
          <h1>Admin Access</h1>
          <button className="add-new-btn">+ Add New</button>
        </div>
        <div>
          <BsBell />
          <img src="./src/assets/User 1.jpeg" alt="Profile" />
        </div>
      </div>
      <form>
        <input placeholder="Name" type="text"/>
        <input placeholder="Email" type="email"/>
        <input placeholder="Username" />
        <input placeholder="Password" type="password"/>
        <select>
            <option>Admin</option>
            <option>Author</option>
            <option>Property Manager</option>
            <option>Tele-Caller</option>
        </select>
        <label>Upload Profile Picture</label>
        <input type="file"/>
        <button>Create User & Send Access</button>
      </form>
    </div>
  );
}

export default AddAdmin;

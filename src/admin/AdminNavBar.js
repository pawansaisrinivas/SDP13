// import React from 'react'
// import { Route, Routes, Link } from 'react-router-dom'
// import './admin.css'
// import AdminHome from './AdminHome';
// import ViewUsers from './ViewUsers'; // Import your ViewUsers, AddUsers, and DeleteUsers components
// import AddUsers from './AddUsers';
// import DeleteUsers from './DeleteUsers';

// export default function AdminNavBar() 
// {
//   return (
//     <div>

//     <nav>
//      <ul>
//      <Link to="/">Home</Link>
//      <Link to="/viewusers">View Users</Link>
//      <Link to="/addusers">Add Users</Link>
//      <Link to="/deleteusers">Delete Users</Link>
//      </ul>
//      </nav>

//          <Routes>
//          <Route path="/" Component={AdminHome} exact/>
//          <Route path="/viewusers" Component={ViewUsers} exact/>
//          <Route path="/addusers" Component={AddUsers} exact/>
//          <Route path="/deleteusers" Component={DeleteUsers} exact/>
//         </Routes>

//     </div>
//   )
// }

// import React from 'react';
// import { Route, Routes, Link } from 'react-router-dom';
// import './admin.css';
// import AdminHome from './AdminHome';
// import ViewUsers from './ViewUsers'; // Import your ViewUsers, AddUsers, and DeleteUsers components
// import AddUsers from './AddUsers';
// import DeleteUsers from './DeleteUsers';

// export default function AdminNavBar() {
//   return (
//     <div>
//       <nav className="navbar">
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/viewusers">View Users</Link></li>
//           <li><Link to="/addusers">Add Users</Link></li>
//           <li><Link to="/deleteusers">Delete Users</Link></li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<AdminHome />} exact />
//         <Route path="/viewusers" element={<ViewUsers />} exact />
//         <Route path="/addusers" element={<AddUsers />} exact />
//         <Route path="/deleteusers" element={<DeleteUsers />} exact />
//       </Routes>
//     </div>
//   );
// }

import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { FaHome, FaUser, FaUserPlus, FaUserMinus, FaSignInAlt } from 'react-icons/fa'; // Import Font Awesome icons
import './admin.css';
import AdminHome from './AdminHome';
import ViewUsers from './ViewUsers';
import AddUsers from './AddUsers';
import DeleteUsers from './DeleteUsers';
import AdminLogin from './AdminLogin';

export default function AdminNavBar() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><Link to="/"><FaHome /> Home</Link></li>
          <li><Link to="/adminlogin"><FaSignInAlt /> Login</Link></li>
          <li><Link to="/viewusers"><FaUser /> View Users</Link></li>
          <li><Link to="/addusers"><FaUserPlus /> Add Users</Link></li>
          <li><Link to="/deleteusers"><FaUserMinus /> Delete Users</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<AdminHome />} exact />
        <Route path="/adminlogin" element={<AdminLogin />} exact />
        <Route path="/viewusers" element={<ViewUsers />} exact />
        <Route path="/addusers" element={<AddUsers />} exact />
        <Route path="/deleteusers" element={<DeleteUsers />} exact />
      </Routes>
    </div>
  );
}

// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import SignUp from '../user/SignUp';
// import SignIn from '../user/SignIn';
// import AdminLogin from '../admin/AdminLogin';
// import ContactForm from '../user/ContactForm';
// import Home from './Home';
// import About from './About';
// import './style.css'
// export default function MainNavBar() {
//     return (
//         <div>
//           <nav className="navbar">
//           <ul>
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/about">About</Link></li>
//               <li><Link to="/signup">User SignUp</Link></li>
//               <li className="dropdown">
//                 <Link>Login</Link>
//                 <div className="dropdown-content">
//                   <Link to="/userlogin">User Login</Link>
//                   <Link to="/adminlogin">Admin Login</Link>
//                 </div>
//               </li>
//               <li><Link to="/contact">Contact</Link></li>
//             </ul>
//           </nav>
    
//           <Routes>
//             <Route path="/" element={<Home/>} exact />
//             <Route path="/about" element={<About/>} exact />
//             <Route path="/signup" element={<SignUp/>} exact />
//             <Route path="/userlogin" element={<SignIn/>} exact />
//             <Route path="/adminlogin" element={<AdminLogin/>} exact />
//             <Route path="/contact" element={<ContactForm/>} exact/>
//           </Routes>
//         </div>
//       );
// }

// import React, { useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import SignUp from '../user/SignUp';
// import SignIn from '../user/SignIn';
// import AdminLogin from '../admin/AdminLogin';
// import ContactForm from '../user/ContactForm';
// import Home from './Home';
// import About from './About';
// import './style.css';

// export default function MainNavBar() {
//   // State to manage dropdown visibility
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // Function to toggle dropdown visibility
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div>
//       <nav className="navbar">
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/signup">User SignUp</Link></li>
//           <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
//             <Link to="#">Login</Link>
//             <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
//               <Link to="/userlogin">User Login</Link>
//               <Link to="/adminlogin">Admin Login</Link>
//             </div>
//           </li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} exact />
//         <Route path="/about" element={<About />} exact />
//         <Route path="/signup" element={<SignUp />} exact />
//         <Route path="/userlogin" element={<SignIn />} exact />
//         <Route path="/adminlogin" element={<AdminLogin />} exact />
//         <Route path="/contact" element={<ContactForm />} exact />
//       </Routes>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SignUpIcon from '@mui/icons-material/PersonAdd';
import SignInIcon from '@mui/icons-material/ExitToApp';
import AdminLoginIcon from '@mui/icons-material/SupervisorAccount';
import ContactFormIcon from '@mui/icons-material/ContactMail';
import HomeIcon from '@mui/icons-material/Home';
import AboutIcon from '@mui/icons-material/Info';
import SignUp from '../user/SignUp';
import SignIn from '../user/SignIn';
import AdminLogin from '../admin/AdminLogin';
import ContactForm from '../user/ContactForm';
import Home from './Home';
import About from './About';
import './style.css';

export default function MainNavBar() {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><Link to="/"><HomeIcon /> Home</Link></li>
          <li><Link to="/about"><AboutIcon /> About</Link></li>
          <li><Link to="/signup"><SignUpIcon /> User SignUp</Link></li>
          <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <Link to="#"><SignInIcon /> Login</Link>
            <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
              <Link to="/userlogin"><SignInIcon /> User Login</Link>
              <Link to="/adminlogin"><AdminLoginIcon /> Admin Login</Link>
            </div>
          </li>
          <li><Link to="/contact"><ContactFormIcon /> Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/signup" element={<SignUp/>} exact />
        <Route path="/userlogin" element={<SignIn />} exact />
        <Route path="/adminlogin" element={<AdminLogin />} exact />
        <Route path="/contact" element={<ContactForm />} exact />
      </Routes>
    </div>
  );
}



// import React from 'react';
// import { Link, Route, Routes } from 'react-router-dom';

// import Home from './Home';
// import SignUp from './SignUp';
// import Forecast from './Forecast';
// import SignIn from './SignIn';
// import ContactForm from './ContactForm';
// // import AdminLogin from '../admin/AdminLogin';
// import './navbar.css';
// import Search from './Search';

// export default function UserNavBar() {
//   return (
//     <div>
//       <ul className='navbar'>
//         <li><Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;</li>
//         <li><Link to="/signin">SignIn</Link>&nbsp;&nbsp;&nbsp;</li>
//         <li><Link to="/signup">SignUp</Link>&nbsp;&nbsp;&nbsp;</li>
//         <li><Link to="/search">Search</Link>&nbsp;&nbsp;&nbsp;</li>
//         <li><Link to="/forecast">Forecast</Link>&nbsp;&nbsp;&nbsp;</li>
//         {/* <li><Link to="/adminlogin">Admin Login</Link>&nbsp;&nbsp;&nbsp;</li> */}
//         <li><Link to="/contactform">Contact</Link>&nbsp;&nbsp;&nbsp;</li>
//       </ul>

//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/home' element={<Home />} />
//         <Route path='/signin' element={<SignIn />} />
//         <Route path='/signup' element={<SignUp />} />
//         <Route path='/search' element={<Search />} />
//         <Route path='/forecast' element={<Forecast />} />
//         {/* <Route path="/adminlogin" element={<AdminLogin />} /> */}
//         <Route path='/contactform' element={<ContactForm />} />
//       </Routes>
//     </div>
//   );
// }


import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Home as HomeIcon, ExitToApp as SignInIcon, PersonAdd as SignUpIcon, Search as SearchIcon, Cloud as ForecastIcon, ContactMail as ContactFormIcon } from '@mui/icons-material';
import Home from './Home';
import SignUp from './SignUp';
import Forecast from './Forecast';
import SignIn from './SignIn';
import ContactForm from './ContactForm';
import Search from './Search';
import './navbar.css';

export default function UserNavBar() {
  return (
    <div>
      <ul className='navbar'>
        <li><Link to="/"><HomeIcon /> Home</Link>&nbsp;&nbsp;&nbsp;</li>
        <li><Link to="/signin"><SignInIcon /> SignIn</Link>&nbsp;&nbsp;&nbsp;</li>
        <li><Link to="/signup"><SignUpIcon /> SignUp</Link>&nbsp;&nbsp;&nbsp;</li>
        <li><Link to="/search"><SearchIcon /> Search</Link>&nbsp;&nbsp;&nbsp;</li>
        <li><Link to="/forecast"><ForecastIcon /> Forecast</Link>&nbsp;&nbsp;&nbsp;</li>
        {/* <li><Link to="/adminlogin">Admin Login</Link>&nbsp;&nbsp;&nbsp;</li> */}
        <li><Link to="/contactform"><ContactFormIcon /> Contact</Link>&nbsp;&nbsp;&nbsp;</li>
      </ul>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/search' element={<Search />} />
        <Route path='/forecast' element={<Forecast />} />
        {/* <Route path="/adminlogin" element={<AdminLogin />} /> */}
        <Route path='/contactform' element={<ContactForm />} />
      </Routes>
    </div>
  );
}


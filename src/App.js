// App.js

import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AdminNavBar from './admin/AdminNavBar';
import UserNavBar from './user/UserNavBar';
import MainNavBar from './main/MainNavBar';



const App = () => {
  return (
    <div>
      <Router>
        <UserNavBar/>
      {/* < AdminNavBar/> */}
        {/* <MainNavBar/> */}
      </Router>  
      
    </div>
  );
}

export default App;

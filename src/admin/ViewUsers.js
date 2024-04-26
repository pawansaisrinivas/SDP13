// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './admin.css'

// export default function ViewUsers() {
//   const [users, setUsers] = useState([]);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:2014/viewusers');
//       setUsers(response.data);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1><u>Users</u></h1>
      
//       <table  border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(users) && users.length > 0 ? (
//             users.map((user, index) => (
//               <tr key={index}>
//                 <td>{user.firstName}</td>
//                 <td>{user.lastName}</td>
//                 <td>{user.email}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3">Data Not Found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function ViewUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:2014/viewusers');
      setUsers(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1><u>Users</u></h1>
      
      <TableContainer component={Paper} style={{ maxWidth: 600, margin: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} style={{ textAlign: 'center' }}>Data Not Found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

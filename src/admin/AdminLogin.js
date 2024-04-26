// import React, { useState } from 'react';
// import './admin.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// export default function AdminLogin() 
// {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });
//   const [message,setMessage] = useState("")
//   const [error,setError] = useState("")

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try 
//     {
//       const response = await axios.post('http://localhost:2014/checkadminlogin', formData);
//       if (response.data!=null) 
//       {
//         navigate("/adminhome")
//       } 
//       else 
//       {
//         setMessage("Login Failed")
//         setError("")
//       }
//     } 
//     catch (error) 
//     {
//       setMessage("")
//       setError(error.message)
//     }
//   };

//   return (
//     <div>
//       <h3 align="center"><u>Admin Login</u></h3>
//       {
//         message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
//       }
//       <form onSubmit={handleSubmit} className="admin-form-container">
//   <div>
//     <label htmlFor="username" className="admin-label">Username</label>
//     <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="admin-form-input" required />
//   </div>
//   <div>
//     <label htmlFor="password" className="admin-label">Password</label>
//     <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="admin-form-input" required />
//   </div>
//   <button type="submit" className="admin-submit-button">Login</button>
// </form>

//     </div>
//   );
// }
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Box, Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false); // State for error snackbar
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2014/checkadminlogin', formData);
      if (response.data != null) {
        navigate('/adminhome');
      } else {
        setMessage('Login Failed');
        setError('');
        setOpenErrorSnackbar(true); // Open error snackbar
      }
    } catch (error) {
      setMessage('');
      setError(error.message);
      setOpenErrorSnackbar(true); // Open error snackbar
    }
  };

  const handleCloseErrorSnackbar = () => {
    setOpenErrorSnackbar(false); // Close error snackbar
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100vh' }}>
      <Typography variant="h3" align="center" mb={2} color={'black'} paddingTop={'30px'}>
        <u>Admin Login</u>
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: 300, mt: 2 }}>
        <TextField
          fullWidth
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          margin="normal"
          required
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
          required
          variant="outlined"
        />
        <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
      </Box>
      {/* Error Snackbar */}
      <Snackbar open={openErrorSnackbar} autoHideDuration={6000} onClose={handleCloseErrorSnackbar}>
        <Alert onClose={handleCloseErrorSnackbar} severity="error" sx={{ width: '100%' }}>
          {error || 'Login failed. Please try again.'}
        </Alert>
      </Snackbar>
    </Box>
  );
}


import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container } from '@mui/material'; // Import Material-UI components
import './admin.css'; // Import CSS file for additional styling

export default function AddUsers() {
  // formData state variable
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  // message state variable
  const [message, setMessage] = useState('');
  // error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2014/addusers', formData);
      if (response.status === 200) {
        setFormData({
          firstName: '',
          lastName: '',
          email: ''
        });
        setMessage('User added successfully.');
        setError('');
      }
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };

  return (
    <Container maxWidth="sm" style={{ minHeight: '330px', width: '80%', margin: '50px auto' }} className="add-users-container">
      <Typography variant="h5" className="add-users-title" align="center"><u>Add Users</u></Typography>
      {
        message ? <Typography variant="subtitle1" className="success-message" align="center">{message}</Typography> : null
      }
      {
        error ? <Typography variant="subtitle1" className="error-message" align="center">{error}</Typography> : null
      }

      <form onSubmit={handleSubmit} className="add-users-form">
        <TextField id="firstName" label="First Name" variant="outlined" value={formData.firstName} onChange={handleChange} className="input" required fullWidth margin="normal" />
        <TextField id="lastName" label="Last Name" variant="outlined" value={formData.lastName} onChange={handleChange} className="input" required fullWidth margin="normal" />
        <TextField id="email" label="Email" type="email" variant="outlined" value={formData.email} onChange={handleChange} className="input" required fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary" className="submit-button" fullWidth>Add</Button>
      </form>
    </Container>
  );
}


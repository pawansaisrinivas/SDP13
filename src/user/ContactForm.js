// import { useState } from "react";
// import { TextField, Button, Typography, Box } from "@mui/material";

// export default function ContactForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     //
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100vh",
//       }}
//     >
//       <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
//         <Typography variant="h4" align="center" mb={2} color={"black"}>
//           Contact Us
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             margin="normal"
//             required
//           />
//           <TextField
//             fullWidth
//             label="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             margin="normal"
//             required
//             type="email"
//           />
//           <TextField
//             fullWidth
//             label="Message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             margin="normal"
//             required
//             multiline
//             rows={4}
//           />
//           <Button variant="contained" type="submit" sx={{ mt: 2 }}>
//             Submit
//           </Button>
//         </form>
//       </Box>
//     </Box>
//   );
// }

import { useState } from "react";
import { TextField, Button, Typography, Box, Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";

const FormContainer = styled(Box)({
  maxWidth: 500,
  margin: "auto",
  padding: 10,
  borderRadius: 8,
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  transition: "box-shadow 0.3s ease",
  "&:hover": {
    boxShadow: "0 6px 30px rgba(0, 0, 0, 0.2)",
  },
  marginTop: 100,
});

const SubmitButton = styled(Button)({
  margin: "auto",
  display: "block",
  "&:hover": {
    backgroundColor: "#1976d2",
  },
});

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:2014/addcontact", {
        name: name,
        email: email,
        message: message,
      });
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const handleCloseSnackbar = () => {
    setSubmitted(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <FormContainer>
        <Typography variant="h4" align="center" mb={1} color="primary" paddingTop={0}>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
            variant="outlined"
          />
          <SubmitButton variant="contained" type="submit" color="primary">
            Submit
          </SubmitButton>
        </form>
      </FormContainer>
      <Snackbar
        open={submitted}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
          Your message has been submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}

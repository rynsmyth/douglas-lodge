import PropTypes from 'prop-types';
import { useState } from "react";
import {
Box,
Typography,
Button,
Modal,
TextField,
Card,
CardContent,
Checkbox,
FormControlLabel
} from "@mui/material";

export const ContactModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    ofAge: false,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailBody = `
      Name: ${formData.name}
      Phone: ${formData.phone}
      Email: ${formData.email}
      Over 18: ${formData.ofAge ? "Yes" : "No"}
      Message: ${formData.message}
    `;
    const recipientEmail = "secretary.dl153@gmail.com";

    const emailSubject = "Learn More About Douglas Lodge";

    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    handleClose();
  };

  const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  width: 600, // Increase the width to fit the PDF preview
  maxHeight: "80vh", // Restrict height to 80% of the viewport
  overflowY: "auto", // Enable vertical scrolling if content exceeds maxHeight
};


  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ ...modalStyle, width: 400 }}>
        <Card sx={{ minWidth: 200 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Hello friend,
              </Typography>
              <Typography variant="body1">
                We are glad you visited. Freemasonry is the oldest and largest men’s fraternity in the world. We have one simple mission; to make Good men Better. If you are at least 18 years old, have a belief in God, live locally, and can pass a criminal background check then we would love an opportunity to speak further with you.
              </Typography>
            </CardContent>
          </Card>
          <br/>
      <Card sx={{ minWidth: 200 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                When We Meet
              </Typography>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                Stated Meetings
              </Typography>
              <Typography variant="body1">
                1st & 3rd Thu Jan-May @ 7:30 PM
                <br />
                1st & 3rd Thu Sep-Dec @ 7:30 PM
              </Typography>
            </CardContent>
          </Card>
          <br/>
        <Typography variant="h6" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Phone"
            name="phone"
            type="phone"
            value={formData.phone}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          <FormControlLabel
            control={<Checkbox checked={formData.ofAge} onChange={handleCheckboxChange} name="ofAge" />}
            label="Are you over 18?"
          />
          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

ContactModal.propTypes = {
open: PropTypes.bool.isRequired,
handleClose: PropTypes.func.isRequired
};
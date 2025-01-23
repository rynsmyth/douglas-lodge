import PropTypes from 'prop-types';
import {
Box,
Typography,
Modal
} from "@mui/material";

export const ParkingModal = ({ open, handleClose }) => {

  const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  width: 800, // Increase the width to fit the PDF preview
  maxHeight: "90vh", // Restrict height to 80% of the viewport
  overflowY: "auto", // Enable vertical scrolling if content exceeds maxHeight
};


  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ ...modalStyle, width: { xs: '90%', sm: '80%', md: 800 } }}>
  <Box sx={{ height: '90vh', overflow: 'auto' }}>
    <Typography variant="h5" component="div">
      Parking Information
    </Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      Castle Rock is growing and, as is common in other popular downtown areas, parking can be challenging at times. Aside from street parking there are two covered free public parking garages within a reasonable walking distance of our Lodge building. When planning your visit, it is advisable to come early and give yourself time to find parking.
    </Typography>
    <img
      src="./douglasSiteImages/lodgeParking.png"
      alt="Parking Information"
      style={{
        width: '100%',        // Makes the image take full width of the container
        maxWidth: '100%',     // Ensures it does not exceed the container's width
        height: 'auto',       // Maintains the aspect ratio
        borderRadius: '8px',  // Optional: Adds rounded corners
      }}
    />
  </Box>
</Box>
    </Modal>
  );
};

ParkingModal.propTypes = {
open: PropTypes.bool.isRequired,
handleClose: PropTypes.func.isRequired
};
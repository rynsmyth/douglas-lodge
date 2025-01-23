import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
Box,
Paper,
Typography,
Button,
Modal,
Card,
CardContent,
} from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires CSS file
import { Carousel } from "react-responsive-carousel";
import "../App.css";
import { ContactModal } from "../components/ContactModal";
import { ParkingModal } from "../components/ParkingModal";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.grey[900]
      : theme.palette.background.paper,
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  wordWrap: "break-word",
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(2),
}));

const CarouselImage = styled("img")({
  maxWidth: "100%",
  maxHeight: "400px",
  objectFit: "contain",
  margin: "0 auto",
});

const ProspectInfoModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 2,
          width: { xs: '95%', sm: '95%', md: '95%' },
          height: { xs: '85vh', sm: '85vh', md: '90vh' },
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
            }}
          >
            Prospect Information
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              overflow: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <iframe
              src="./2025 Douglas Lodge Introduction Pamphlet.pdf"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '500px', // Ensures visibility on small screens
                border: 'none',
              }}
              title="Prospect Information"
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
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
  width: { xs: '90%', sm: '80%', md: 600 },
};

const About = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [prospectModalOpen, setProspectModalOpen] = useState(false);
  const [parkingModalOpen, setParkingModalOpen] = useState(false);

  const handleContactModalOpen = () => {
    setContactModalOpen(true);
  };

  const handleContactModalClose = () => {
    setContactModalOpen(false);
  };

  const handleProspectModalOpen = () => {
    setProspectModalOpen(true);
  };

  const handleProspectModalClose = () => {
    setProspectModalOpen(false);
  };

    const handleParkingModalOpen = () => {
    setParkingModalOpen(true);
  };

  const handleParkingModalClose = () => {
    setParkingModalOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1, overflowX: "hidden", p: 2 }}>
      <Typography variant="h3" sx={{ textAlign: "center", mb: 4 }}>
        About Our Lodge
      </Typography>
      <Item>
        <Typography variant="body1">
          A dispensation was issued on May 5, 1919 to form a lodge at
          Sedalia, Colorado. This dispensation was granted by MW Brother
          Clarence M. Kellogg. The Lodge was known as Sedalia Lodge U.D. The
          Lodge held 12 regular communications before the next Grand Lodge
          session and was congratulated by the Committee on Returns and Work
          for the neat and careful keeping of records. The Charter was
          granted October 8, 1919 under the name of Douglas Lodge #153 with
          32 charter members. Constitution of the Lodge was held October 20,
          1919 with MW Brother Frank L. Bishop officiating. March 30, 1937,
          Brother LOUIS R. HIGBY purchased the present Lodge building on the
          corner of 3rd and Wilcox in Castle Rock as a trustee of Douglas
          Lodge. The building was built in 1904 for the First National Bank
          of Douglas County which occupied the building for 29 years. During
          the depression in 1933, the bank closed and the building stood
          vacant until the Lodge purchase in 1937.
        </Typography>
      </Item>
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        my: 4,
      }}
    >
      <Box
        sx={{
          height: {
            xs: '40vh', // Height for small screens (phones)
            sm: '50vh', // Height for tablets
            md: '70vh', // Height for desktops
          },
          width: '100%',
          maxHeight: '450px',
          backgroundImage: 'url(./douglas_lodge_officers_2025.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: 1,
        }}
      />
            <Typography
        variant="subtitle1"
        sx={{
          color: 'gray',
          mt: 2,
          textAlign: 'center',
        }}
      >
        *WB Jeffrey Noakes not pictured
      </Typography>
    </Box>
      <Item>
        <Typography variant="body2">
          “But who so looketh in the perfect law of liberty, and continueth therein, he not being a forgetful hearer, but a doer of the work, shall be blessed in his deed” James 1:25
        </Typography>
      </Item>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
        <Item>
          <Typography variant="h4" sx={{ textAlign: "center", mb: 4 }}>
            2025 Lodge Officers
          </Typography>
          <Typography variant="body1">Worshipful Master: Thomas W. Adair</Typography>
          <Typography variant="body1">Senior Warden: T.J. Ward</Typography>
          <Typography variant="body1">Junior Warden: Steve Stevens</Typography>
          <Typography variant="body1">Treasurer: Ricardo Dena</Typography>
          <Typography variant="body1">Secretary: Jeffery A. Noakes</Typography>
          <Typography variant="body1">Senior Deacon: Christian Delarosa</Typography>
          <Typography variant="body1">Junior Deacon: Richard A. Wright</Typography>
          <Typography variant="body1">Senior Steward: Justin Nelson</Typography>
          <Typography variant="body1">Junior Steward: Scott Harbaugh</Typography>
          <Typography variant="body1">Chaplain: Lee Alexander</Typography>
          <Typography variant="body1">Marshal: Paul Perseo</Typography>
          <Typography variant="body1">Tiler: Richard L. Anderton</Typography>
        </Item>
        <Box>
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
        </Box>
        <Box>
          <Card sx={{ minWidth: 250 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Where We Are
              </Typography>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                Location
              </Typography>
              <a
                href="https://www.google.com/maps/search/?api=1&query=300+Wilcox+Street,+Castle+Rock,+CO+80104"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography variant="body1">
                  300 Wilcox Street
                  <br />
                  Castle Rock, CO 80104
                </Typography>
              </a>
              <br />
              <Button variant="contained" onClick={handleParkingModalOpen}>
              Parking
            </Button>
            </CardContent>
          </Card>
          <br />
          <Item>
            <Typography variant="h5" component="div">
                To Be One,
              </Typography>
              <br />
            <Button variant="contained" onClick={handleContactModalOpen}>
              Ask One...
            </Button>
            <br />
            <br />
            <Button variant="contained" onClick={handleProspectModalOpen}>
              Prospect Info
            </Button>
          </Item>
        </Box>
      </Masonry>
      <ContactModal open={contactModalOpen} handleClose={handleContactModalClose} />
      <ProspectInfoModal open={prospectModalOpen} handleClose={handleProspectModalClose} />
      <ParkingModal open={parkingModalOpen} handleClose={handleParkingModalClose} />
      <Box sx={{ mt: 4 }}>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={6000}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CarouselImage
              src="./douglasSiteImages/buildinghistorypageimages/manhartStore.jpg"
              alt="Original Lodge"
            />
            <Typography variant="caption" sx={{
                  maxWidth: "100%",
                  textAlign: 'center',
                  padding: '10px',
                  backgroundColor: '#f0f0f0',
                  color: '#333',
                  marginTop: '5px',
                  marginBottom: "30px",
                }}>
                  Original Lodge Sadalia, CO
            </Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CarouselImage
              src="./douglasSiteImages/buildinghistorypageimages/josephCunninghamFirstWM_croped.jpg"
              alt="First Worshipful Master"
            />
            <Typography variant="caption" sx={{
                  maxWidth: "100%",
                  textAlign: 'center',
                  padding: '10px',
                  backgroundColor: '#f0f0f0',
                  color: '#333',
                  marginTop: '5px',
                  marginBottom: "30px",
                }}>
                  First Worshipful Master
            </Typography>
          </div>
          <div>
            <CarouselImage
              src="./douglasSiteImages/washington_farewell.jpg"
              alt="Lodge Image 3"
            />
          </div>
        </Carousel>
      </Box>
    </Box>
  );
};

export default About;
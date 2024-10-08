import React, { useState } from "react";
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
import emailjs from "emailjs-com";
import { saveAs } from "file-saver";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires CSS file
import { Carousel } from "react-responsive-carousel";
import "../App.css";
import { InstagramEmbed } from 'react-social-media-embed';
import { ContactModal } from "../components/ContactModal";

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
      <Box sx={{ ...modalStyle, width: { xs: '90%', sm: '80%', md: 800 } }}>
        <Box sx={{ height: '90vh', overflow: 'auto' }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Prospect Information
          </Typography>
          <iframe
            src="./2024 Douglas Lodge Introduction Pamphlet-min (2).pdf"
            width="100%"
            height="100%"
            title="Prospect Information"
          />
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

  return (
    <Box sx={{ flexGrow: 1, overflowX: "hidden", p: 2 }}>
      <Typography variant="h3" sx={{ textAlign: "center", mb: 4 }}>
        About our Lodge
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
          height: { xs: "50vh", md: "75vh" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "url(./2024Officers.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          color: "white",
          maxWidth: "100%",
          maxHeight: "400px",
          objectFit: "contain",
          margin: "0 auto",
          overflowX: "hidden",
          my: 4,
          borderRadius: 1,
        }}
      />
      <Item>
        <Typography variant="body2">
          “But who so looketh in the perfect law of liberty, and continueth therein, he not being a forgetful hearer, but a doer of the work, shall be blessed in his deed” James 1:25
        </Typography>
      </Item>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
        <Item>
          <Typography variant="h4" sx={{ textAlign: "center", mb: 4 }}>
            2024 Lodge Officers
          </Typography>
          <Typography variant="body1">Worshipful Master: Joel Charles</Typography>
          <Typography variant="body1">Senior Warden: Thomas W. Adair</Typography>
          <Typography variant="body1">Junior Warden: T.J. Ward</Typography>
          <Typography variant="body1">Treasurer: Ricardo Dena</Typography>
          <Typography variant="body1">Secretary: Jeffery A. Noakes</Typography>
          <Typography variant="body1">Senior Deacon: Donald A. Davis</Typography>
          <Typography variant="body1">Junior Deacon: Kenneth C. Colton</Typography>
          <Typography variant="body1">Senior Steward: Richard A. Wright</Typography>
          <Typography variant="body1">Junior Steward: Frank J. Andrews</Typography>
          <Typography variant="body1">Chaplain: Lee Alexander</Typography>
          <Typography variant="body1">Marshal: C. David Tuck</Typography>
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
            </CardContent>
          </Card>
          <br />
          <Item>
            <Button variant="contained" onClick={handleContactModalOpen}>
              Learn More
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
      <Box sx={{ mt: 4 }}>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={3000}
        >
          <div>
            <CarouselImage
              src="./douglasSiteImages/buildinghistorypageimages/manhartStore.jpg"
              alt="Lodge Image 1"
            />
          </div>
          <div>
            <CarouselImage
              src="./douglasSiteImages/buildinghistorypageimages/josephCunninghamFirstWM_croped.jpg"
              alt="Lodge Image 2"
            />
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

import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, List, ListItem, ListItemText, Link, Grid, Paper, Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CarouselImage = styled("img")({
  maxWidth: "100%",
  maxHeight: "400px",
  objectFit: "contain",
  margin: "0 auto",
});

const Community = () => {
  return (
    <Box sx={{ flexGrow: 1, overflowX: "hidden" }}>
      <Typography variant="h3" align="center" gutterBottom>
        Community Square
      </Typography>

      <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={3000}>
      <div>
          <CarouselImage src="./douglasSiteImages/castleRockFirelogo.png" alt="Lodge Image 1"/>
        </div>
        <div>
          <CarouselImage src="./douglasSiteImages/DSCLibraryCornerstone.jpg" alt="Lodge Image 2"/>
        </div>
        <div>
          <CarouselImage src="./douglasSiteImages/parkerPDLogo.png" alt="Lodge Image 3"/>
        </div>
        <div>
          <CarouselImage src="./douglasSiteImages/communitysquarepage/5178856_17bb4472824a40eeab5bf67e-300.jpg" alt="Lodge Image 4"/>
        </div>
        <div>
          <CarouselImage src="./douglasSiteImages/communitysquarepage/20230916_153407-300.jpg" alt="Lodge Image 5"/>
        </div>
        <div>
          <CarouselImage src="./douglasSiteImages/communitysquarepage/20240615_124906-300.jpg" alt="Lodge Image 6" />
        </div>
        <div>
          <CarouselImage src="./douglasSiteImages/communitysquarepage/20240727_104455_resized.jpg" alt="Lodge Image 7" />
        </div>
        <div>
          <CarouselImage src="./douglasSiteImages/communitysquarepage/20240727_104958_resized.jpg" alt="Lodge Image 8"/>
        </div>
        <div>
          <CarouselImage src="./douglasSiteImages/communitysquarepage/AAlogo-300.jpg" alt="Lodge Image 9"/>
        </div>
        <div>
          <CarouselImage src="./douglasSiteImages/communitysquarepage/CRC_horizontal_color_cropped-300.png" alt="Lodge Image 10" />
        </div>
        <div>
          <CarouselImage src="./douglasSiteImages/communitysquarepage/CRPD LOGO.png" alt="Lodge Image 11" />
        </div>
        <div>
          <CarouselImage src="./douglasSiteImages/communitysquarepage/DCSO CoinLogo-Real-Badge-1015x10.png" alt="Lodge Image 13"/>
        </div>
      </Carousel>

      <Box sx={{ padding: { xs: "1rem", md: "2rem" } }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Community
        </Typography>
        <Typography variant="body1" align="center" paragraph>
        Since our “operative” stone mason days in the Middle Ages, to the present day “speculative” fraternity, Freemasons have been builders within their community.  The Brothers of Douglas Lodge No. 153 have been ardent supporters of the Town of Castle Rock and Douglas County for over 100 years. Our brethren, through their obligations of service, business acumen, and charitable hearts have strived to build a better community alongside our fellow citizens. From the humble beginnings of our town, we played a role in bringing electricity and sewer services to Castle Rock. During the hard times of the Great Depression, our brothers granted loans to help the local rancher and small businesses, and our shop owners provided critical services to those in need. We were instrumental in erecting the Star on Castle Rock, establishing the public library, and even bringing critical water rights to the town.
        We ask for nothing in return. We are overjoyed to work alongside our fellow townsfolk for the betterment of the community. Whether marching out in front or quietly extending a helping hand of charity, we strive to do good works in Hope, by Faith, and through Charity to become better men and Masons. Thank you for visiting our website and please drop us a note if you have ideas on how we can work together to build something beautiful.   
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ marginTop: "2rem" }}>
          <Grid xs={12} md={6} item>
            <Item>
              <Typography variant="h5" gutterBottom>
                Community Events
              </Typography>
              <Typography variant="body2">
                Come See Us!
              </Typography>
              <List>
              <ListItem>
                  <ListItemText
                    primary={<div><span color="inherit">Oktoberfest Open House</span><br></br><a
                      href="https://www.google.com/maps/search/?api=1&query=300+Wilcox+Street,+Castle+Rock,+CO+80104"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span color="inherit">Douglas Lodge #153</span>
                    </a></div>}
                    secondary='Sunday September 22, 2024 9am to 4pm'
                    
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={<div><span href="#" color="inherit">Lecture: “Philip S. Miller; the Man, the Mason”</span><br></br><a
                      href="https://www.google.com/maps/search/?api=1&query=Philip+S.+Miller+Library,+Castle+Rock,+CO"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span color="inherit">Philip S. Miller Library</span>
                    </a><br></br><span color="inherit">Event Hall B</span></div>}
                    secondary="Sunday September 22, 2024 2pm to 3pm"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={<div><span href="#" color="inherit">FREE Child ID Event</span><br></br><a
                      href="https://www.google.com/maps/search/?api=1&query=Philip+S.+Miller+Library,+Castle+Rock,+CO"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span color="inherit">Philip S. Miller Library</span>
                    </a><br></br><span>Conference Room D</span></div>}
                    secondary="Saturday October 19, 2024 11am to 12:30pm"
                  />
                </ListItem>
              </List>
            </Item>
          </Grid>
          <Grid xs={12} md={6} item>
            <Item>
              <Typography variant="h5" gutterBottom>
                Local Partnerships
              </Typography>
              <List>
              <ListItem>
                  <ListItemText
                    primary={<Link href="https://castlerock.org/" color="inherit">Castle Rock Chamber</Link>}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={<Link href="https://triartsproject.org/" color="inherit">Tri Arts Project</Link>}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={<Link href="https://www.nocowbakery.com/" color="inherit">No Cow Bakery</Link>}
                  />
                </ListItem>
              </List>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Community;

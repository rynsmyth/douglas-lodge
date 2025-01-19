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

      <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={6000}>
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
                    primary={<div><span color="inherit">Stated Meeting/Fellowship</span><br></br><a
                      href="https://www.google.com/maps/search/?api=1&query=300+Wilcox+Street,+Castle+Rock,+CO+80104"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span color="inherit">Douglas Lodge #153</span>
                    </a></div>}
                    secondary='Thursday February 6th 7:30pm Stated Meeting/6:30pm Fellowship'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={<div><span color="inherit">Stated Meeting</span><br></br><a
                      href="https://www.google.com/maps/search/?api=1&query=300+Wilcox+Street,+Castle+Rock,+CO+80104"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span color="inherit">Douglas Lodge #153</span>
                    </a></div>}
                    secondary='Thursday February 20th 7:30pm Stated Meeting/6:30pm dinner'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={<div><span color="inherit">Stated Meeting/Fellowship</span><br></br><a
                      href="https://www.google.com/maps/search/?api=1&query=300+Wilcox+Street,+Castle+Rock,+CO+80104"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span color="inherit">Douglas Lodge #153</span>
                    </a></div>}
                    secondary='Thursday March 5th 7:30pm Stated Meeting/6:30pm Fellowship'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={<div><span color="inherit">Stated Meeting</span><br></br><a
                      href="https://www.google.com/maps/search/?api=1&query=300+Wilcox+Street,+Castle+Rock,+CO+80104"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span color="inherit">Douglas Lodge #153</span>
                    </a></div>}
                    secondary='Thursday March 19th 7:30pm Stated Meeting/6:30pm dinner'
                  />
                </ListItem>
              </List>
            </Item>
          </Grid>
                    <Grid xs={12} md={6} item>
            <Item>
              <Typography variant="h5" gutterBottom>
                Masonic Charities
              </Typography>
              <Typography variant="body2">
                Charity rests at the foundation of Freemasonry. It is estimated that Masonic institutions donate over $2M each day in an effort to aid those in need and strengthen our communities. Libraries, schools, hospitals, and countless others have benefited from the generosity of the largest and oldest fraternity the world has ever known. Our motto: Truth, Relief, and Brotherly Love is more than just Good men doing good works. It is a pledge of honor and commitment for the ages.
              </Typography>
              <List>
                <ListItem sx={{ flexDirection: 'column', alignItems: 'center' }}>
                  <ListItemText
                    primary={<Link href="https://www.shrinerschildrens.org/en">Shriner’s Hospital for Children</Link>}
                  />
                  <Typography variant="body2">
                  Douglas Lodge No. 153 is extremely proud of a continuing tradition of a Douglas Brother serving on the Board of Directors for <Link href="">Shriner’s Hospital for Children; Salt Lake City, Utah</Link>. These Brothers selflessly serve the hospital and the thousands of children who have had life affirming surgeries to make them whole again. They are an example of how we should live our lives as good and true Master Masons.
                  </Typography>
                </ListItem>
                <ListItem sx={{ flexDirection: 'column', alignItems: 'center' }}>
                  <ListItemText
                    primary={<Link href="https://ritecareco.org/">RiteCare Colorado</Link>}
                  />
                </ListItem>
                <ListItem sx={{ flexDirection: 'column', alignItems: 'center' }}>
                  <ListItemText
                    primary={<Link href="https://www.ktef.org/">Knights Templar Eye Foundation</Link>}
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

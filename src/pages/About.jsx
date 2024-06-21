import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires CSS file
import { Carousel } from 'react-responsive-carousel';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[900] : theme.palette.background.paper,
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
}));

const About = () => {
  return (
    <Box sx={{ flexGrow: 1, overflowX: 'hidden', p: 2 }}>
      <Typography variant="h3" sx={{ textAlign: 'center', mb: 4 }}>
        About our Lodge
      </Typography>

      <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={3000}>
        <div>
          <img src="./douglasSiteImages/buildinghistorypageimages/manhartStore.jpg" alt="Lodge Image 1" />
          <p className="legend">Lodge Image 1</p>
        </div>
        <div>
          <img src="./douglasSiteImages/buildinghistorypageimages/josephCunninghamFirstWM.jpg" alt="Lodge Image 2" />
          <p className="legend">Lodge Image 2</p>
        </div>
        <div>
          <img src="./douglasSiteImages/washington_farewell.jpg" alt="Lodge Image 3" />
          <p className="legend">Lodge Image 3</p>
        </div>
        {/* Add more images as needed */}
      </Carousel>

      <Grid container spacing={3} sx={{ margin: '0', '& > .MuiGrid2-root': { p: 0 } }}>
        {[12, 12, 12, 12].map((size, index) => (
          <Grid xs={12} md={size} key={index}>
            <Item>
              Bacon ipsum dolor amet turkey shank rump pig tri-tip. Pork belly buffalo boudin salami t-bone turducken ball tip. Shankle doner jerky jowl meatloaf ham hock pork loin leberkas. Beef turducken pork loin jowl meatball, rump drumstick hamburger swine jerky pork belly andouille pancetta pastrami tenderloin. Filet mignon turducken buffalo ball tip short ribs shank spare ribs. Hamburger flank pork belly, cupim t-bone landjaeger chuck jowl tail meatball pork chop beef venison kevin.

              Flank shankle ham hock ball tip burgdoggen strip steak, jowl bacon tri-tip tongue pork porchetta. Leberkas landjaeger venison, short loin pork belly picanha jerky porchetta jowl shoulder ball tip corned beef alcatra brisket frankfurter. Sirloin chislic pastrami doner. Biltong kielbasa t-bone prosciutto, boudin bacon ham meatloaf landjaeger sirloin ham hock pork belly rump pork loin corned beef.

              Spare ribs ham chuck, pork biltong beef ribs buffalo drumstick. Kielbasa pancetta brisket, pastrami andouille burgdoggen venison corned beef prosciutto sirloin. Tenderloin ribeye kielbasa biltong pastrami ground round turducken spare ribs filet mignon burgdoggen. Jerky brisket landjaeger, capicola pig shank tongue ham hock chicken shoulder. Kielbasa frankfurter short loin, cupim meatball short ribs prosciutto doner drumstick. Jowl shoulder beef ribs venison, short ribs cupim pig.

              Spare ribs pastrami shankle swine beef ribs filet mignon shoulder, jerky turkey pork flank venison cupim. Rump short loin picanha pork chicken flank tongue andouille pork loin brisket, ham pork belly pastrami salami. Pork loin tongue salami spare ribs doner swine. Pastrami bacon rump picanha tail frankfurter alcatra salami pork ham hock doner pork loin.

              Pig chicken salami capicola chislic jerky shoulder burgdoggen ground round sirloin meatball. Capicola hamburger alcatra brisket pastrami corned beef pig buffalo shankle. Chuck jerky bacon, shoulder capicola pork chop chislic frankfurter. Meatball jerky bresaola, beef ham beef ribs landjaeger boudin ball tip shoulder tongue prosciutto. Corned beef prosciutto picanha sirloin pancetta salami.

              Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;

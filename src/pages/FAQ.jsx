import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Typography, List, ListItem, ListItemText, Grid, Box } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const FAQ = () => {
  return (
    <Box sx={{ flexGrow: 1, overflowX: "hidden", padding: "2rem" }}>
      <Typography variant="h3" align="center" gutterBottom>
        Frequently Asked Questions
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ marginTop: "2rem" }}>
        <Grid xs={12} md={8} item>
          <Item>
            <List>
              <ListItem>
                <ListItemText
                  primary="1. What is Freemasonry?"
                  secondary="Ancient Free and Accepted Masonry is the oldest fraternity in the world. We are dedicated to improving and strengthening the Character of good men to make them better husbands, fathers, sons, neighbors, and citizens. We accomplish this through allegorical teachings based upon the ancient stonemason guilds and the symbology of their professional working tools. We often say that 'Masonry is a beautiful system of morality, veiled in allegory, and illustrated by symbols'."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="2. How old is Freemasonry?"
                  secondary="No one knows for sure. Freemasonry was not created in a moment, a day, or even a year. There are lodge records at least as old as 1599 and the Grand Lodge of England, formed by four London based lodges, was established in 1717. Some researchers believe the fraternity has much older roots."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="3. Is Freemasonry a Religion?"
                  secondary="No. While the fraternity is friendly to all moral religions, it teaches no theological dogmas of its own."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="4. Is Freemasonry a 'Secret Society'?"
                  secondary="No. Freemasons meet in buildings bearing our symbols, with posted meeting dates and times. Our members often wear rings or clothing bearing our symbols so that we can be readily identified by other members. We do keep the content of our rituals secret from all but our members."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="5. Why are the rituals secret?"
                  secondary="Part of the answer is that we, as Masons, took a sacred oath to keep certain details secret from all those who have not yet done the work to obtain the degrees of Masonry. Lots of organizations expect their practitioners to maintain secrets. Doctors, lawyers, engineers, developers, soldiers, and many others pledge to keep their valued information private. The information is not harmful or embarrassing, quite the opposite in fact. We firmly believe that things of great value, are not valued, if simply given away."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="6. What's in it for me?"
                  secondary="All men are flawed and need improvement to be their best. It seems at times like the whole world is working to break you down. Within the walls of a Lodge we are committed to building you up. Through our ritual, community service, friendships, and fellowship, we strive to help you be the best version of yourself."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="7. Why won't you ask me to join?"
                  secondary="Masonic tradition prohibits us from improper solicitations. Such requests could be misconstrued as 'compulsory' if initiated by a brother who also happened to be an employer, trusted community leader, or even a father. Each man must choose to join of his own free will."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="8. How long does it take to become a Mason?"
                  secondary="Our rules, passed down through the generations, require a minimum of two lodge members to 'vouch' for you, having known you very well for at least six months. Once you have two members willing to vouch for you, you are invited to petition the lodge for membership. For most men, completing the three degrees of Masonry can be accomplished in an additional six to twelve months."
                />
              </ListItem>
            </List>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FAQ;

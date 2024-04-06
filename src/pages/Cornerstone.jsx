import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2"; // Make sure you're ready for any potential breaking changes in future updates
import { Typography } from "@mui/material";

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Cornerstone = () => {
  const textContent = `
  The cornerstone of a building in ancient times was a perfectly squared stone set in the corner of the new building which was "plumbed", "squared" and "leveled" by the builder. Without a perfect starting point, it was recognized that the quality of the building would suffer through its construction and life span.

 

  The word "cornerstone" and/or "foundation stone" are mentioned numerous times throughout the Old and New Testaments. It is written in Isaiah 28:16 "Therefore thus saith the Lord God, Behold, I lay in Zion for a foundation, a stone, a tried stone, a precious cornerstone, a sure foundation: he that believed shall not make haste."
  
   
  
  The ceremony of laying a cornerstone is well documented beginning in the 13th century in Scotland. In the United States, the public laying of cornerstones by the Masonic Fraternity is well interwoven in American history. Over the last two hundred years, cornerstones have been laid by Freemasons in hundreds of public buildings, schools, churches and government buildings. George Washington laid the cornerstone in the Capitol Building in Washington D.C., as did Benjamin Franklin at Independence Hall in Philadelphia. Other important buildings with cornerstones laid by Freemasons are the Smithsonian Institute, The White House, American University, Building of the House of Representatives and the Law School of George Washington University, to name a few. Prominent Freemasons that have laid cornerstones in the name of Freemasonry have been Presidents Andrew Jackson and Harry Truman. It is recorded that locally, cornerstones were laid by the Freemasons in the first two Post Offices, the early hospitals, the Baptist and Methodist churches and the local Masonic Lodge Buildings.
  
   
  
  Many people who are not Freemasons are naturally curious about why Masonic Lodges have been chosen to do the honorable work of starting a building, "Laying the cornerstone." To answer this question, you have to understand what Freemasonry is and where it came from.
  
   
  
  First and foremost, Freemasonry is not a religion. Being not a religion, it has no doctrines or creeds. It elects and takes its officers from its membership and governs itself by constitutional principles, it is loyal and obedient to civil government. It affirms the individual's right to free speech and freedom of religion. Its purposes are morality, benevolence and brotherly love as expressed by mutual respect and understanding. Its only requirement for membership is a pronounced belief in the support of a singular "Deity or Supreme Being." Men of every walk of life including clergy from the Catholic, Protestant and Jewish religions have counted their membership in the Fraternity an honor to possess and have been proponents of Freemasonry throughout their living of their daily lives.
  
   
  
  Freemasons can date their present day heritage, back to the day when great cathedrals were built by stonemasons who were instructed in the profession and craft of building with stone. These builders or stone masons formed their own craft guilds, whereby they taught each other the building trades. Through this teaching of the craft, the men learned together as friends and through this closeness became as near to each other as brothers do.
  
   
  
  After the evolution from building with-stone; stone masons-were not much in demand due to the new nature and ease of building with wood. This is when the stone masons first started admitting men from other occupations into their guild or lodges. Through these lodges, men of every walk of life congregated in a fraternal bond that promulgates even to this day, centuries later. Through the symbolism of the ancient stone masons, their tools and their work, Freemasons today are inspired to live pure, upright lives.
  
   
  
  Like George Washington, the first president of a new nation founded on the principles of liberty, justice and equality, Freemasons are proud to use the working tools of the ancient stone masons, to lay the cornerstones of public buildings as symbols of the virtues endowed upon man by a "Supreme Being." It is truly an honor for Freemasons to perform this service
  `;

  return (
    <Box sx={{ flexGrow: 1, overflowX: 'hidden', textAlign: 'center', py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Cornerstone
      </Typography>
      <Typography variant="body1" paragraph dangerouslySetInnerHTML={{ __html: textContent }} />

      {/* Grid for additional content */}
      <Grid container spacing={2} sx={{ width: '100%', margin: '0', '& > .MuiGrid-item': { paddingLeft: '0', paddingRight: '0' } }}>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cornerstone;

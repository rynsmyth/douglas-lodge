import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2"; // Make sure you're ready for any potential breaking changes in future updates
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Members = () => {
    return (
          <Box sx={{ flexGrow: 1, overflowX: 'hidden' }}> {/* Prevents horizontal scrolling */}
          {/* Hero Section */}
          <Typography variant="h3" style={{ textAlign: 'center' }}>
              Placeholder for Members Portal.
            </Typography>
    
          {/* Grid for additional content */}
          <Grid container spacing={2} sx={{ width: '100vw', margin: '0', '& > .MuiGrid2-root': { paddingLeft: '0', paddingRight: '0' } }}>
            <Grid xs={6} md={8} item>
              <Item>xs=6 md=8</Item>
            </Grid>
            <Grid xs={6} md={4} item>
              <Item>xs=6 md=4</Item>
            </Grid>
            <Grid xs={6} md={4} item>
              <Item>xs=6 md=4</Item>
            </Grid>
            <Grid xs={6} md={8} item>
              <Item>xs=6 md=8</Item>
            </Grid>
          </Grid>
        </Box>
    );
  };
  
  export default Members;
  
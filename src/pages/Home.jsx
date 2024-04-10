// Removed import React since it's not necessary for JSX anymore
import { Box, Paper, Grid, Typography, useTheme } from '@mui/material';
import EventsCalendar from '../components/Calendar';

const Item = ({ children }) => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
      }}
    >
      {children}
    </Paper>
  );
};

const events = [
  {
    title: 'Stated Meeting',
    allDay: true,
    start: new Date(2024, 3, 4, 19, 30), // Note: Months are 0-indexed
    end: new Date(2024, 3, 4, 21, 0),
  },
  {
    title: 'Coffee Club Hike',
    start: new Date(2024, 3, 14),
    end: new Date(2024, 3, 14),
  },
  {
    title: 'Stated Meeting',
    allDay: true,
    start: new Date(2024, 3, 18, 19, 30), // Note: Months are 0-indexed
    end: new Date(2024, 3, 18, 21, 0),
  },
  // Add more events here
];

const HeroSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: "url(/douglas-lodge/Resized_Resized_Douglas_Lodge_No._153_AF&AM_BLUE.jpeg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: 'white',
        width: '100vw',
        margin: '0 auto',
        overflowX: 'hidden',
      }}
    />
  );
};

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, overflowX: 'hidden' }}>
      <HeroSection />
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Discover the history and values of Freemasonry.
      </Typography>
      <Grid container spacing={2} sx={{ width: '100vw', margin: '0', '& > .MuiGrid-root': { paddingLeft: '0', paddingRight: '0' } }}>
        <Grid item xs={6} md={8}>
          <Item>
          <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Upcoming
      </Typography>
          <EventsCalendar events={events} />
          </Item>
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

export default Home;

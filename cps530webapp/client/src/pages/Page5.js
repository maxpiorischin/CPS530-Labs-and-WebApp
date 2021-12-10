import React, {useState} from "react";
import logo from './../logo.svg';
import BackDemo from "./../components/BackDemo"
import './../App.css';
import theme from "../theme";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid'; 
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';  
import Box from '@mui/material/Box';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',

  },
});


const content_types = [
  "expectations", "experience", "regrets/likes"
]


const people = [
  {
    names: "Hazafa Tanveer",
    avatar: "https://cdn.discordapp.com/attachments/915746376611135491/917156621929578578/unknown.png",
    info: {
    expectations: "I expected the frameworks to do most of the heavy lifting in terms of stylization, complex components like cards and other CSS related tasks compared to a simple HTML/CSS webpage.",
    experience: "Although there was a learning curve, there is good documentation on all aspects of React and Material UI that made it simple and easy to get a webpage up and running. I found documentation to be the most valuable asset when working with new web frameworks, as it contains sample code aswell in-depth explanations. ",
    "regrets/likes": "Likes: Ease of use of React Framework to create a responsive webpage, Good documentation on React and Material UI, Minimal lines of code to create webpage. Dislikes: Steep learning curve ",
    }
  },
  {
    names: "Adshagan Nanthakumar",
    avatar: "https://cdn.discordapp.com/attachments/882468970748346448/917185711453650964/unknown.png",
    info: {
      expectations: "I expected the frameworks used to have a large learning curve behind them, but would ultimately aid in designing and creating visually appealing websites.",
      experience: "The frameworks used were as difficult as I expected, but offered alot of new design and coding practices that helped me understand how to properly handle frontend and backend management using new technologies.",
      "regrets/likes": "I intially did have difficulty learning such vast frameworks quickly, but overall I found the process to be very rewarding and I feel like the skills I gained using these frameworks will continue to be useful in the future."
    }
  },
  {
    names: "Maxim Piorischin",
    avatar: "https://avatars.githubusercontent.com/u/60104503?v=4",
    info: {
      expectations: "I expected the framework to allow me to create well organized code, and allow me to use libraries to assist the development process. I also expected a smooth process of communication between server-side express and React.",
      experience: "I experienced a huge learning requirement in order to begin working, and it took me some time to organize the pages. I wrote code and tested with React's live edit updating, which allowed me to use a trial and error process to learn.",
      "regrets/likes": "I liked learning React, as it has a vast variety of options available to developers. Connecting the back-end with the front-end was smooth, and using MaterialUI allowed me to create very clean designs which I enjoyed working with."
    }
  },
  {
    names: "James Tan",
    avatar:"https://cdn.discordapp.com/attachments/915746376611135491/917140089052749854/unknown.png",
    info: {
      expectations: " I expected the frameworks to expedite the process of creating great looking and operating webpages.",
      experience: "Having no prior JavaScript experience, I experienced a large learning curve when trying to work and understand the frameworks.",
      "regrets/likes": "Despite the steep learning curve, I somewhat enjoyed learning certain aspects of ReactJS and Material-UI. Using ReactJS and Material-UI I was surprised to be able to create rather complex UI's in just a few lines of code. A regret that I have is not picking them up earlier."

    }
  }
]


function cap(content) {
  return content.charAt(0).toUpperCase() + content.slice(1);
}
function CardButton(key, hook) {
  return (
    <Button variant="text" size="small" sx={{typography: 'body3', fontWeight: 'bold'}} key={key} onClick={()=>{hook(key)}}>{cap(key)}</Button>
  );
}
function ConclusionCard({names, avatar, info}) {
  const [content, setContent] = useState("expectations");
  return (
      <Card sx={{ maxWidth: 500, minHeight: 400 }} style={{justifyContent:'space-between', display: 'flex', flexDirection: 'column'}}>
        <div>
          <CardHeader
            avatar={
              <Avatar sx={{ width: 56, height: 56 }} alt={names} aria-label="person" src={avatar}>
                {names}
              </Avatar>
            }
            titleTypographyProps={{variant:'h4' }}
            title={cap(content)}
            subheader={names}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {info[content]}    
            </Typography>
          </CardContent>
        </div>
  
        <CardActions style={{justifyContent: 'center'}}>
          {content_types.map(ct => (CardButton(ct, setContent)))}
        </CardActions>
      </Card>
  );
}


export default function Page5() {
  return (
    <div className="grey-back">
    <ThemeProvider theme= {darkTheme}>
      <Box m={2} pt={0}>
        <Grid container direction="row" spacing={2} alignItems="center" justify="center">
          {people.map(person => (
            <Grid item sx={6} md={3} key={person.names}>
              {ConclusionCard(person)}
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
    </div>
  );
}

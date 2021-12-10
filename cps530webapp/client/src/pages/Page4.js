import React from "react";
import logo from './../logo.svg';
import BackDemo from "../components/BackDemo"
import FrontDemo from "../components/FrontDemo"

import './../App.css';
import theme from "../theme";
import {ThemeProvider} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; 

const image = {
  width: "40%",
  height: "auto",
};

const cardstyle = {
  backgroundColor: '#018786',
};

function CustomCard({title, image, body}) {
  return (
    <Card sx={{ maxWidth: 345 }} style={cardstyle}>
      <CardMedia component="img" height="140" image={image} alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function Page4() {
  return (
    <div className="App">
      <header className="App-header">
      <ThemeProvider theme={theme}>
        <img src={logo} className="App-logo" alt="logo" style={image}  />
        <h1>
          CPS530 React and Express WebApp! {"\n"}
        </h1>
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}> 
          <Grid item md = {2} xs = {12} align= "center">
            <CustomCard
              title="Site Stats"
              image="https://media0.giphy.com/media/unQ3IJU2RG7DO/giphy.gif"
              body={(<BackDemo/>)}
            />
          </Grid>
          <Grid item md={2} xs = {12} align= "center">
            <FrontDemo/>
          </Grid>
        </Grid>
      </ThemeProvider>
      </header>
    </div>
  );
}
import React from "react";
import './../App.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ExpressJSgrph from './../ExpressJS-Users.svg';
import ReactJSgrph from './../ReactJS-Users.svg';
import MaterialUIgrph from './../Material-UI-Users.svg';
import mui from  './../MUI.png'
import logo from './../logo.svg';
import express from './../express.png';
import { Container, Grid } from "@mui/material";


function arrayToUl (arr) {
  return (
    <ul>
      {arr.map(e => (
        <li key={e}>
          {e}
        </li>
      ))}
    </ul>
  )};

function Section({title, image, rating, pros, cons}) {
  return (
    <div>  
      <Box sx={{flexGrow:0.5}}>
      <Typography variant="h2" color="white" ml={16}>{title}</Typography>
        <Grid container spacing={2} style={{minWidth:"1200px"}}>
          <Grid item sm={6} mb={5} pr={5}>
            <img src={image} alt={`${title} graph`} style={{width:"100%",height:"auto",minWidth:"200px"}}/>
          </Grid>
          <Grid item md={6} xs = {12} className="textbox">
            <Grid container>
              <Grid item sm={4}>
                <Typography variant="h5" textAlign="center">Average User Rating:</Typography>
              </Grid>
              <Grid item md={8} xs = {12}>
                <Rating defaultValue={rating} readOnly size="medium"/> 
              </Grid>
            </Grid>
            <Grid container>
              <Grid item sm={4}>
                <Typography variant="h5" textAlign="center">Pros:</Typography>
              </Grid>
              <Grid item md={8} xs = {12}>
                {arrayToUl(pros)}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item sm={4}>
                <Typography variant="h5" textAlign="center">Cons:</Typography>
              </Grid>
              <Grid item md={8} xs = {12}>
                {arrayToUl(cons)}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

// Tubbs Page
export default function Page1() {
  return (
    <div className="grey-back">
      <header className="Page-header">
        <h1>
          Summary Snapshot Presentation{"\n"}
        </h1>
      </header>
      <Section
        title="ReactJS"
        image={ReactJSgrph}
        rating={5}
        pros={[
          "SEO friendly",
          "Smooth and fast performance",
          "High pace of development"
        ]}
        cons={[
          "High pace of development causes rushed documentation",
          "Uses JSX which imposes a great learning curve"
        ]}
      />
      <Section
        title="Material-UI"
        image={MaterialUIgrph}
        rating={4}
        pros={[
          "Uses Google's Material Design",
          "Promotes animation in designs",
        ]}
        cons={[
          "Offers relatively less variety of components compared to other libraries",
        ]}
      />
      <Section
        title="ExpressJS"
        image={ExpressJSgrph}
        rating={4}
        pros={[
          "Flexible",
          "Well documented"
        ]}
        cons={[
          "Unhelpful error messages",
        ]}
      />
    </div>
  ); 
}
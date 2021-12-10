import React from "react";
import './../App.css';
import Youtube from "./../components/Youtube";
import Grid from '@mui/material/Grid'; 
import {Container} from "@mui/material";
// Max Page
export default function Page3() {
  return (
    <div className="grey-back">
      <header className="Page-header">
        <h1>
          Creating a great page - Express.js Back-End {"\n"}
        </h1>
        <div className="reg-text"> 
          Firstly, ensure Node is installed correctly. You can ensure this by typing <code className="black-back">  Node-v</code> in your terminal <br/>
        </div>
        <div className="reg-text">
         Create the package.json by doing  <code className="black-back"> npm init -y </code> then, install express by doing <code className="black-back"> npm install </code> then <code className="black-back"> npm install express --save </code>
        </div>
        <div>
         Create an app.js file, and add this required code: 
        </div>
        <Container>
        <Grid container spacing={3} justify="center">
        <Grid item xs={12} align="center">
          </Grid>
          <Grid item xs={12} md={6} align="right">
          <img src='/expressmake.png' alt = "ExpressMake"/>
          </Grid>
          <Grid item xs={12} md={6}>
            <div> 1. Import express, and create a port variable equal to <code className="black-back">process.env.port</code> (for hosting) or <code className="black-back">5000</code> (for developing). </div>
            <div> 2. Add a get request route, in this case to the root, which listens to requests and sends a response. </div>
            <div> 3. Start the server with <code className="black-back"> app.listen(port)</code>!</div>
          </Grid>
          <Grid item xs={12}>
          <div className="CenterHeader"> Sending and Recieving Data </div>
          </Grid>
          <Grid item md={6} xs = {12}>
            <div> 1. Create a new file titled "data.json" and add fields for data you wish to collect </div>
            <div> 2. Import the data file into your app.js, as well as a JSON parser </div>
            <div> 3. Add 2 new get request routes, one for retrieving the data and one for updating </div>
            <img src='/expressdata.png' alt = "ExpressData"/>
          </Grid>
          <Grid item xs={6}>
          <img src='/expressroute.png' alt = "ExpressRoute"/>
          </Grid>
        </Grid>
        </Container>
          <div className="reg-text"> 
            You can now run the server using <code className="black-back"> Node app.js </code> <br/>
          </div>
          <div className="reg-text">
            That is all that is required for the Express Back-end! On the demo page you will see live updating data from the code created here.
          </div>
      </header>
    </div>
  );
}
import React from "react";
import './../App.css';
import src1 from './../src1.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; 
import CardMedia from '@mui/material/CardMedia';


function Page3Part2() {

  const cardstyle = {
    backgroundColor: '#018786',
  };

function FrameworkCard({title, image, alt, body}) {
  return (

    <Card sx={{ maxWidth: 1000 }} style={cardstyle}>
      <CardMedia
        component="img"
        height= "auto"
        image={image}
        alt={alt}
      />      
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {body}
      </Typography>
    </CardContent>

    </Card>
  );
}
  return (
    <div className="App">
      <header className="App-header">
        <h3>
        How to create a React frontend page using Material UI{"\n"}
        </h3>
        <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
            {[
                  {
                    title: "How to create a React Project",
                    image: src1,
                    alt: "Step One Image",
                    body: (<>
                        1. Verify you have Node installed correctly by typing node --v.<br></br>
                        2. Create a new React project using the following command in terminal: npx create-react-app my-app.<br></br>
                        3. Then import all nescessary components into the js file.<br></br>
                        4. Use the following template above as starter code for your new page.<br></br>
                        5. Now once the project has been created refer to documentation on how to utilize Material UI components 
                      </>),
                  },
                  {
                    title: "Implementing Material UI Components",
                    image: "https://cdn.discordapp.com/attachments/857908924883271692/916876757242638346/carbon-4.png",
                    alt: "MUI Logo",
                    body: (<>
                        1. Firstly import all nescessary imports for the Material UI component on the top of the file<br></br>
                        2. We are going to be using cards component from Material UI so create a function that creates a new card with whatever parameters are passed in.<br></br>
                      </>)
                  },
                  {
                    title: "Putting it all together",
                    image: "https://media.discordapp.net/attachments/857908924883271692/917150315265015868/carbon-5.png?width=922&height=1045",
                    alt: "Final Page",
                    body: (<>
                        1. Read documentation on how Material UI Grids work and implement according to the desired layout of the page<br></br>
                        2. Implement the Material UI components in the desire order and style. Refer to Material UI Docs on Themes for components.<br></br>
                        3. Use CSS to enhance the appearance of the page.<br></br> 
                      </>)
                  },
                ].map(item => (
                  <Grid key={item.title} item xs={12} md={4}>
                      {FrameworkCard(item)}
                  </Grid>


                ))}
        
    <Grid item md={4} sm={12}>
        </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default Page3Part2
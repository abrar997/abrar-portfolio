import React from "react";
import { Grid, Typography, Container, Box, Button } from "@mui/material";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Home.css";



const HomeData = () => {
  return (
    <Box className="home">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs xl={5}>
            <Typography variant="h2" mt={8}>
              Hi,Iam <span>Abrar</span> Muthanna Rakea
            </Typography>
            <Typography variant="h6" mt={1}>
              React js developer
            </Typography>
<Box>
  <Button>
    
    </Button> 
    
     <input type='file' name='resume'  />
  </Box>

            <Box className="home-contacts">
              <a
                href="mailto:abrprogammer@gmail.com"
                title="abrprogammer@gmail.com"
              >
                <LocalPostOfficeIcon />
              </a>
              <a href="/" title="Abrar Alrawi">
                <LinkedInIcon />
              </a>
              <a href="mailto:abrprogammer@gmail.com" title="code/Mu.">
                <InstagramIcon />
              </a>
            </Box>
          </Grid>
          <Grid item xs={6} xl={3}>
            <iv className="home-girl-image">
              <img src={require("../images/jsjsj.png")} alt="/" />
            </iv>
          </Grid>
          <Grid item xs className="home-image" xl={2}>
            <img src={require("../images/ood.png")} alt="/" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeData;

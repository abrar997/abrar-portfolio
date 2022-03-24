import React from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
            <Typography variant="h4">
              {/* Welcome to my official portfolio website where i put all my work
              related to my designs and many more .
              كيف هي الحالي ؟؟ */}
              داخلي شيءُ خفي لكني لا أتذكر لحن ما صوت شجي أغنة عن شهر ديسمبر
            </Typography>
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

              <a href="/" title="07831190254">
                <WhatsAppIcon />
              </a>

              <a href="mailto:abrprogammer@gmail.com" title="Abrar Alrawi">
                <FacebookIcon />
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

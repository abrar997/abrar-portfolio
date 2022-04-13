import React from "react";
import "./SkillsExperinece.css";
import { Container, Typography } from "@mui/material";
const SkillsExperinece = () => {
  return (
    <div className="SkillsExperinece">
      <Container>
        <Typography variant="h3">Abrar Muthanna Rakea </Typography>
        <Typography variant="h6">React js Developer </Typography>
        {/* <Grid container spacing={2}>
          <Grid item xl={6}>
            <Box>
              <Typography variant="h4">
                <FilterVintageIcon /> Skills
              </Typography>
              <div className="SkillsExperinece-skills">
                <List>
                  <Typography variant="h5">
                    <SpaIcon /> Frontend{" "}
                  </Typography>
                  <ListItem>HTML , HTML5</ListItem>
                  <ListItem>CSS , CSS3</ListItem>
                  <ListItem>Bootstrap 4, 5</ListItem>
                  <ListItem>javascript,oop,API,Ajax,json</ListItem>
                  <ListItem>React js</ListItem>
                  <ListItem>Material ui</ListItem>
                  <ListItem></ListItem>
                </List>

                <List>
                  <Typography variant="h5">
                    {" "}
                    <SpaIcon /> Backend{" "}
                  </Typography>
                  <ListItem>php</ListItem>
                  <ListItem>mysql</ListItem>
                </List>
              </div>
            </Box>
          </Grid>
          <Grid item xl={3}>
            <Box>
              <Experience />
            </Box>
          </Grid>
          <Grid item xl={3}>
            <Box>
              <img src={require("../images/butter1.png")} alt="" />
            </Box>
          </Grid>
        </Grid> */}
      </Container>
    </div>
  );
};

export default SkillsExperinece;

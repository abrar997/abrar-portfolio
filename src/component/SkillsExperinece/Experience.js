import React from "react";
import "./Experience.css";
import { Typography, Box, List, ListItem } from "@mui/material";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import SpaIcon from "@mui/icons-material/Spa";
const Experience = () => {
  return (
    <div className="Experinece">
      {" "}
      <Typography variant="h4">
        <FilterVintageIcon /> Experience
      </Typography>
      <Box>
        <div className="SkillsExperinece-skills">
          <List>
            <Typography variant="h5"><SpaIcon />Frontend</Typography>
            <ListItem>HTML , HTML5</ListItem>
            <ListItem>CSS , CSS3</ListItem>
            <ListItem>Bootstrap 4, 5</ListItem>
            <ListItem>javascript,oop,API,Ajax,json</ListItem>
            <ListItem>React js</ListItem>
            <ListItem>Material ui</ListItem>
            <ListItem></ListItem>
          </List>
        </div>
      </Box>
    </div>
  );
};

export default Experience;

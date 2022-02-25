import React, { useState } from "react";
// react router
import { Link } from "react-router-dom";
// from mui
import AppBar from "@mui/material/AppBar";
import { Button, Container, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import Drawer from "@mui/material/Drawer";
// icons
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
// import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
// style
import "./Navbar.css";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";

const linkstyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "23px",
  marginTop: "20px",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState();
  return (
    <>
      <AppBar>
        <Toolbar>
          <Container>
            <Button onClick={() => setIsOpen(true)}>
              <FilterVintageIcon style={{ fontSize: "49px" }} />
            </Button>
          </Container>
          <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
            <Button onClick={() => setIsOpen(!isOpen)}>
              <LocalFloristIcon
                style={{
                  fontSize: "43px",
                  position: "absolute",
                  right: "0",
                  top: "9px",
                }}
              />
            </Button>
            {/* sidebar links */}
            <Box mt={8}>
              <Link to="/Home" style={linkstyle}>
                Home{" "}
              </Link>

              <Link to="/SkillsExperinece" style={linkstyle}>
                Skills And Experience{" "}
              </Link>
              <Link to="/About" style={linkstyle}>
                Works
              </Link>
              <Link to="/About" style={linkstyle}>
                Send me a message{" "}
              </Link>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

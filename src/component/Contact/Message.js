import React from "react";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import "./Message.css";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { Button, Typography } from "@mui/material";
const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
`;

const style = {
  width: 400,
  bgcolor: "background.paper",
  p: 2,
  px: 4,
  pb: 3,
};
const Message = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="send-message">
        <Button type="button">
          <FilterVintageIcon onClick={handleOpen} />
        </Button>
      </div>

      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style} className="main-modal text-center fw-bold">
          <form action="abrar.php" method="post">
            <Typography variant="h6" id="unstyled-modal-title">
              send your question and i will ansers your question during 24 h
            </Typography>
            <input type="text" placeholder="write your question" />
            <input type="submit" value='send' />

            <Button onClick={() => setOpen(false)} className="btn-cloes-modal">
              Cloese modal
            </Button>
          </form>
        </Box>
      </StyledModal>
    </>
  );
};

export default Message;

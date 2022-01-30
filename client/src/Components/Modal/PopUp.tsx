import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export function PopUp() {
  const [open, setOpen] = React.useState(false);
  const handleOpenPopUp = () => {
    setOpen(true);
  };
  const handleClosePopup = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpenPopUp}>Open Child Modal</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClosePopup}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClosePopup}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
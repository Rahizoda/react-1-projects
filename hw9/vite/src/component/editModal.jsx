import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FrontHand } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditModal({ handleClose, open, setUser , user, EditUser }) {

  function handleSubmit(e) {
    e.preventDefault()
    EditUser(user.id, user)
    e.target.reset()
    handleClose()
  }

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit User
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please edit the user information.
                  </Typography>
                  <form action="" onSubmit={handleSubmit}>
            <input value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} type="text" placeholder="Name" className="border p-2 w-full mb-2" />
            <input value={user.age} onChange={(e) => setUser({ ...user, age: e.target.value })} type="number" placeholder="Age" className="border p-2 w-full mb-2" />
            <button type="submit" className="mr-2">
              Save
            </button>
            <button onClick={handleClose}>
              close
            </button>
                  </form>
        </Box>
      </Modal>
    </div>
  );
}

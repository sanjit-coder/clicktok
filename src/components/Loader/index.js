import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        background: 'rgba(10, 22, 41, 0.8)',
        zIndex: theme => theme.zIndex.drawer + 1,
      }}
      open={true}
      // onClick={handleClose}
    >
      <CircularProgress
        color="secondary"
        size={50}
        thickness={3}
        sx={{color: '#128C7E'}}
      />
    </Backdrop>
  );
};

export default Loader;

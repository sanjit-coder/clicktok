import React from 'react';
import toast from 'react-hot-toast';
import SideDrawer from 'components/SideDrawer';
import {useNavigate} from 'react-router-dom';
import {TextField, Button} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CreatePushNotification = () => {
  const navigate = useNavigate();
  const TextFieldStyles = {
    '& label.Mui-focused': {
      color: '#128C7E',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#128C7E',
      },
    },
  };

  const handleSubmit = () => {
    toast.success('Successfully created!');
    navigate('/notifications/list');
  };

  const handleBack = () => {
    navigate('/notifications/list');
  };

  return (
    <>
      <SideDrawer tabSelected="notifications">
        <h2>Create Push Notification</h2>
        <div className="notificationpanel">
          <div className="notificationpanel__formContainer">
            <div className="notificationpanel__formContainer__heading">
              Title :{' '}
            </div>
            <div className="notificationpanel__formContainer__value">
              <TextField
                id="outlined-basic"
                fullWidth
                label="Title"
                variant="outlined"
                placeholder="Enter Title"
                sx={TextFieldStyles}
              />
            </div>
          </div>

          <div className="notificationpanel__formContainer">
            <div className="notificationpanel__formContainer__heading">
              Description :{' '}
            </div>
            <div className="notificationpanel__formContainer__value">
              <TextField
                id="outlined-basic"
                fullWidth
                label="Description"
                variant="outlined"
                placeholder="Enter Description"
                sx={TextFieldStyles}
              />
            </div>
          </div>

          <div>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#128C7E',
                color: 'white',
                padding: '12px 20px',
                width: '30%',
                marginRight: '30px',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#128C7E',
                },
              }}
              onClick={() => handleSubmit()}>
              Submit
            </Button>

            <Button
              variant="outlined"
              sx={{
                padding: '12px 20px',
                width: '30%',
                color: '#128C7E',
                borderColor: 'lightgray',
                '&:hover': {
                  backgroundColor: 'white',
                  color: '#128C7E',
                  borderColor: 'lightgray',
                  fontWeight: 'bold',
                },
              }}
              onClick={() => handleBack()}
              startIcon={<ArrowBackIcon />}>
              Go Back
            </Button>
          </div>
        </div>
      </SideDrawer>
    </>
  );
};

export default CreatePushNotification;

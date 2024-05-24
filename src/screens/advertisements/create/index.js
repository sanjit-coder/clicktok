import React, {useState} from 'react';
import toast from 'react-hot-toast';
import SideDrawer from 'components/SideDrawer';
import {useNavigate} from 'react-router-dom';
import {TextField, Button, OutlinedInput, InputAdornment} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CreateAdvertisement = () => {
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

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = event => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    toast.success('Successfully created!');
    navigate('/advertisements/list');
  };

  const handleBack = () => {
    navigate('/advertisements/list');
  };

  return (
    <>
      <SideDrawer tabSelected="advertisements">
        <h2>Create Advertisement </h2>
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

          <div className="notificationpanel__formContainer">
            <div className="notificationpanel__formContainer__heading">
              Duration :{' '}
            </div>
            <div className="notificationpanel__formContainer__value">
              <OutlinedInput
                id="outlined-adornment-weight"
                fullWidth
                endAdornment={
                  <InputAdornment position="end">minutes</InputAdornment>
                }
                inputProps={{
                  'aria-label': 'minutes',
                }}
                sx={TextFieldStyles}
              />
            </div>
          </div>

          <div className="notificationpanel__formContainer">
            <div className="notificationpanel__formContainer__heading">
              Video/Image :{' '}
            </div>
            <div className="notificationpanel__formContainer__value">
              <input
                type="file"
                id="fileInput"
                style={{display: 'none'}}
                accept="image/*,video/*"
                onChange={handleFileSelect}
              />
              <label htmlFor="fileInput">
                <Button
                  variant="contained"
                  component="span"
                  sx={{
                    background:
                      'linear-gradient(90deg, rgba(7, 97, 86, 0.4) 0%, rgba(254, 184, 3, 0.4) 51%);',
                    color: 'black',
                    '&:hover': {
                      color: 'white',
                    },
                  }}>
                  Upload File
                </Button>
              </label>
              <p style={{display: 'inline-flex', marginLeft: '10px'}}>
                {selectedFile !== null && selectedFile?.name
                  ? selectedFile?.name
                  : ''}{' '}
              </p>
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

export default CreateAdvertisement;

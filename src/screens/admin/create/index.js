import React from 'react';
import toast from 'react-hot-toast';
import SideDrawer from 'components/SideDrawer';
import {useNavigate} from 'react-router-dom';
import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Button,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {roles} from 'utils/constants';

const CreateAdmin = () => {
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

  //STATES

  const handleSubmit = () => {
    toast.success('Successfully created!');
    navigate('/dashboard');
  };

  const handleBack = () => {
    navigate('/dashboard');
  };
  return (
    <>
      <SideDrawer tabSelected="dashboard">
        <h2>Create Admin</h2>
        <div className="adminpanel">
          <div className="adminpanel__formContainer">
            <div className="adminpanel__formContainer__heading">
              Admin Name :{' '}
            </div>
            <div className="adminpanel__formContainer__value">
              <TextField
                id="outlined-basic"
                fullWidth
                label="Name"
                variant="outlined"
                placeholder="Enter Admin Name"
                sx={TextFieldStyles}
              />
            </div>
          </div>

          <div className="adminpanel__formContainer">
            <div className="adminpanel__formContainer__heading">
              Permissions :{' '}
            </div>
            <div className="adminpanel__formContainer__value">
              <FormGroup aria-label="position" row>
                <FormControlLabel control={<Checkbox />} label="Read" />
                <FormControlLabel control={<Checkbox />} label="Write" />
                <FormControlLabel control={<Checkbox />} label="Delete" />
              </FormGroup>
            </div>
          </div>

          <div className="adminpanel__formContainer">
            <div className="adminpanel__formContainer__heading">Role : </div>
            <div className="adminpanel__formContainer__value">
              <TextField
                select
                label="Select Role"
                placeholder="Select Role"
                fullWidth
                sx={TextFieldStyles}>
                {roles.map(option => (
                  <MenuItem key={option?.value} value={option?.value}>
                    {option?.label}
                  </MenuItem>
                ))}
              </TextField>
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

export default CreateAdmin;

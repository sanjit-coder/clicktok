import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {TextField, Button} from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import forgotPasswordImage from 'assets/images/forgotPasswordImage.svg';

const ForgetPasswordScreen = () => {
  const TextFieldStyles = {
    width: '100%',

    '& label.Mui-focused': {
      color: '#128C7E',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#128C7E',
      },
    },
  };
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const handleResetPasswordClick = () => [];
  return (
    <div className="forgetPasswordContainer">
      <div className="forgetPasswordBox">
        <div className="forgetPasswordBox__image">
          <img src={forgotPasswordImage} alt="Forgot password image"></img>
        </div>
        <div className="forgetPasswordBox__heading">
          Forgot Password?
          <p className="forgetPasswordBox__subtext">
            {`Enter your email and we'll send you instructions to reset your
            password`}
          </p>
        </div>
        <TextField
          value={email}
          onChange={e => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          fullWidth
          sx={TextFieldStyles}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#128C7E',
            color: 'white',
            padding: '12px',
            '&:hover': {
              backgroundColor: '#128C7E',
            },
          }}
          onClick={() => handleResetPasswordClick()}
        >
          Reset Password
        </Button>
        <div className="backArrowContainer" onClick={() => navigate('/')}>
          <KeyboardBackspaceIcon />
          <div className="backArrowContainer__text">Back to Login</div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordScreen;

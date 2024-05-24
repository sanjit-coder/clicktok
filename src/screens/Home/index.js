import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {
  TextField,
  OutlinedInput,
  FormControl,
  InputLabel,
  IconButton,
  InputAdornment,
  Button,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import logo from 'assets/images/logo.svg';
import loginImage from 'assets/images/loginImage.svg';

const Home = () => {
  const TextFieldStyles = {
    width: '100%',
    marginBottom: '24px',
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
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleLoginClick = () => {
    navigate('/dashboard', {replace: true});
  };

  const renderLoginBox = () => {
    return (
      <div className="rightsection__container">
        <div className="rightsection__heading">
          Welcome to ClickNTok
          <p className="rightsection__subtext">
            Please sign in to your account
          </p>
        </div>
        <div className="rightsection__loginimage">
          <img src={loginImage} alt="Login Image"></img>
        </div>
        <div className="rightsection__loginbox">
          <TextField
            value={email}
            onChange={e => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            sx={TextFieldStyles}
          />
          <FormControl sx={TextFieldStyles} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              fullWidth
              value={password}
              onChange={e => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <div
            className="rightsection__forgetpasswordtext"
            onClick={() => navigate('/forgot-password')}>
            Forgot Password ?
          </div>
          <Button
            variant="contained"
            fullWidth
            sx={{
              marginTop: '24px',
              backgroundColor: '#128C7E',
              color: 'white',
              padding: '12px',
              '&:hover': {
                backgroundColor: '#128C7E',
              },
            }}
            endIcon={<LoginIcon />}
            onClick={() => handleLoginClick()}>
            Login
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="homecontainer">
      <div className="homecontainer__row">
        <div className="leftsection">
          <div className="leftsection__logo">
            <img src={logo} alt="Logo"></img>
          </div>
        </div>
        <div className="rightsection">{renderLoginBox()}</div>
      </div>
    </div>
  );
};

export default Home;


import React, {useState} from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Input from '@mui/material/Input';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Loginlotus.css';
import logolotus from '../images/logolotus.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from "@fortawesome/fontawesome-free-solid";
// import styled from "styled-components";
// import { BsFillEyeFill } from "react-icons/bs"; 
// import { BsFillEyeSlashFill } from "react-icons/bs"; 


// import IconButton from "@material-ui/core/IconButton";
// import InputLabel from "@material-ui/core/InputLabel";
// import Visibility from "@material-ui/icons/Visibility";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import Input from "@material-ui/core/Input";



const theme = createTheme();

export default function Loginlotus() {


  // get data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });

      console.log(username,password)
      
  };


  //show/hide field
  // const [values, setValues] = React.useState({
  //   password: "",
  //   showPassword: false,
  // });
  
  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword });
  // };
  
  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };
  
  // const handlePasswordChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <div>
          <img src={logolotus} alt="profile" className="logo_lotus" />
          </div>

          <Typography Typography component="h6" variant="h6">
            บันทึกส่วนลดโดย Jpark
          </Typography> 
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="ชื่อผู้ใช้"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event)=>{setUsername(event.target.value)}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="รหัสผ่าน" icon={faEye}
              type="password"
              id="password"
              autoComplete="current-password"            
              onChange={(event)=>{setPassword(event.target.value)}}
              FontAwesomeIcon="icon={{faEye}}" 
            /> 
            {/* <Input>
             <FontAwesomeIcon className="chevron-right" icon={faEye}></FontAwesomeIcon>
            </Input> */}
            {/* <FontAwesomeIcon className="chevron-right" icon={faEye}></FontAwesomeIcon> */}
             {/* <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> */}
           
  
      {/* <div
      style={{
        marginLeft: "30%",
      }}
    >
      <h4>How to show and hide password in ReactJS?</h4>
      <InputLabel htmlFor="standard-adornment-password">
        Enter your Password
      </InputLabel>
      <Input
        type={values.showPassword ? "text" : "password"}
        onChange={handlePasswordChange("password")}
        value={values.password}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </div> */}


            <FormControlLabel 
              control={<Checkbox value="remember" color="primary"/>}
              label="จำรหัสผ่าน"
            />
            <button className="btn-login"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}                       
            >
              เข้าสู่ระบบ
            </button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                {/* <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link> */}
              </Grid>
            </Grid>
          </Box>
        </Box>   
      </Container>
    </ThemeProvider>
  );
}


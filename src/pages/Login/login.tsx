import * as React from 'react';
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SpeedIcon from '@mui/icons-material/Speed';
import BuildIcon from '@mui/icons-material/Build';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import './login.scss';
import {login} from './auth.ts';




function Copyright(props) {
  return (
    <Typography variant="body2" sx={{bottom:"10px",position: 'absolute',}} color="white" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Brava
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
            navigate('/dashboard');
    }
  }, [navigate]);



  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    // Get form data
    const data = new FormData(event.currentTarget);
  
    // Extract values from FormData
    const username = data.get('username');
    const password = data.get('password');
  
    // Check if username and password are strings
    if (typeof username === 'string' && typeof password === 'string') {
      try {
        // Send POST request using the TypeScript service
        const responseData = await login(username, password);
  
        if (responseData.access_token) {
          localStorage.setItem('access_token', responseData.access_token);
          navigate('/dashboard');
        } else {
          console.error('No access token found in response');
        }
      } catch (error) {
        // Handle errors
        console.error('Error:', error.response ? error.response.data : error.message);
      }
    } else {
      console.error('Invalid form data');
    }
  };
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'radial-gradient(circle, rgba(4,22,40,1) 0%, rgba(7,15,24,1) 100%)', // Background gradient
        }}
      >
        <CssBaseline />

        <Copyright/>
        {/* Top left logo and text */}
        <Box
          sx={{
            position: 'absolute',
            top: 20,
            left: 20,
            display: 'flex',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0733/7767/7577/files/logo_brava.png?v=1715245835" // Update this to the correct image path
            alt="Logo"
            style={{ width: 40, height: 40, marginRight: 10 }}
          />
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', letterSpacing: '1px', fontFamily:"SF" }}>
            Brava
          </Typography>
        </Box>
         {/* Top left logo and text */}
         <Box
          sx={{
            position: 'absolute',
            bottom: 10,
            right: 20,
            display: 'flex',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >

          <Typography variant="h6" sx={{ color: 'white',fontSize:".75rem", letterSpacing: '1px'}}>
            Version:  {process.env.REACT_APP_VERSION}
          </Typography>
          
        </Box>

          
        {/* Left Side Text Content */}
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'left',
            px: 3,
            color: 'rgb(148, 160, 184)', // White text for contrast
          }}
        >
          <Box sx={{ ml: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <SpeedIcon sx={{ color: 'white', mr: 1 }} />
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', letterSpacing: '0.5px', color: 'white' }}
              >
                Adaptable performance
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.6, opacity: 0.8, ml: 3, mb: 2 }}
            >
              Get help from our analytics tools to get a better hold of your business and its performance.
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <BuildIcon sx={{ color: 'white', mr: 1 }} />
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', letterSpacing: '0.5px', color: 'white' }}
              >
                Built to last
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.6, opacity: 0.8, ml: 3, mb: 2 }}
            >
              Experience unmatched durability that goes above and beyond with lasting investment.
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmojiPeopleIcon sx={{ color: 'white', mr: 1 }} />
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', letterSpacing: '0.5px', color: 'white' }}
              >
                Great user experience
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.6, opacity: 0.8, ml: 3, mb: 2 }}
            >
              Integrate our product into your routine with an intuitive and easy-to-use interface.
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LightbulbIcon sx={{ color: 'white', mr: 1 }} />
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', letterSpacing: '0.5px', color: 'white' }}
              >
                Innovative functionality
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.6, opacity: 0.8, ml: 3, mb: 2 }}
            >
              Stay ahead with features that set new standards, addressing your evolving needs better than the rest.
            </Typography>
          </Box>
        </Grid>

        {/* Right Side - Sign In Card */}
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent', // Slightly transparent white background
          }}
        >
          <Card
            sx={{
              width: '100%',
              maxWidth: 400,
              top: {xs:"0"},
              bgcolor: '#060E19', // Dark background color for the card
              color: '#fff', // White text for contrast
              borderRadius: 2, // Slightly rounded corners for smoothness
              border: { xs:"none",sm:'1px solid rgb(148, 160, 184)'},
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 4, // Padding inside the card for spacing
                }}
              >
                <Typography
                  component="h1"
                  variant="h4"
                  sx={{
                    fontWeight: 'bold',
                    letterSpacing: '0.5px',
                    mb: 2, // Added margin below for spacing
                  }}
                >
                  Sign in
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    InputLabelProps={{ style: { color: '#b0bec5' } }} // Label color adjusted for dark background
                    InputProps={{
                      style: { backgroundColor: '#2c303b', color: '#fff' }, // Input field color in line with theme
                    }}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    InputLabelProps={{ style: { color: '#b0bec5' } }} // Label color adjusted for dark background
                    InputProps={{
                      style: { backgroundColor: '#2c303b', color: '#fff' }, // Input field color
                    }}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    sx={{ color: '#b0bec5' }} // Lighter label color to match the theme
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      backgroundColor: "#066645", // Custom button color to match overall theme
                      '&:hover': {
                        backgroundColor: '#093825', // Slightly darker on hover
                      },
                    }}
                  >
                    Sign In
                  </Button>
                  <Grid container justifyContent="center">
                    <Grid item>
                      <Link href="#" variant="body2" sx={{ color: '#b0bec5' }}>
                        Forgot password?
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Tooltip from '@mui/material/Tooltip';


const Header = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ }}
          >
            <WorkHistoryIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Resume Builder
          </Typography>
          
           <Tooltip title="We help you craft professional, job-winning resumes in minutes. Our AI-powered builder offers expert templates, real-time suggestions, and tailored guidance to help you land your dream job faster." placement="bottom-start">
            <Button sx={{color:"white"}}> ABOUT US</Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Header

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useConvexAuth } from 'convex/react'
import { SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'

export const MenuBar = () => {
  const { isAuthenticated } = useConvexAuth()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MenUI
          </Typography>
          {isAuthenticated ? (
            <>  
              <UserButton />
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
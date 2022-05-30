import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import avatarImg from "../../Assets/avatar.jpg";
import logoImg from "../../Assets/logo.png";


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.15),

  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '50%',

  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const AvatarWrapper = styled('div')(({ theme }) => ({
marginLeft:'55px',
width:'147px',
height:'50px',
fontSize:'20px'

}));

const Text = styled("div")(({ theme }) => ({
marginLeft:'120px',
fontSize:'11px',
marginTop:'25px'
  
  }))


export default function SearchAppBar() {
  const handleOpenUserMenu = () => {

  }


  return (
      <Box sx={{ flexGrow: 1 } }>
        <AppBar position="static">
          <Toolbar sx={{backgroundColor: ' #F5F5F5',
          }} >
          

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
             <AvatarWrapper>
            <img alt="Remy Sharp"  src={logoImg} width='147px' height='50px'
             top='11px' marginLeft='95px'
             Blend='Darken'  
            />
              </AvatarWrapper>
            </Typography>
            
            <Search sx = {{marginRight : '4rem'}}>
        
              <SearchIconWrapper sx={{backgroundColor:'blue'}} >
                <SearchIcon/>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ 'aria-label': 'search'}}
                sx = {{ backgroundColor: ' #EAEAEA;', Blend:'Pass through'}}
               
              />
            </Search>

            <Box sx={{ flexGrow: 0}}>
              <Tooltip title="Open settings">
             
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                
                  <Avatar alt="Remy Sharp" src={avatarImg} />
                  
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
        <Text>
     <h1>&#8592;Applicants</h1>
     </Text>
      </Box>
      
      );
}

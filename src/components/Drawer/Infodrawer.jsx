import React from 'react'
import { Drawer, Box, Typography, styled } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from './Profile';

const drawerStyle = {
    left: 20,
    top: 15,
    height: '96%',
    width: '450px',
    boxShadow: 'none',


}
const Header = styled(Box)`
     background:#008069;
     height:107px;
     color:#FFFF;
     display:flex;

     &>svg, &>p{
        margin-top:auto;
        padding:15px;
        font-weight:600;
     }
     &>p{
        font-size:18px;
     }

`
const Component = styled(Box)`

  background:#ededed;
  height:85%;

`

export default function Infodrawer({ open, setopen }) {

    const handleclose = () => {
        setopen(false)
    }

    return (
        <Drawer open={open} onClose={handleclose} PaperProps={{ sx: drawerStyle }} style={{ zIndex: 1500 }}>
            <Header>
                <ArrowBackIcon onClick={() => { handleclose() }} />
                <Typography>Profile</Typography>
            </Header>
            <Component>
                <Profile />
            </Component>
        </Drawer>
    )
}

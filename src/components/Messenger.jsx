
import { AppBar, Toolbar, styled, Box } from "@mui/material"
import React from 'react'
import LoginDialouge from './account/LoginDialouge'


const Component = styled(Box)`
        height:100vh;
        background:#DCDCDC;
`

const Header = styled(AppBar)`
       height:220px;
       background-color:#00bfa5;
       box-shadow:none;
`

export default function Messenger() {
    return (
        <Box>
            <Header>

                <Toolbar>
                    <LoginDialouge />
                </Toolbar>

            </Header>

        </Box>

    )
}

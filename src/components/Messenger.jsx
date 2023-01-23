
import { AppBar, Toolbar, styled, Box } from "@mui/material"
import React, { useContext } from 'react'
import LoginDialouge from './account/LoginDialouge'
import Chatdialouge from "./chat/Chatdialouge"
import { AccountContext } from "./context/AccountProvider"


const Component = styled(Box)`
        height:100vh;
        background:#DCDCDC;
`

const LoginHeader = styled(AppBar)`
       height:220px;
       background-color:#01a885;
       box-shadow:none;
`
const ChatHeader = styled(AppBar)`
  height:125px;
       background-color:#00A884;
       box-shadow:none;
`
export default function Messenger() {
    const { account } = useContext(AccountContext)
    return (
        <Component>
            {
                account ?
                    <>
                        <ChatHeader>

                            <Toolbar>

                            </Toolbar>

                        </ChatHeader>
                        <Chatdialouge />
                    </> :
                    <>
                        <LoginHeader>

                            <Toolbar>

                            </Toolbar>

                        </LoginHeader>
                        <LoginDialouge />

                    </>

            }

        </Component>

    )
}

import { Dialog, Box, Typography, List, ListItem, styled } from '@mui/material'
import { qrCodeImage } from '../../constants/data'
import React from 'react'
import { GoogleLogin } from '@react-oauth/google';

const Qrcode = styled('img')({
    height: 264,
    width: 264,
    margin: '50px 0 0 50px'
})

const Component = styled(Box)`
  display:flex;
`

const Container = styled(Box)`
  padding:56px 0px 56px 56px;
`
const Title = styled(Typography)`
font-size:26px;
font-weight:200;
color:#525252;
font-family:inherit;
margin-bottom:25px;
`

const Styled = styled(List)`
      &>li{
        padding:0;
        margin-top:15px;
        font-size:18px;
        line-height:28px;
        color:#4a4a4a;
      }
`
const dialogStyle = {
    height: '96%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShawdow: 'none',
    overflow: 'hidden'
}

export default function LoginDialouge() {
    const onLoginSuccess = (res) => {
        console.log(res)
    }

    const onLoginError = (err) => {
        console.log('errr', err)

    }

    return (
        <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
            <Component>
                <Container>
                    <Title> To use Whatsapp on your computer:</Title>
                    <Styled >
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu Settings and select WhatsApp Web </ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </Styled>
                </Container>
                <Box style={{ position: 'relative' }} >
                    <Qrcode src={qrCodeImage} alt="qrcode" />
                    <Box style={{ position: 'absolute', top: '50%', transform: 'translateX(50%)' }}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError} />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}

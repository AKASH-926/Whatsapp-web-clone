import { Dialog } from '@mui/material'
import React from 'react'

const dialogStyle = {
    height: '96%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    boxShawdow: 'none',
    overflow: 'none'
}

export default function LoginDialouge() {

    return (
        <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
            hello
        </Dialog>
    )
}

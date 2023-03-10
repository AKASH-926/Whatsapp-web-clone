import React, { useContext, useState } from 'react'
import { Box, styled } from '@mui/material'
import { AccountContext } from '../../context/AccountProvider'
import { Chat as MessageIcon } from '@mui/icons-material'
import HeaderMenu from './HeaderMenu'
import Infodrawer from '../../Drawer/Infodrawer'
const Component = styled(Box)`
  height:44px;
  background:#ededed;
  padding:8px 16px;
  display:flex;
  align-items: center;

`
const Wrapper = styled(Box)`
      margin-left:auto;

      &>*{
        margin-left:2px;
        padding:8px;
        color:#000;
      }
      & :first-child{
        font-size:22px;
        margin-right:8px;
        margin-top:3px;
      }
`
const Image = styled('img')({
  height: 40,
  width: 40,
  borderRadius: '50%'
})
export default function Header() {
  const { account } = useContext(AccountContext)
  const [opendrawer, setopendrawer] = useState(false)
  const toggledrawer = () => {
    setopendrawer(true)
  }
  return (
    <>
      <Component>
        <Image src={account.picture} alt="dp" onClick={() => toggledrawer()} />
        <Wrapper>
          <MessageIcon />
          <HeaderMenu setopendrawer={setopendrawer} />

        </Wrapper>

      </Component>
      <Infodrawer open={opendrawer} setopen={setopendrawer} />
    </>

  )
}

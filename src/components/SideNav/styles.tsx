import styled from 'styled-components';

import { 
  FaBars,
  FaUnlock,
  FaRegStickyNote,
  FaUserSecret,
  FaCreditCard,
  FaAddressCard,
  FaShareAlt
} from 'react-icons/fa';

import { 
  IoIosSearch,
  IoMdPulse ,
  IoIosSettings,
  IoIosGlobe
} from 'react-icons/io'

export const Container = styled.div`
  grid-area: SN;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100vh;

  background-color: var(--color-background-sidenav-primary);

`;

export const Search = styled.div`
    width: 100%;
    height:71px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 14px;

    input{
      height: 100%;
      color: var(--color-text-sidenav);
      font-size: 1rem;
      font-weight: 300;
      background-color: var(--color-background-sidenav);
      border: none;
      outline: none;
    }
`
export const NavList = styled.nav`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
`

export const SecureTools = styled(NavList)`
  margin-top: 40px;
  margin-bottom: 100%;

  h4{
    width: 100%;
    padding: 10px 0 10px 14px;
    color: var(--color-text-sidenav-secundary);
    font-size: 0.6rem;
    font-weight: lighter;
    text-transform: uppercase;
  }
`

export const NavItem = styled.a`
  width: 100%;

  padding: 14px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  
  cursor: pointer;

  transition: 0.4s;

  span{
    color: var(--color-text-sidenav-primary);
    font-family: Helvetica ,Arial ,sans-serif;
    font-size: 1.2rem;
    align-content: center;
  }

  .end {
   align-self: flex-end;
  }

  &:hover{
    background-color: var(--color-background-sidenav-secundary);
  }

`

export const HamburguerIcon = styled(FaBars)`
    width: 20px;
    height: 20px;

    color: var(--color-text-sidenav);
`

export const  SearchIcon = styled(IoIosSearch)`
    width: 20px;
    height: 20px;

    color: var(--color-text-sidenav);

    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
`

export const PasswordIcon = styled(FaUnlock)`
    width: 20px;
    height: 20px;

    color: var(--color-text-sidenav);
`
export const NoteIcon = styled(FaRegStickyNote)`
  ${PasswordIcon}
`

export const UserIcon = styled(FaUserSecret)`
  ${PasswordIcon}
`

export const PaymentsIcon = styled(FaCreditCard)`
  ${PasswordIcon}
`

export const IDIcon = styled(FaAddressCard)`
  ${PasswordIcon}
`

export const ShareIcon = styled(FaShareAlt)`
  ${PasswordIcon}
`
export const PulseIcon = styled(IoMdPulse)`
  ${PasswordIcon}
`
export const SettingIcon = styled(IoIosSettings)`
  ${PasswordIcon}
`
export const WebIcon = styled(IoIosGlobe)`
  ${PasswordIcon}
`

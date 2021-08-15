import React from 'react';

import { 
    Container,
    Search,
    HamburguerIcon,
    SearchIcon,
    NavList,
    NavItem,
    PasswordIcon,
    NoteIcon,
    UserIcon,
    PaymentsIcon,
    IDIcon,
    ShareIcon,
    SecureTools,
    PulseIcon,
    SettingIcon,
    WebIcon
} from './styles';

const SideNav: React.FC = () => {
  return(
      <Container>
          <Search>
            <HamburguerIcon/>
            <input type="text" placeholder="Search Dashlane" />
            <span><SearchIcon/></span>
          </Search>
          <NavList>
            <NavItem>
                <PasswordIcon/>
                <span>Passwords</span>
            </NavItem>
            <NavItem>
                <NoteIcon/>
                <span>Secure Notes</span>
            </NavItem>
            <NavItem>
                <UserIcon/>
                <span>Personal Info</span>
            </NavItem>
            <NavItem>
                <PaymentsIcon/>
                <span>Payments</span>
            </NavItem>
            <NavItem>
                <IDIcon/>
                <span>IDs</span>
            </NavItem>
            <NavItem>
                <ShareIcon/>
                <span>Sharing Center</span>
            </NavItem>

            <SecureTools>
                <h4>Security tools</h4>
                <NavItem>
                    <PulseIcon/>
                    <span>Password Health</span>
                </NavItem>
                <NavItem>
                    <WebIcon/>
                    <span>Dark Web Monitoring</span>
                </NavItem>
            </SecureTools>

            <NavItem className="end">
                <SettingIcon/>
                <span>My account</span>
            </NavItem>
          </NavList>
      </Container>
  );
}

export default SideNav;
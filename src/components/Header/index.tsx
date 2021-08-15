import React from 'react';

import Button from '../Button';

import { 
    Container,
    PlusIcon,
    ShareIcon,
    ChangeAllIcon,
    BellIcon
} from './styles';

const Header: React.FC = () => {
  return(
      <Container>
          <Button typeColor="primary" text="Add new">
              <PlusIcon/>
          </Button>
          <Button text="Share">
              <ShareIcon color="#0e353d"/>
          </Button>
          <Button text="Change Passwords">
              <ChangeAllIcon color="#0e353d"/>
          </Button>
          <BellIcon color="#0e353d"/>
      </Container>
  );
}

export default Header;
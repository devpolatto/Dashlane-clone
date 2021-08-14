import React from 'react';

import Button from '../Button';

import { 
    Container,
    PlusIcon
} from './styles';

const Header: React.FC = () => {
  return(
      <Container>
        <Button text="Add new">
            <PlusIcon/>
        </Button>
      </Container>
  );
}

export default Header;
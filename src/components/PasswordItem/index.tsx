import React from 'react';

import { 
    Container,
    InfoPreview,
    Logo,
    Site
} from './styles';

interface PasswordProps {
    email?: string;
    login?: string;
    password?: string;
    website?: string;
    name: string;
    category?: string;
    note?: string
}

const PasswordItem: React.FC<PasswordProps> = ({
    email,
    login,
    password,
    website,
    name,
    category,
    note
}: PasswordProps) => {
  return(
      <Container>
          <InfoPreview>
            <Logo>
                <h4>{name[0]+name[1]}</h4>
            </Logo>
          </InfoPreview>
          <Site>
              <h2>{website}</h2>
              <h3>{email || login}</h3>
          </Site>
      </Container>
  );
}

export default PasswordItem;
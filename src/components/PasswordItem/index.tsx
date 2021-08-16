import React from 'react';

import { 
    Container,
    InfoPreview,
    Logo,
    Site,
    Status,
    Options,
    FaExternalLinkAltIcon,
    FaEllipsisHIcon
} from './styles';

interface PasswordProps {
    email?: string;
    login?: string;
    password?: string;
    website?: string;
    name: string;
    category?: string;
    note?: string,
    lastUsed?: string;
}

const PasswordItem: React.FC<PasswordProps> = ({
    email,
    login,
    password,
    website,
    name,
    category,
    note,
    lastUsed
}: PasswordProps) => {
  return(
      <Container>
            <InfoPreview>
                <Logo>
                    <h4>{name[0]+name[1]}</h4>
                </Logo>
                <Site>
                    <h2>{website}</h2>
                    <h3>{email || login}</h3>
                </Site>
            </InfoPreview>
            <Status>
                <h2>{category || 'No category'}</h2>
                <h2>{lastUsed || 'Not used'}</h2>
            </Status>
            <Options>
                <button className="show">
                    <FaExternalLinkAltIcon/>
                    <h2>Go to website</h2>
                </button>
                <button>
                    <FaEllipsisHIcon/>
                </button>
            </Options>
      </Container>
  );
}

export default PasswordItem;
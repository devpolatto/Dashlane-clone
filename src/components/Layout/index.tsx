import React, { ReactNode } from 'react';

import { GridContainer } from './styles';

interface TypeGrid{
  children: ReactNode;
}

const Layout: React.FC<TypeGrid> = (props) => {
  return(
      <GridContainer>
        {props.children}
      </GridContainer>
  );
}

export default Layout;
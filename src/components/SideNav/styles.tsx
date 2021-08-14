import styled from 'styled-components';

import { FaBars } from 'react-icons/fa';

export const Container = styled.div`
  grid-area: SN;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  background-color: var(--color-background);

  border-right: 1px solid var(--color-border-right);
`;

export const HamburguerIcon = styled(FaBars)`
    width: 20px;
    height: 20px;

    color: var(--color-text-theme);
`
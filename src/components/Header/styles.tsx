import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

export const Container = styled.div`
    grid-area: HR;

    width: 100%;
    height: 100%;
    padding: 0 32px;

    display: flex;
    align-items: center;

    border-bottom: 1px solid var(--color-border-right);
`;

export const PlusIcon = styled(FaPlus)`
    width: 20px;
    height: 20px;

    color: var(--color-text-theme);
`
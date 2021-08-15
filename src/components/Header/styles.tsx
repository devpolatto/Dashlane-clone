import styled from 'styled-components';
import { 
    FaPlus ,
    FaShareAlt,
    FaRedoAlt,
    FaRegBell
} from 'react-icons/fa';


export const Container = styled.div`
    grid-area: HR;

    width: 100%;
    height: 100%;
    padding: 0 32px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    position: relative;

    >:nth-child(-n + 2){
        margin-right: 8px;
    }

`;

export const PlusIcon = styled(FaPlus)`
    width: 20px;
    height: 20px;

    color: var(--color-text-theme);
`
export const ShareIcon = styled(FaShareAlt)`
    width: 20px;
    height: 20px;
`
export const ChangeAllIcon = styled(FaRedoAlt)`
    ${ShareIcon}
`
export const BellIcon = styled(FaRegBell)`
    width: 40px;
    height: 40px;

    padding: 8px;

    position: absolute;
    right: 32px;

    &:hover{
        border: 1px solid #b7b7b7;
        border-radius: 4px;
    }
`
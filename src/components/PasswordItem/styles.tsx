import styled from 'styled-components';

import { 
    FaExternalLinkAlt,
    FaEllipsisH
 } from 'react-icons/fa'

export const Container = styled.a`
    width: 100%;
    height: 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-top: 1px solid #dddddd;
    cursor: pointer;

    position: relative;

    :hover{
        .show{
            display: flex;
        }
    }
`;

export const InfoPreview = styled.div`
    height: 100%;
    max-width: 1000px;
    
    display: flex;
    align-items: center;
`
export const Logo = styled.div`
    width: 48px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 4px;

    background-color: rgb(71, 140, 157);
    color: var(--color-text-primary);

    margin-right: 14px;
`
export const Site = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    h2{
        font-size: 1rem;
        color: #212d37;
    }

    h3{
        font-size: 0.75rem;
        color: #615b57;
    }
`

export const Status = styled.div`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    position: absolute;
    left: 30%;

    h2{
        font-size: 1rem;
        color: #615b57;
    }
`

export const Options = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;


    button:nth-child(1){
        font-size: 16px;
        color: var(--color-text-button-secundary);
        display: none;
        align-items: center;
        gap: 10px;

        padding: 10px 16px;

        background-color: transparent;
        border: none;
        outline: none;

        h2{
            font-size: 1rem;
            color: var(--color-text-button-secundary);
        }

        :hover{
            border: 1px solid#BED5DA;
            border-radius: 4px;
        }
    }

    button:nth-child(2){
        display: flex;
        align-items: center;
        padding: 10px 10px;

        background-color: transparent;
        border: none;
        outline: none;

        :hover{
            border: 1px solid#BED5DA;
            border-radius: 4px;
        }
    }
`
export const FaExternalLinkAltIcon = styled(FaExternalLinkAlt)`
    width: 20px;
    height: 20px;
    color: var(--color-text-button-secundary);
`

export const FaEllipsisHIcon = styled(FaEllipsisH)`
    width: 12px;
    height: 12px;
`


import styled from 'styled-components';
import { ReactNode } from 'react';

interface ButtonProps  {
    typeColor?: string;
    children?: ReactNode
}

export const ButtonStyled = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    height: 40px;
    width: auto;

    padding: 10px 16px;
    border: none;
    border-radius: 4px;

    display: flex;
    gap: 8px;
    
    background-color: ${props => props.typeColor === 'primary'
        ? 'var(--color-button-primary)'
        : 'var(--color-button-secundary)'
    };
    border: 1px solid var(--color-button-primary);
    color: ${ props => props.typeColor === 'primary'
        ? 'var(--color-text-button-primary)'
        : 'var(--color-text-button-secundary)'
    };

    transition: 0.2s;

    &:hover{
        background-color: ${ props => props.typeColor === 'primary'
            ? '#093E49'
            : '#D8E6E9'
        };
    }
`;

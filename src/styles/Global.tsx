import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    :root {
        --color-background: #181818;   
        --color-border-right: #b7b7b7;     
        --color-text-theme: #ffffff;
        --color-background-button: #53b2d9;
    }
  *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Roboto', 'Poppins', sans-serif;
        background-color: var(--color-background);
        width: 100%;
        height: 100%;
    }
    body #__next{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    ul{
        list-style: none;
    }
`;

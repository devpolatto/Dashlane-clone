import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    :root {
        --color-background: #fff;;   
        --color-background-sidenav-primary: #d9e6e9;
        --color-background-sidenav-secundary: #BED5DA;
        --color-text-sidenav-primary: #0e353d;
        --color-text-sidenav-secundary: #A4C4CB;
        --color-button-primary: #0e6476;
        --color-button-secundary: #fff;
        --color-text-button-primary: #fff;
        --color-text-button-secundary: #0e353d;
        --color-text-primary: #fff;
        --color-border-right: #b7b7b7;     
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

    ul{
        list-style: none;
    }
`;

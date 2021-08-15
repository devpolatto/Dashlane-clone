import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid;

    grid-template-columns: 320px auto;
    grid-template-rows: 75px 100%;

    // SN -> Side Nav
    // HR -> Header
    // CT -> Content
    grid-template-areas: 
        'SN HR'
        'SN CT';

    height: 100vh;
    width: 100vw;
 
`;

import styled from 'styled-components';

export const Container = styled.a`
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;

    border-top: 1px solid #b7b7b7;
    cursor: pointer;
`;

export const InfoPreview = styled.div`
    height: 100%;
    
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

    margin-right: 8px;
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
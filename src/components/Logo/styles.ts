import styled from 'styled-components';

export const Cont = styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    @media only screen and (min-width: 750px) {
        height: 26px;
    }
    @media only screen and (min-width: 900px) {
        height: 32px;
    }
    @media only screen and (min-width: 1000px) {
        height: 44px;
    }
    @media only screen and (min-width: 1100px) {
        height: 48px;
    }
`;

export const Icon = styled.img`
    width: 100%;
`;

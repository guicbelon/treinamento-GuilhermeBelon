import styled from 'styled-components';

export const Cont = styled.div`
    height: 64px;
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

export const Icon = styled.img`
    @media only screen and (min-width: 750px) {
        height: 52px;
    }
    @media only screen and (min-width: 900px) {
        height: 58px;
    }
    @media only screen and (min-width: 1100px) {
        height: 64px;
    }
`;

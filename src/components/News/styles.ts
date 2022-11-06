import styled from 'styled-components';

export const Cont = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

export const Icon = styled.img`
    @media only screen and (min-width: 750px) {
        width: 96px;
    }
    @media only screen and (min-width: 900px) {
        width: 112px;
    }
    @media only screen and (min-width: 1000px) {
        width: 120px;
    }
    @media only screen and (min-width: 1100px) {
        width: 128px;
    }
`;

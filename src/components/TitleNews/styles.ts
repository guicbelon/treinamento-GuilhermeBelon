import styled from 'styled-components';

export const Cont = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const Icon = styled.img`
    @media only screen and (min-width: 750px) {
        width: 120px;
        height: 18px;
    }
    @media only screen and (min-width: 900px) {
        width: 140px;
        height: 22px;
    }
    @media only screen and (min-width: 1000px) {
        width: 160px;
        height: 26px;
    }
    @media only screen and (min-width: 1100px) {
        width: 180px;
        height: 30px;
    }
`;

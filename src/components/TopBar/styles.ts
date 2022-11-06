import styled from 'styled-components';

export const Cont = styled.div`
    border-radius: 16px;
    height: 64px;
    width: 100%;
    background: rgba(93, 89, 102, 0.5);
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 6px;
    padding: 16px;
`;

export const Prof = styled.img`
    cursor: pointer;
    @media only screen and (min-width: 750px) {
        height: 20px;
    }
    @media only screen and (min-width: 900px) {
        height: 22px;
    }
    @media only screen and (min-width: 1000px) {
        height: 24px;
    }
    @media only screen and (min-width: 1100px) {
        height: 28px;
    }
`;

export const Search = styled.img`
    cursor: pointer;
    width: 100%;
    @media only screen and (min-width: 750px) {
        height: 20px;
    }
    @media only screen and (min-width: 900px) {
        height: 22px;
    }
    @media only screen and (min-width: 1000px) {
        height: 24px;
    }
    @media only screen and (min-width: 1100px) {
        height: 28px;
    }
`;

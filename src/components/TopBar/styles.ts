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

export const MyProfile = styled.div`
    cursor: pointer;
    height: 64px;
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 6px;
`;

export const MPtext = styled.div`
    width: 80px;
    font-weight: 600;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.5);
`;

export const Prof = styled.img`
    cursor: pointer;
    @media only screen and (min-width: 750px) {
        height: 20px;
        border-radius: 10px;
    }
    @media only screen and (min-width: 900px) {
        height: 22px;
        border-radius: 11px;
    }
    @media only screen and (min-width: 1000px) {
        height: 24px;
        border-radius: 12px;
    }
    @media only screen and (min-width: 1100px) {
        height: 32px;
        border-radius: 16px;
    }
`;

export const Search = styled.img`
    cursor: pointer;
    width: 100%;
    @media only screen and (min-width: 750px) {
        height: 16px;
    }
    @media only screen and (min-width: 900px) {
        height: 18px;
    }
    @media only screen and (min-width: 1000px) {
        height: 22px;
    }
    @media only screen and (min-width: 1100px) {
        height: 26px;
    }
    @media only screen and (min-width: 1200px) {
        height: 30px;
    }
`;

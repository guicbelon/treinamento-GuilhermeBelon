/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

interface likeProps {
    selected: boolean;
}

interface piuProps {
    myPiu: boolean;
}

export const Cont = styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    border: 1px solid;
    border-radius: 16px;
    color: white;
`;

export const Top = styled.div`
    height: 64px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    padding-left: 16px;
`;

export const Icon = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 20px;
`;

export const Nm = styled.div`
    font-family: 'Poppins';
    font-style: bold;
    font-weight: 600;
    font-size: 24px;
    align-items: center;
    color: white;
`;
export const Delete = styled.div<piuProps>`
    height: 64px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: right;
    padding-right: 24px;
`;

export const DeleteIcon = styled.div<piuProps>`
    height: 60px;
    width: 80px;
    background-size: 100% 56px;
    background-position: right;
    background-repeat: no-repeat;
    background-image: ${({ myPiu }) =>
        myPiu ? 'url(/assets/delete.svg)' : 'none'};
    cursor: ${({ myPiu }) => (myPiu ? 'pointer' : 'normal')};
`;

export const Mid = styled.div`
    width: 90%;
    border: solid;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Poppins';
    font-style: bold;
    align-items: center;
    color: white;
    border: 1px solid;
    border-radius: 16px;
    padding: 8px;
    font-weight: 600px;
    @media only screen and (min-width: 750px) {
        font-size: 20px;
    }
    @media only screen and (min-width: 900px) {
        font-size: 24px;
    }
    @media only screen and (min-width: 1000px) {
        font-size: 28px;
    }
    @media only screen and (min-width: 1100px) {
        font-size: 32px;
    }
`;

export const Low = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 8px;
    gap: 4px;
`;

export const LBut = styled.div`
    font-weight: 600;
    height: 56px;
    font-size: 20px;
    border: 1px solid;
    border-radius: 16px;
    color: white;
    padding-left: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media only screen and (min-width: 750px) {
        width: 176px;
    }
    @media only screen and (min-width: 900px) {
        width: 184px;
    }
    @media only screen and (min-width: 1000px) {
        width: 192px;
    }
    @media only screen and (min-width: 1100px) {
        width: 200px;
    }
`;

export const LkBut = styled.img<likeProps>`
    height: 48px;
    width: 48px;
    padding: 8px;
    border-radius: 24px;
    background-color: ${({ selected }) => (selected ? 'red' : 'none')};
`;

export const LButTxt = styled.div`
    font-weight: 600;
    font-size: 20px;
    width: 80%;
    color: white;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const LnumTxt = styled.div`
    font-weight: 600;
    font-size: 24px;
    width: 200px;
    color: white;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

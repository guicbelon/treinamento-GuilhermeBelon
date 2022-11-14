import styled from 'styled-components';

export const MainBody = styled.body`
    padding-top: 8px;
    width: 100%;
    margin: 0;
    border: 0;
    background: rgb(248, 158, 250);
    background: linear-gradient(
        90deg,
        rgba(248, 158, 250, 1) 0%,
        rgba(148, 165, 217, 1) 38%,
        rgba(241, 103, 205, 1) 100%
    );
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: top;
`;

export const LoginFeed = styled.div`
    width: 48%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: top;
    position: absolute;
    left: 26%;
`;

export const Hello = styled.div`
    height: 72px;
    width: 100%;
    display: flex;
    flex-direction: collumn;
    justify-content: center;
    align-items: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 116px;
    text-align: center;
    color: #ffffff;
    padding-top: 8px;
`;

export const InptInfo = styled.div`
    //height: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // border: solid;
`;

export const Text = styled.div`
    width: 100%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
    display: flex;
    align-items: flex-start;
    padding-left: 10%;
    padding-top: 20px;
`;

export const Bottom = styled.div`
    //height: 80px;
    // padding-top: 24px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Inpt = styled.input`
    border-radius: 16px;
    padding-left: 12px;
    opacity: 100%;
    height: 48px;
    align-items: center;
    width: 80%;
    border-radius: 24px;
    display: flex;
    background: none;
    font-weight: 600;
    font-size: 16px;
    font-style: white;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const GF = styled.img`
    width: 64%;
    padding-bottom: 12px;
`;

export const ImageBut = styled.img`
    cursor: pointer;
    width: 80%;
    border-radius: 24px;
    height: 48px;
    background-color: white;
`;

export const BirdDiv = styled.div`
    left: 80%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    position: absolute;
    width: 20%;
    height: 100%;
`;

export const ErrorMessage = styled.div`
    height: 64px;
    width: 80%;
    align-items: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: rgb(180, 3, 3);
    display: flex;
    justify-content: center;
`;

export const Bird = styled.img`
    width: 100px;
    height: 100px;
    padding-bottom: 0;
    bottom: 0px;
`;

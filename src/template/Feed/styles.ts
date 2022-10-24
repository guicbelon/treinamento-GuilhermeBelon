import styled from 'styled-components';

export const MainBody = styled.body`
    padding-top: 28px;
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

export const LeftBar = styled.div`
    width: 12%;
    height: 80vh;
    position: fixed;
    top: 28px;
    left: 12%;
    padding-top: 0px;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`;

export const News = styled.div`
    border-radius: 16px;
    background: rgba(93, 89, 102, 0.5);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const Tnews = styled.div`
    height: 56px;
    width: 100%;
`;

export const Info = styled.div`
    gap: 16px;
    top: 28px;
    width: 48%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    left: 26%;
`;
export const Inpt = styled.div`
    border: 1px solid;
    border-radius: 16px;
    background: rgba(93, 89, 102, 0.5);
    height: 64px;
    align-items: center;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-color: white;
`;

export const Ipt = styled.input`
    padding-left: 8px;
    border-radius: 16px;
    opacity: 100%;
    height: 90%;
    align-items: center;
    width: 80%;
    display: flex;
    background: none;
    border: 0px;
    font-weight: 600;
    font-size: 20px;
    font-style: white;
`;

export const Poster = styled.img`
    height: 48x;
    cursor: pointer;
    padding-right: 8px;
`;

export const PosterImg = styled.img`
    height: 48px;
    padding-left: 8px;
`;

export const Feed = styled.div`
    gap: 36px;
    padding: 8px;
    border-radius: 16px;
    background: rgba(93, 89, 102, 0.5);
    top: 28px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`;

export const Nav = styled.div`
    border-radius: 16px;
    background: rgba(93, 89, 102, 0.5);
    width: 8%;
    height: 75vh;
    border-color: red;
    position: fixed;
    top: 28px;
    left: 76%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;
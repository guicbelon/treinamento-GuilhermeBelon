import styled from 'styled-components';

interface Props {
    selected: boolean;
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
`;

export const Icon = styled.img`
    height: 40px;
    padding-left: 16px;
`;

export const Nm = styled.div`
    font-family: 'Poppins';
    font-style: bold;
    font-weight: 600;
    font-size: 24px;
    align-items: center;
    color: white;
`;

export const Mid = styled.div`
    width: 90%;
    border: solid;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Poppins';
    font-style: bold;
    font-weight: 600;
    font-size: 32px;
    align-items: center;
    color: white;
    border: 1px solid;
    border-radius: 16px;
    padding: 8px;
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
`;

export const LBut = styled.div`
    font-weight: 600;
    height: 56px;
    font-size: 20px;
    width: 200px;
    border: 1px solid;
    border-radius: 16px;
    color: white;
    padding-left: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const LkBut = styled.img<Props>`
    height: 48px;
    width: 48px;
    padding: 8px;
    border-radius: 24px;
    background-color: ${({ selected }) => (selected ? 'red' : 'none')};
`;

export const ShBut = styled.img`
    height: 48px;
    width: 48px;
    padding: 8px;
    border-radius: 24px;
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

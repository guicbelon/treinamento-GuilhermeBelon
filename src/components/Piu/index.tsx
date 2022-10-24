import * as S from './styles';

type NewType = {
    image: string;
    name: string;
    piu: string;
    selected: boolean;
};

export type PiuProps = NewType;

const PiuComponent: React.FC<PiuProps> = ({ image, name, piu, selected }) => (
    <S.Cont>
        <S.Top>
            <S.Icon src={image} />
            <S.Nm>{name}</S.Nm>
        </S.Top>
        <S.Mid>{piu}</S.Mid>
        <S.Low>
            <S.LBut>
                <S.LkBut selected={selected} src="/assets/heart.svg" />
                <S.LButTxt> Curtir </S.LButTxt>
            </S.LBut>
            <S.LBut>
                <S.ShBut src="/assets/share.svg" />
                <S.LButTxt> Compartilhar </S.LButTxt>
            </S.LBut>
        </S.Low>
    </S.Cont>
);

export default PiuComponent;

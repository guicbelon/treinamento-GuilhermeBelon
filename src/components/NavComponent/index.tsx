import * as S from './styles';

export type NavProps = {
    image: string;
};

const NavComponent: React.FC<NavProps> = ({ image }) => (
    <S.Cont>
        <S.Icon src={image} />
    </S.Cont>
);

export default NavComponent;

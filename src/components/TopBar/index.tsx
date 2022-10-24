import * as S from './styles';

// eslint-disable-next-line @typescript-eslint/ban-types
export type TBarProps = {};

// eslint-disable-next-line no-empty-pattern
const TopBarComponent: React.FC<TBarProps> = ({}) => (
    <S.Cont>
        <S.Prof src="/assets/myprofile.svg" />
        <S.Search src="/assets/searchbar.svg" />
    </S.Cont>
);

export default TopBarComponent;

import * as S from './styles';

// eslint-disable-next-line @typescript-eslint/ban-types
export type LogoProps = {};

// eslint-disable-next-line no-empty-pattern
const LogoComponent: React.FC<LogoProps> = ({}) => (
    <S.Cont>
        <S.Icon src="/assets/logo.svg" />
    </S.Cont>
);

export default LogoComponent;

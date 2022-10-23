import * as S from './styles';

// eslint-disable-next-line @typescript-eslint/ban-types
export type TNewProps = {};

// eslint-disable-next-line no-empty-pattern
const TNewComponent: React.FC<TNewProps> = ({}) => (
    <S.Cont>
        <S.Icon src="/assets/titlenews.svg" />
    </S.Cont>
);

export default TNewComponent;

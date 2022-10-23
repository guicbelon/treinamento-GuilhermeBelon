import * as S from './styles';

export type NewProps = {
    image: string;
};

const NewComponent: React.FC<NewProps> = ({ image }) => (
    <S.Cont>
        <S.Icon src={image} />
    </S.Cont>
);

export default NewComponent;

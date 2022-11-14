import useAuth from 'hooks/useAuth';
import * as S from './styles';

// eslint-disable-next-line no-empty-pattern
function TopBarComponent() {
    const { userLogged } = useAuth();
    return (
        <S.Cont>
            <S.MyProfile>
                <S.Prof src={userLogged.avatar} />
                <S.MPtext>{userLogged.username}</S.MPtext>
            </S.MyProfile>
            <S.Search src="/assets/searchbar.svg" />
        </S.Cont>
    );
}

export default TopBarComponent;

/* eslint-disable camelcase */
import { useState } from 'react';
import PiuServices from 'services/PiuServices';
import { PiuLike } from 'interfaces/PiuLike';
import { User } from 'interfaces/User';
import useAuth from 'hooks/useAuth';
import * as S from './styles';

type NewType = {
    piu: string;
    likes: Array<PiuLike>;
    piuId: string;
    user: User;
};

export type PiuProps = NewType;

function PiuComponent({ piu, likes, piuId, user }: PiuProps) {
    const [LikeLength, setLikeLength] = useState(likes.length);
    const { userLogged } = useAuth();

    function checkMyPiu() {
        if (user.id === userLogged.id) {
            return true;
        }
        return false;
    }
    const myPiu = checkMyPiu();

    function reload() {
        window.location.reload();
    }
    async function deleteThisPiu() {
        await PiuServices.deletePiu(piuId);
        reload();
    }
    async function likeThisPiu() {
        await PiuServices.likePiu(piuId);
    }

    function checkMyLike(): boolean {
        const givenLike = likes.find((e) => userLogged.id === e.userId);
        if (givenLike) {
            return true;
        }
        return false;
    }
    const [like, setlike] = useState(checkMyLike());
    function change_like() {
        if (like === false) {
            setlike(true);
            setLikeLength(LikeLength + 1);
        } else {
            setlike(false);
            setLikeLength(LikeLength - 1);
        }
        likeThisPiu();
    }

    return (
        <S.Cont>
            <S.Top>
                <S.Icon src={user.avatar} />
                <S.Nm>{user.username}</S.Nm>
                <S.Delete myPiu={myPiu}>
                    <S.DeleteIcon myPiu={myPiu} onClick={deleteThisPiu}>
                        {' '}
                    </S.DeleteIcon>
                </S.Delete>
            </S.Top>
            <S.Mid>{piu}</S.Mid>
            <S.Low>
                <S.LBut onClick={change_like}>
                    <S.LkBut selected={like} src="/assets/heart.svg" />
                    <S.LButTxt> Curtir </S.LButTxt>
                </S.LBut>
                <S.LnumTxt> {LikeLength} curtidas </S.LnumTxt>
            </S.Low>
        </S.Cont>
    );
}

export default PiuComponent;

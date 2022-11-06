/* eslint-disable camelcase */
import { useState } from 'react';
import PiuServices from 'services/PiuServices';
import { PiuLike } from 'interfaces/PiuLike';
import * as S from './styles';

// import {User} from 'interfaces/User';
const myId = 'a05afcf5-8e35-41fc-8225-39a8af015444';

type NewType = {
    photo: string;
    name: string;
    piu: string;
    likes: Array<PiuLike>;
    piuId: string;
    userId: string;
};

export type PiuProps = NewType;

function PiuComponent({ photo, name, piu, likes, piuId, userId }: PiuProps) {
    const [LikeLength, setLikeLength] = useState(likes.length);

    function checkMyPiu() {
        if (userId === myId) {
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
        const givenLike = likes.find((e) => myId === e.userId);
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
                <S.Icon src={photo} />
                <S.Nm>{name}</S.Nm>
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

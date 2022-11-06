/* eslint-disable @typescript-eslint/no-explicit-any */
import PiuServices from 'services/PiuServices';
import UserServices from 'services/UserServices';
import { User } from 'interfaces/User';
import { Piu } from 'interfaces/Piu';
import NavComponent from 'components/NavComponent';
import NewComponent from 'components/News';
import LogoComponent from 'components/Logo';
import TNewComponent from 'components/TitleNews';
import { useEffect, useState } from 'react';
import PiuComponent from 'components/Piu';
import TopBarComponent from 'components/TopBar';

import * as S from './styles';

function Feed() {
    const [valueInput, setValueInput] = useState('');
    const [Error, setError] = useState(false);
    const [piusArray, setPiusArray] = useState<Piu[]>([]);
    const [usersArray, setUsersArray] = useState<User[]>([]);

    // eslint-disable-next-line camelcase
    function UseInput(e: any): void {
        setValueInput(e.target.value);
        if (e.target.value.length > 140) {
            setError(true);
        } else {
            setError(false);
        }
    }

    const getPiusFunct = async () => {
        const response = await PiuServices.getPius();
        setPiusArray(response);
    };
    useEffect(() => {
        getPiusFunct();
    }, []);

    async function updateFeed() {
        const response2 = await PiuServices.getPius();
        setPiusArray(response2);
        getPiusFunct();
    }

    async function postPiu() {
        if (valueInput.length <= 140 && valueInput.length > 0) {
            await PiuServices.createPiu(valueInput);
            setValueInput('');
        }
        updateFeed();
    }

    useEffect(() => {
        const getUsersFunct = async () => {
            const response = await UserServices.getUsers();
            setUsersArray(response);
        };
        getUsersFunct();
    }, []);

    function GetUser({ userId }: { userId: string }): Array<any> {
        const userTofind = usersArray.find((e) => userId === e.id);
        return [userTofind?.avatar, userTofind?.username];
    }
    return (
        <S.MainBody>
            <S.LeftBar>
                <LogoComponent />
                <S.News>
                    <TNewComponent />
                    <NewComponent image="/assets/news1.svg" />
                    <NewComponent image="/assets/news2.svg" />
                    <NewComponent image="/assets/news3.svg" />
                </S.News>
            </S.LeftBar>
            <S.Info>
                <TopBarComponent />
                <S.Inpt>
                    <S.PosterImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHozIxtgJx0gbDdzgKy7hcRkDoP7houIjY65EDeY&s" />
                    <S.Ipt
                        type="text"
                        error={Error}
                        placeholder="O que você está pensando?"
                        value={valueInput}
                        // eslint-disable-next-line camelcase
                        onChange={UseInput}
                    />
                    <S.Poster src="/assets/to_post.svg" onClick={postPiu} />
                </S.Inpt>
                <S.Feed>
                    {piusArray.map((thisPiu: Piu) => {
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        const thisUser = GetUser({ userId: thisPiu.userId });
                        return (
                            <PiuComponent
                                photo={thisUser[0]}
                                name={thisUser[1]}
                                piu={thisPiu.text}
                                likes={thisPiu.likes}
                                piuId={thisPiu.id}
                                userId={thisPiu.userId}
                            />
                        );
                    })}
                </S.Feed>
            </S.Info>
            <S.Nav>
                <NavComponent image="/assets/group.svg" />
                <NavComponent image="/assets/library.svg" />
                <NavComponent image="/assets/games.svg" />
                <NavComponent image="/assets/settings.svg" />
                <NavComponent image="/assets/events.svg" />
            </S.Nav>
        </S.MainBody>
    );
}

export default Feed;

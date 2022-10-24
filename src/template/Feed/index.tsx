import NavComponent from 'components/NavComponent';
import NewComponent from 'components/News';
import LogoComponent from 'components/Logo';
import TNewComponent from 'components/TitleNews';
import TopBarComponent from 'components/TopBar';
import { useState } from 'react';
import PiuComponent from 'components/Piu';
import * as S from './styles';

// interface Piu_items {nome: string; piu: string; image: string;}

const Feed = () => {
    const [like] = useState(true);
    // const feed = []
    // function create_feed(){}
    // const [like, setlike] = useState(false);
    // function tolike() {
    //    setlike(true);
    // }
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
                    <S.PosterImg src="/assets/p1.svg" />
                    <S.Ipt placeholder="O que você está pensando?" />
                    <S.Poster src="/assets/to_post.svg" />
                </S.Inpt>
                <S.Feed>
                    <PiuComponent
                        image="/assets/p1.svg"
                        name="Pessoa 1"
                        piu="lasanhaaaaaaaaaaaaaaaaa é bom dms, slc! AQdorooooo"
                        selected={like}
                    />
                    <PiuComponent
                        image="/assets/p2.svg"
                        name="Pessoa 2"
                        piu="glrrr, algúem vendendo ingressos para a Nostalgia?????"
                        selected={false}
                    />
                    <PiuComponent
                        image="/assets/p3.svg"
                        name="Pessoa 3"
                        piu="nmrl, piupiwer eh bem melhor que twiteer..."
                        selected={false}
                    />
                    <PiuComponent
                        image="/assets/p4.svg"
                        name="Pessoa 4"
                        piu="eu não aguento mais cálculo 4!!!"
                        selected={false}
                    />
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
};

export default Feed;

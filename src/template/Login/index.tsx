import UserServices from 'services/UserServices';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as S from './styles';

function Login() {
    const [email, setEmail] = useState('');
    const [passw, setPassw] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function UseEmail(e: any): void {
        setEmail(e.target.value);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function Usepassw(e: any): void {
        setPassw(e.target.value);
    }

    const logn = async () => {
        try {
            const info = { email, password: passw };
            await UserServices.login(info);
            router.push('/feed');
        } catch (err) {
            setError('Email ou senha incorretos!');
            setEmail('');
            setPassw('');
        }
    };

    return (
        <S.MainBody>
            <S.LoginFeed>
                <S.Hello> Olá de novo!</S.Hello>
                <S.InptInfo>
                    <S.Text>E-mail:</S.Text>
                    <S.Inpt value={email} onChange={UseEmail} />
                </S.InptInfo>
                <S.InptInfo>
                    <S.Text>Senha:</S.Text>
                    <S.Inpt type="password" value={passw} onChange={Usepassw} />
                </S.InptInfo>
                <S.ErrorMessage>{error}</S.ErrorMessage>
                <S.Bottom>
                    <S.GF src="/assets/gogFaceb.svg" />
                    <S.ImageBut src="/assets/login.svg" onClick={logn} />
                    <S.Text>Não é cadastrado?</S.Text>
                    <S.ImageBut src="/assets/register.svg" />
                </S.Bottom>
            </S.LoginFeed>
            <S.BirdDiv>
                <S.Bird src="/assets/bird.svg" />
            </S.BirdDiv>
        </S.MainBody>
    );
}

export default Login;

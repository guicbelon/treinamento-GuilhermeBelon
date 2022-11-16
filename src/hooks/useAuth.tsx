import { setCookie, destroyCookie, parseCookies } from 'nookies';
import React, { useContext, useState, createContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { User } from 'interfaces/User';
import UserServices from 'services/UserServices';

interface AuthContextData {
    userLogged: User;
    logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [userData, setUserData] = useState<User>({} as User);
    const router = useRouter();

    useEffect(() => {
        const aux = async () => {
            const { '@Piupiuwer:token': token, '@Piupiuwer:UserId': userId } =
                parseCookies();
            if (token) {
                const userLogged = await UserServices.getUserById(userId);
                setUserData(userLogged);
                // console.log(token)
            }
        };
        aux();
    });

    const logout = (): void => {
        destroyCookie(undefined, '@Piupiuwer:token');
        destroyCookie(undefined, '@Piupiuwer:UserId');
        setCookie(undefined, '@Piupiuwer:token', '', {
            maxAge: 60 * 60 * 24
        });
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ userLogged: userData, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default () => useContext(AuthContext);

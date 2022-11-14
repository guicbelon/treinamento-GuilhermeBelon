import { User } from 'interfaces/User';
import { setCookie } from 'nookies';
import api from './api';

interface ILoginRequest {
    email: string;
    password: string;
}

interface LoginResponse {
    user: User;
    token: string;
}

export default class UserServices {
    static async getUsers(): Promise<User[]> {
        const response = await api.get('/users');
        return response.data;
    }

    static async getUserById(userId: string): Promise<User> {
        const response = await api.get(`/users/${userId}`);
        return response.data;
    }

    static async login(info: ILoginRequest): Promise<LoginResponse> {
        try {
            const response = await api.post('/sessions/login', info);
            const { token } = response.data;
            const userId = response.data.user.id;
            setCookie(undefined, '@Piupiwer:token', token, {
                maxAge: 60 * 60 * 24
            });
            setCookie(undefined, '@piupiuwer:UserId', userId, {
                maxAge: 60 * 60 * 24
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (api.defaults.headers as any).Authorization = `Bearer ${token}`;
            return response.data;
        } catch (err) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            throw new Error((err as any).response.data.message);
        }
    }
}

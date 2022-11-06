import { User } from 'interfaces/User';
import api from './api';

export default class UserServices {
    static async getUsers(): Promise<User[]> {
        const response = await api.get('/users');
        return response.data;
    }
}

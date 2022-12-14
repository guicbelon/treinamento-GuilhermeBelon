/* eslint-disable camelcase */
import { User } from 'interfaces/User';
import { PiuLike } from './PiuLike';

export interface Piu {
    id: string;
    userId: string;
    likes: PiuLike[];
    text: string;
    created_at: Date;
    updated_at: Date;
    user: User;
}

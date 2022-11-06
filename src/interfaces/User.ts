/* eslint-disable camelcase */
import { Piu } from './Piu';
import { PiuLike } from './PiuLike';

export interface User {
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    about: string;
    avatar: string;
    pius: Piu[];
    likes: PiuLike[];
    following: User[];
    followers: User[];
    favorites: Piu[];
}

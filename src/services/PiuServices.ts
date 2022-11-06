import { Piu } from 'interfaces/Piu';

import api from './api';

export default class PiuServices {
    static async getPius(): Promise<Piu[]> {
        const response = await api.get('/pius');
        return response.data.reverse();
    }

    static async deletePiu(piuId: string): Promise<void> {
        const route = `/pius/${piuId}`;
        await api.delete(route);
    }

    static async likePiu(piuId: string): Promise<void> {
        const route = `/pius/like/${piuId}`;
        await api.patch(route);
    }

    static async createPiu(txt: string): Promise<Piu[]> {
        const data = { text: txt };
        const response = await api.post('/pius', data);
        return response.data;
    }
}

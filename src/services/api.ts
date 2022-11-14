/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { parseCookies } from 'nookies';

const api = axios.create({ baseURL: 'https://piupiuwer.polijrinternal.com' });

const { '@Piupiwer:token': token } = parseCookies();

if (token) (api.defaults.headers as any).Authorization = `Bearer ${token}`;

export default api;

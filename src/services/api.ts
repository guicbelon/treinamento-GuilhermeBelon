/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const api = axios.create({ baseURL: 'https://piupiuwer.polijrinternal.com' });

const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc3NDI2NTgsImV4cCI6MTY2NzgyOTA1OCwic3ViIjoiYTA1YWZjZjUtOGUzNS00MWZjLTgyMjUtMzlhOGFmMDE1NDQ0In0.r2iNV3SsYTEbtWr-bELk8TsEyP_GTwQdcwczuoShooo';

(api.defaults.headers as any).Authorization = `Bearer ${token}`;

export default api;

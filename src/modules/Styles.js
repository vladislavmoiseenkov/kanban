import { api } from '../services/api';

export const getBGImage = async () => 'https://images.unsplash.com/photo-1570284905774-5d0cecc66781?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjExMTc5MH0' || (await api.get('/random-photo')).data.urls.full;
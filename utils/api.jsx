import api from './axios';

export const getProducts = (id) => {
    return api.post('/v1/taxonomy/attractions', { destId: id });
}

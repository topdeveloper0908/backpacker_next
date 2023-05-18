import api from './axios';

export const getProducts = (id) => {
    return api.post('/v1/taxonomy/attractions', {
        "destId": id,
        "topX": "1-5",
        "sortOrder": "RECOMMENDED"
    });
}

export const getDestinations = () => {
    return api.get('/v1/taxonomy/destinations');
}

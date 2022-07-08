import client from './client';

export const writePost = ({title, body, tags}) =>
    client.post('/api/posts', {title, body, tags});

export const readPost = id => client.get(`/api/posts/${id}`);

export const listPosts = ({ page, username, tag}) =>{
    return client.get('/api/posts', {
        params: { page, username, tag },
    });
};

export const removePost = id => client.delete(`/api/posts/${id}`);

export const updatePost = ({ id, title, body, tags }) => {
    return client.patch(`/api/posts/${id}`, {
        title,
        body,
        tags,
    });
};
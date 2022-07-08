import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import  * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const SET_ORIGINAL_POST = 'wrtie/SET_ORIGINAL_POST';
const INITIALIZE_FORM = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';
const [
    WRITE_POST,
    WRITE_POST_SUCCESS,
    WRITE_POST_FAILURE,
] = createRequestActionTypes('write/WRITE_POST');
const [
    UPDATE_POST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILURE,
] = createRequestActionTypes("write/UPDATE_POST");

export const setOriginalPost = createAction(SET_ORIGINAL_POST, post => post);
export const initialize = createAction(INITIALIZE_FORM);
export const changeField = createAction(CHANGE_FIELD, ({key, value}) => ({
    key,
    value,
}));
export const writePost = createAction(WRITE_POST, ({ title, body, tags }) =>({
    title,
    body,
    tags,
}));
export const updatePost = createAction(UPDATE_POST, ({id, title, body, tags}) => ({
    id,
    title,
    body,
    tags,
}));

const updatePostSaga = createRequestSaga(UPDATE_POST, postsAPI.updatePost);
const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
export function* writeSaga() {
    yield takeLatest(WRITE_POST, writePostSaga);
    yield takeLatest(UPDATE_POST, updatePostSaga);
}

const initialState = {
    title: '',
    body: '',
    tags: [],
    post: null,
    postError: null,
    originalPostId: null,
};

const write = handleActions(
    {
        [INITIALIZE_FORM]: state => initialState,
        [CHANGE_FIELD]: (state, { payload: { key, value }}) => ({
            ...state,
            [key]: value
        }),
        [WRITE_POST]: state => ({
            ...state,
            post: null,
            postError: null,
        }),
        [WRITE_POST_SUCCESS]: (state, {payload: post}) => ({
            ...state,
            post,
        }),
        [WRITE_POST_FAILURE]: (state, {payload: postError}) => ({
            ...state,
            postError,
        }),
        [SET_ORIGINAL_POST]: (state, {payload: post}) => ({
            ...state,
            title: post.title,
            body: post.body,
            tags: post.tags,
            originalPostId: post._id,
        }),
        [UPDATE_POST_SUCCESS]: (state, { payload: post }) => ({
            ...state,
            post,
        }),
        [UPDATE_POST_FAILURE]: (state, { payload: postError }) => ({
            ...state,
            postError,
        }),

    },
    initialState,
);

export default write;
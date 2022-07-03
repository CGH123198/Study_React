import { createAction, handleActions } from 'redux-actions';

const INITIALIZE_FORM = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';

export const initialize = createAction(INITIALIZE_FORM);
export const changeField = createAction(CHANGE_FIELD, ({key, value}) => ({
    key,
    value,
}));

const initialState = {
    title: '',
    body: '',
    tags: [],
};

const write = handleActions(
    {
        [INITIALIZE_FORM]: state => initialState,
        [CHANGE_FIELD]: (state, { payload: { key, value }}) => ({
            ...state,
            [key]: value
        })

    },
    initialState,
);

export default write;
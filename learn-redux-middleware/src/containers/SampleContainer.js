import Sample from '../components/Sample';
import { getPost, getUsers} from '../modules/sample';
import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SampleContainer = (
) => {
    const post = useSelector(state => state.sample.post);
    const users = useSelector(state => state.sample.users);
    const loadingPost = useSelector(state => state.sample.loading.GET_POST);
    const loadingUser = useSelector(state => state.sample.loading.GET_USERS);

    const dispatch = useDispatch();
    const dgetPost = useCallback( id => {
        dispatch(getPost(id));
    }, [dispatch]);
    const dgetUsers = useCallback( id => {
        dispatch(getUsers(id));
    }, [dispatch]);
    
    useEffect( () => {
        dgetPost(1);
        dgetUsers(1);
    }, [dgetPost, dgetUsers]);

    return (
        <Sample
            post={post}
            users={users}
            loadingPost={loadingPost}
            loadingUser={loadingUser}
        />
    );
};

export default SampleContainer;
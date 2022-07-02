import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }));

    const onChange = useCallback(e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value: value
            })
        )
    }, [dispatch]);

    const onSubmit = e => {
        e.preventDefault();
        const { username, password } = form;
        dispatch(login({username, password}));
    };

    useEffect( () => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    useEffect( () => {
        if(authError) {
            console.log('오류 발생');
            console.log(authError);
        }
        if(auth) {
            console.log('로그인 성공');
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    useEffect( () => {
        if(user){
            navigate('/');
        }
    }, [navigate, user]);

    return (
        <AuthForm
            type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default LoginForm;
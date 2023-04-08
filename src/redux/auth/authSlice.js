import { createSlice } from '@reduxjs/toolkit';
import axios from './../../api/axios_config';
import notify from './../../hooks/useNotify';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: JSON.parse(localStorage.getItem('user' )),
        errors: {},
        isAuthenticated: undefined !== JSON.parse(localStorage.getItem('user'))?.token,
        isFetching: false,
    },
    reducers: {
        setFetching(state, payload) {
            state.isFetching = payload.payload
        },
        setUser(state, payload) {
            state.user = payload.payload
        },
        setError(state, payload) {
            state.errors = payload.payload
        },
        setAuthenticated(state, payload) {
            state.isAuthenticated = payload.payload
        },
        removeIncorrectToken(state, payload) {
            state.user = null
            state.isAuthenticated = false
            localStorage.removeItem('user')
            notify.error('Проблема с аутентификацией')
        }
    }
});

export const { setFetching, setUser, setError, setAuthenticated, removeIncorrectToken } = authSlice.actions

export default authSlice.reducer


// fetch all items
export function login(phone, password) {
    return (dispatch, state) => {
        dispatch(setFetching(true))
        axios.post('/api/v1/auth/login/', {phone, password})
        .then(response => {
                localStorage.setItem('user', JSON.stringify(response.data))
                dispatch(setUser(response.data))
                dispatch(setError({}))
                dispatch(setAuthenticated(true))
                notify.simple('Добро пожаловать!')
        }).catch(errors => {
            if(errors.code === 'ERR_NETWORK') notify.error('Отсутствует подключение к интернету!')
            else if(errors.response.status === 400) {
                dispatch(setError(errors.response.data))
                notify.error('Исправьте ошибки!')
            } else if(errors.response.status === 403) {
                dispatch(setError({login: 'Ваш аккаунт заблокирован !'}))
                notify.error('Ваш аккаунт заблокирован!')
            } else {
                alert('Ошибка сети!')
            }
        }).finally(() => dispatch(setFetching(false)))
    }
}

export function logout(token) {
    return (dispatch) => {
        dispatch(setFetching(true))
        axios({
            method: 'POST',
            url: '/api/v1/auth/logout/',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            },
            data: {
                revoke_token: true
            }
        }).then(response => {
            notify.simple('До свидания!')
        }).catch(errors => {
            if(errors.code === 'ERR_NETWORK') notify.error('Отсутствует подключение к интернету!')
            else alert('Ошибка сети!')
        }).finally(response => {
            localStorage.removeItem('user')
            dispatch(setUser(null))
            dispatch(setError({}))
            dispatch(setAuthenticated(false))
            dispatch(setFetching(false))
        })
    }
}

export function refreshProfile(user) {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: '/api/v1/auth/profile/',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Token ${user.token}`,
            },
        }).then(response => {
            const changedUser = {...user, ...response.data}
            dispatch(setUser(changedUser))
            localStorage.setItem('user', JSON.stringify(changedUser))
        }).catch(errors => {
            if(errors.code === 'ERR_NETWORK') {}
            else {
                dispatch(setUser(null))
                dispatch(setAuthenticated(false))
                localStorage.removeItem('user')
                notify.error('Проблема с аутентификацией')
            }
        })
    }
}

export function changeProfile(data, user) {
    return (dispatch) => {
        dispatch(setFetching(true))
        axios.patch('/api/v1/auth/profile/', data, {headers:
                {'Authorization': `Token ${user.token}`, 'Content-Type': 'multipart/form-data'}})
        .then(response => {
            const changedUser = {...user, ...response.data}
            dispatch(setUser(changedUser))
            dispatch(setError({}))
            localStorage.setItem('user', JSON.stringify(changedUser))
            notify.simple('Профиль успешно изменен!')
        }).catch(errors => {
            if(errors.code === 'ERR_NETWORK') notify.error('Отсутствует подключение к интернету!')
            else if(errors.response.status === 401 || errors.response.status === 403) {
                dispatch(removeIncorrectToken())
            } else if(errors.response.status === 400){
                dispatch(setError(errors.response.data))
                notify.error('Исправьте ошибки!')
            }
        }).finally(() => dispatch(setFetching(false)))
    }
}

export function changePassword(data, user) {
    return (dispatch) => {
        dispatch(setFetching(true))
        axios.post('/api/v1/auth/change-password/', data, {headers: {'Authorization': `Token ${user.token}`}})
            .then(response => {
                dispatch(setError({}))
                notify.success('Пароль успешно изменен!')
            })
            .catch(errors => {
                if(errors.code === 'ERR_NETWORK') notify.error('Отсутствует подключение к интернету!')
                else if(errors.response.status === 400) {
                    dispatch(setError({...errors.response.data}))
                    notify.error('Исправьте ошибки!')
                } else if(errors.response.status === 401 || errors.response.status === 403) {
                    dispatch(removeIncorrectToken())
                } else {
                    alert('Ошибка сети!')
                }
            }).finally(() => dispatch(setFetching(false)))
    }
}
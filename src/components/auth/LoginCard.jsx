import React from 'react';
import {PrimaryInput} from "../ui/Inputs";
import {PrimaryLoaderButton} from "../ui/Buttons";
import {login} from "../../redux/auth/authSlice";
import {useDispatch, useSelector} from "react-redux";

const LoginCard = ({className = ''}) => {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const handleSubmit = e => {
        e.preventDefault()
        const data = e.target;
        const phone = data.phone.value
        const password = data.password.value
        dispatch(login(phone, password))
    }

    return (
        <div className={`login_card ${className}`}>
            <h1 className='text-center mb-5'>Авторизация</h1>
            <div>
                <form onSubmit={e => handleSubmit(e)}>
                    <div className='mb-6'>
                        <PrimaryInput
                            type='text'
                            name='phone'
                            placeholder='Номер телефона'
                            errors={auth.errors?.phone}
                        />
                    </div>
                    <div className='mb-6'>
                        <PrimaryInput
                            type='password'
                            name='password'
                            placeholder='Пароль'
                            suggested="current-password"
                            errors={auth.errors?.password}
                            autoComplete='on'
                        />
                    </div>
                    <div>
                        <PrimaryLoaderButton
                            isLoading={auth.isFetching}
                            className='primary_button w-full block'
                        >
                            Войти
                        </PrimaryLoaderButton>
                    </div>
                    { !!auth.errors?.login
                        && <div className="text-center text-red-600 mt-5">
                            <i className='bx bxs-error-circle'></i> {auth.errors.login}
                        </div>}
                </form>
            </div>
        </div>
    );
};

export default LoginCard;
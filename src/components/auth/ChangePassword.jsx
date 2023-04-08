import React, {useState} from 'react';
import {OutlinedInput} from "../ui/Inputs";
import {PrimaryLoaderButton} from "../ui/Buttons";
import {useDispatch, useSelector} from "react-redux";
import {changePassword} from "../../redux/auth/authSlice";

const ChangePassword = ({className}) => {

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const [authFields, setAuthFields] = useState({
        old_password: '',
        password: '',
        password_confirm: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(changePassword(authFields, auth.user))
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div className={`card grid md:grid-cols-3 grid-cols-1 gap-5 md:gap-2 justify-items-center items-center ${className}`}>
                <div>
                    <div className='mb-2 text-center md:text-left'>
                        <OutlinedInput
                            type='password'
                            placeholder='Старый пароль'
                            name='old_password'
                            value={authFields.old_password}
                            onChange={e => setAuthFields({...authFields, old_password: e.target.value})}
                            errors={auth.errors?.old_password || []}
                        />
                    </div>
                </div>
                <div className='text-center md:text-left'>
                    <OutlinedInput
                        type='password'
                        placeholder='Новый пароль'
                        name='password'
                        value={authFields.password}
                        onChange={e => setAuthFields({...authFields, password: e.target.value})}
                        errors={auth.errors?.password || []}
                        className='mb-5'
                    />
                    <OutlinedInput
                        type='password'
                        placeholder='Подтвердите пароль'
                        name='password_confirm'
                        value={authFields.password_confirm}
                        onChange={e => setAuthFields({...authFields, password_confirm: e.target.value})}
                        errors={auth.errors?.password_confirm || []}
                    />
                </div>
                <div className='text-center md:text-left'>
                    <PrimaryLoaderButton isLoading={auth.isFetching}>
                        Изменить
                    </PrimaryLoaderButton>
                </div>
            </div>
        </form>
    );
};

export default ChangePassword;
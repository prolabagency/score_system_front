import React, {useState} from 'react';
import {OutlinedInput, UploadAvatarInput} from "../ui/Inputs";
import {PrimaryLoaderButton} from "../ui/Buttons";
import {useDispatch, useSelector} from "react-redux";
import {changeProfile} from "../../redux/auth/authSlice";

const ChangeProfile = ({className = ''}) => {

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [authFields, setAuthFields] = useState({
        first_name: auth.user.first_name,
        last_name: auth.user.last_name,
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(changeProfile(authFields, auth.user))
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div className={`card grid md:grid-cols-3 grid-cols-1 gap-5 md:gap-2 justify-items-center items-center ${className}`}>
                <UploadAvatarInput
                    preview={auth.user.avatar}
                    onChange={e => setAuthFields({...authFields, avatar: e.target.files[0]})}
                    errors={auth.errors?.avatar}
                />
                <div>
                    <div className='mb-2'>
                        <OutlinedInput
                            type='text'
                            placeholder='Имя'
                            name='first_name'
                            value={authFields.first_name}
                            onChange={e => setAuthFields({...authFields, first_name: e.target.value})}
                            errors={auth.errors?.first_name || []}
                        />
                    </div>
                    <div className=''>
                        <OutlinedInput
                            type='text'
                            placeholder='Фамилия'
                            name='last_name'
                            value={authFields.last_name}
                            onChange={e => setAuthFields({...authFields, last_name: e.target.value})}
                            errors={auth.errors?.last_name || []}
                        />
                    </div>
                </div>
                <div className='flex justify-center md:justify-end'>
                    <PrimaryLoaderButton isLoading={auth.isFetching}>
                        Сохранить
                    </PrimaryLoaderButton>
                </div>
            </div>
        </form>
    );
};

export default ChangeProfile;
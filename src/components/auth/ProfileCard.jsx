import React from 'react';
import {PrimaryLinkButton} from "../ui/Buttons";
import {useSelector} from "react-redux";
import avatar from "../../assets/img/user.svg";

const ProfileCard = ({ className = ''}) => {

    const auth = useSelector(state => state.auth)

    return (
        <div className={`card grid md:grid-cols-3 grid-cols-1 gap-5 md:gap-2 justify-items-center items-center ${className}`}>
            <div className='flex justify-center md:justify-start'><img src={auth.user.avatar || avatar} className='avatar lg' alt='' /></div>
            <div className=''>
                <h2 className='md:text-left text-center'>{auth.user.get_full_name}</h2>
                <h3 className='md:text-left text-center'>{auth.user.group?.title}</h3>
                <div className='md:text-left text-center'>
                    <b>Номер телефона: </b>
                    {auth.user.phone}
                </div>
            </div>
            <div className='flex justify-center md:justify-end gap-1'>
                <PrimaryLinkButton className='mr-2' to='change/'>
                    <i className='bx bxs-edit'></i>
                </PrimaryLinkButton>
                <PrimaryLinkButton to='change-password/'>
                    Изменить пароль
                </PrimaryLinkButton>
            </div>
        </div>
    );
};

export default ProfileCard;
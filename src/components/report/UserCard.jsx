import React from 'react';
import {MonthManager} from "../../utils/MonthManager";
import {getTitleOfRole} from "../../utils";
import avatar from './../../assets/img/user.svg'

const UserCard = ({user, className = ''}) => {

    const monthManager = new MonthManager()

    return (
        <div className={`card grid md:grid-cols-5 grid-cols-1 gap-5 md:gap-2 justify-items-center items-center ${className}`}>
            <div><img src={user.avatar || avatar} className='avatar lg' alt='' /></div>
            <div className='md:col-span-2'>
                <h2 className='mb-2 text-center'>{user.get_full_name}</h2>
                <h3 className='text-center'>{user.group?.title}</h3>
            </div>
            <div className='text-center'>
                <b>Номер телефона: </b> <br/>
                {user.phone}
            </div>
            <div className='text-center'>
                <b>Роль: </b> <br/>
                {getTitleOfRole(user.role)}
            </div>
        </div>
    );
};

export default UserCard;
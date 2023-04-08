import React from 'react';
import avatar from "../../assets/img/user.svg";
import {Link} from "react-router-dom";
import {getTitleOfRole} from "../../utils";

const UserListItem = ({className = '', user}) => {
    return (
        <div className={`card grid lg:grid-cols-6 grid-cols-2 gap-5 lg:gap-2 items-center ${className}`}>
            <div className='col-span-2 flex gap-3 items-center justify-center lg:justify-start'>
                <div><img src={user.avatar || avatar} className='avatar md' alt=""/></div>
                <h4><Link to={`${user.id}/`}>{user.get_full_name}</Link></h4>
            </div>
            <div className='text-center'>
                <span className='inline lg:hidden'><b>Номер телефона:</b> <br/></span>
                {user.phone}
            </div>
            <div className='text-center'>
                <span className='inline lg:hidden'><b>Роль:</b> <br/></span>
                {getTitleOfRole(user.role)}
            </div>
            <div className='text-center'>
                <span className='inline lg:hidden'><b>Группа:</b> <br/></span>
                {user.group?.title}
            </div>
            <div className='text-center lg:text-right'>
                <span className='inline lg:hidden'><b>Средний балл:</b> <br/></span>
                {user.average_point}
            </div>
        </div>
    );
};

export default UserListItem;
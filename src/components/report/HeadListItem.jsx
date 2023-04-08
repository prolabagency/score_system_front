import React from 'react';
import avatar from "../../assets/img/user.svg";

const HeadListItem = ({className, user}) => {
    return (
        <div className={`card grid md:grid-cols-5 grid-cols-2 gap-5 md:gap-2 items-center ${className}`}>
            <div className='col-span-2 flex gap-3 items-center justify-center md:justify-start'>
                <div><img src={user.avatar || avatar} className='avatar md' alt=""/></div>
                <h4>{user.get_full_name}</h4>
            </div>
            <div className='text-center'>
                <span className='inline md:hidden'><b>Номер телефона:</b> <br/></span>
                {user.phone}
            </div>
            <div className='text-center'>
                <span className='inline md:hidden'><b>Группа:</b> <br/></span>
                {user.group?.title}
            </div>
            <div className='col-span-2 md:col-span-1 text-center md:text-right'>
                <span className='inline md:hidden'><b>Завершил оценивание: </b></span>
                { user.used_all_points
                    ? <span className="text-green-600 text-2xl align-middle"><i className='bx bx-check-circle'></i></span>
                    : <span className="text-red-600 text-2xl align-middle"><i className='bx bx-x-circle'></i></span>
                }
            </div>
        </div>
    );
};

export default HeadListItem;
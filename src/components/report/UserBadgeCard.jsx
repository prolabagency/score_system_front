import React from 'react';

const UserBadgeCard = ({className}) => {
    return (
        <div className={`card hidden lg:grid lg:grid-cols-6 grid-cols-2 gap-5 lg:gap-2 items-center ${className}`}>
            <h4 className='col-span-2'>
                Фамилия и имя
            </h4>
            <h4 className='text-center'>
                Номер телефона
            </h4>
            <h4 className='text-center'>
                Роль
            </h4>
            <h4 className='text-center'>
                Группа
            </h4>
            <h4 className='col-span-2 md:col-span-1 text-center md:text-right'>
                Средний балл
            </h4>
        </div>
    );
};

export default UserBadgeCard;
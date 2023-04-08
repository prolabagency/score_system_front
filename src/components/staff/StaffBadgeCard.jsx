import React from 'react';

const StaffBadgeCard = ({className}) => {
    return (
        <div className={`card hidden md:grid md:grid-cols-5 grid-cols-2 gap-5 md:gap-2 items-center ${className}`}>
            <h4 className='col-span-2'>
                Фамилия и имя
            </h4>
            <h4 className='text-center'>
                Номер телефона
            </h4>
            <h4 className='text-center'>
                Группа
            </h4>
            <h4 className='col-span-2 md:col-span-1 text-center md:text-right'>
                Балл
            </h4>
        </div>
    );
};

export default StaffBadgeCard;
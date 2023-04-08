import React from 'react';
import notFoundImage from './../../assets/img/404.jpg'
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className='h-screen flex justify-center items-center px-4'>
            <div className=""></div>
            <div className='card not_found_container'>
                <div className="flex justify-center">
                    <img src={notFoundImage} alt=""/>
                </div>
                <h2 className='text-center'>К сожалению, запрашиваемая страница не найдена</h2>
                <h5 className='text-center mb-4'> Возможно, вы перешли по ссылке, в которой была допущена ошибка, или ресурс был удален. Попробуйте перейти на главную страницу</h5>
                <div className="text-center text-lg">
                    <Link to='/'>Перейти на главную</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
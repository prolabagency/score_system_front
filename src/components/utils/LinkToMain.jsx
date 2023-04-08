import React from 'react';
import {Link} from "react-router-dom";

const LinkToMain = () => {
    return (
        <div className='login_card text-center'>
            <Link to='/'>Перейти на главную страницу</Link>
        </div>
    );
};

export default LinkToMain;
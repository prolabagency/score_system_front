import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import avatar from './../assets/img/user.svg'

const Nav = ( {isOpenBar, setOpenBar} ) => {

    const auth = useSelector(state => state.auth)

    return (
        <nav className='flex justify-between lg:justify-end items-center'>
                <div className='lg:hidden'>
                    <button className="shadowed_button" onClick={e => setOpenBar(!isOpenBar)}>
                        <i className='bx bx-menu'></i>
                    </button>
                </div>
                <div className="profile flex justify-end gap-x-3">
                    <div>
                        <div className='text-right'><b className='text-xl'>{auth.user.get_full_name}</b></div>
                        <div className='text-right'>{auth.user.group?.title}</div>
                    </div>

                    <div className='text-right'>
                        <Link to='profile/' >
                            <img src={auth.user.avatar || avatar} alt="" className='avatar md' />
                        </Link>
                    </div>
                </div>
        </nav>
    );
};

export default Nav;
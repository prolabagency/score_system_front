import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/auth/authSlice";
import logo from './../assets/img/logo.jpg'
import {ActiveSidebarContext} from "../context";
import {SidebarItemsManager} from "../utils/SidebarItemsManager.jsx";

const Sidebar = ({isOpenBar, setOpenBar, role}) => {

    const {activeBar} = useContext(ActiveSidebarContext)

    const sidebarItemsManager = new SidebarItemsManager(activeBar)
    const sidebarItems = sidebarItemsManager.getItems(role)

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    return (
        <>
            <div className={isOpenBar ? "frame_2 active" : "frame_2"} onClick={e => setOpenBar(!isOpenBar)}></div>
            <div className={isOpenBar ? "sidebar active" : "sidebar" } >
                <div>
                    <div className='lg:hidden block text-right'>
                        <button title='Открыть меню' onClick={e => setOpenBar(!isOpenBar)} className='text-2xl'><i className='bx bx-x'></i></button>
                    </div>
                    <div className="text-center xl mb-5">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="menu">
                        {sidebarItems.map((item, idx) =>
                            <div key={idx} className={item.active ? 'item active' : 'item'}>
                                <Link to={item.url} onClick={e => setOpenBar(false)}>
                                    <div className="icon">{item.icon}</div>
                                    <div className="text">{item.text}</div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className="menu">
                    <div className="item">
                       <Link onClick={e => dispatch(logout(auth.user?.token))} to='#'>
                            <span className="icon">
                                <i className='bx bx-log-out'></i>
                            </span>
                            <span className="text">Выйти</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
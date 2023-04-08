import React from 'react';
import {Link} from "react-router-dom";
import {PrimaryButton} from "../ui/Buttons";
import {CREATE, UPDATE} from "./SetPointModelWin";
import avatar from '../../assets/img/user.svg'

const StaffItemCard = ({className, staff, setOpenModalWin, setOptions, ...props}) => {
    return (
        <div className={`card ${className}`} {...props}>
            <div className="grid md:grid-cols-5 grid-cols-2 gap-y-5 items-center">
                <div className='col-span-2 flex gap-3 items-center justify-center md:justify-start'>
                    <div><img src={staff.avatar || avatar} className='avatar md' alt=""/></div>
                    <h4><Link to={`${staff.id}/`}>{staff.get_full_name}</Link> </h4>
                </div>
                <div className='text-center'>
                    <span className='inline md:hidden'><b>Номер телефона:</b> <br/></span>
                    {staff.phone}
                </div>
                <div className='text-center'><span className='inline md:hidden'><b>Группа:</b> <br/></span>
                    {staff.group?.title}
                </div>
                <div className='text-center md:text-right col-span-2 md:col-span-1'>
                    <div className='block md:hidden mb-3'><b>Балл:</b> <br/></div>
                    {staff.point_as_staff
                        ?   <PrimaryButton className='sm w-full md:w-auto block' onClick={e => {
                            setOpenModalWin(true);
                            setOptions({
                                staffId: staff.id,
                                value: staff.point_as_staff.value,
                                note: staff.point_as_staff.note,
                                mode: UPDATE,
                                pointId: staff.point_as_staff.id,
                                many: true,
                            })
                        }}>
                            {staff.point_as_staff.value}
                        </PrimaryButton>
                        : <PrimaryButton className='sm  w-full md:w-auto block' onClick={e => {
                            setOpenModalWin(true);
                            setOptions({
                                staffId: staff.id,
                                value: 0,
                                mode: CREATE,
                                pointId: null,
                                many: true,
                            })
                        }}>+</PrimaryButton>
                    }
                </div>
            </div>
        </div>
    );
};

export default StaffItemCard;
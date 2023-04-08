import React, { useState } from 'react'
import SetPointModelWin, { CREATE, UPDATE } from './SetPointModelWin';
import { LinkButton, PrimaryButton } from '../ui/Buttons';
import { SetStaffContext } from '../../context';
import avatar from './../../assets/img/user.svg'
import {MonthManager} from "../../utils/MonthManager";

const StaffCard = ({user, setUser, className = ''}) => {

    const [isOpen, setOpen] = useState(false)
    const [options, setOptions] = useState({staffId: null, value: 0})
    const monthManager = new MonthManager()

  return (
    <SetStaffContext.Provider value={{staffs: user, setStaff: setUser}}> 
        <div className={`card grid md:grid-cols-5 grid-cols-1 gap-5 md:gap-2 justify-items-center items-center ${className}`}>
            <div><img src={user.avatar || avatar} className='avatar lg' alt='' /></div>
            <div className='md:col-span-2'>
                <h2 className='mb-2 text-center'>{user.get_full_name}</h2>
                <h3 className=' text-center'>{user.group?.title}</h3>
            </div>
            <div className=' text-center'>
                <b>Номер телефона: </b>
                {user.phone}
            </div>
            <div className='text-center md:text-left '>
                <b>Балл за {monthManager.getCurrentMonth()}: </b>
                {user.point_as_staff
                    ?   <LinkButton className='text-lg' onClick={e => {
                            setOpen(!isOpen);
                            setOptions({
                                staffId: user.id,
                                value: user.point_as_staff.value,
                                mode: UPDATE,
                                pointId: user.point_as_staff.id,
                                many: false,
                            })
                        }}>
                            {user.point_as_staff.value}
                        </LinkButton>
                    : <PrimaryButton className='sm' onClick={e => {
                        setOpen(!isOpen);
                        setOptions({
                            staffId: user.id,
                            value: 0,
                            mode: CREATE,
                            pointId: null,
                            many: false,
                        })
                    }}><i className='bx bx-plus'></i></PrimaryButton>
                }
            </div>
        </div>
        <SetPointModelWin setOpen={setOpen} isOpen={isOpen} options={options} />
    </SetStaffContext.Provider>
  )
}

export default StaffCard
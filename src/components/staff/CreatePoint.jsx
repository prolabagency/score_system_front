import React, { useContext, useState } from 'react'
import usePostData from '../../hooks/usePostData'
import { useDispatch, useSelector } from 'react-redux'
import { OutlinedInput } from '../ui/Inputs'
import { AccentLoaderButton } from '../ui/Buttons'
import { SetStaffContext } from '../../context'
import { refreshProfile } from '../../redux/auth/authSlice'

const CreatePoint = ({options, setOpen}) => {

    const auth  = useSelector(state => state.auth)

    const {staffs, setStaff} = useContext(SetStaffContext)

    const [value, setValue] = useState(options?.value ?? 0)

    const {postData, errors, isFetching} = usePostData({
        url: '/api/v1/points/',
        headers: {
            'Authorization': `Token ${auth.user.token}`
        }
    })

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new Date();
        const month = data.getMonth() + 1
        const year = data.getFullYear()

        const uploadData = {
            value,
            month,
            year,
            head: auth.user.id,
            staff: options.staffId,
        }
        const response = await postData(uploadData);
        if (!!response) {
            if(options.many) {
                const changedStaffs = staffs.map((item) => {
                    if(item.id === options.staffId) item.point_as_staff = response
                    return item
                })
                setStaff([...changedStaffs]) 
            }
            else {
                setStaff({...staffs, point_as_staff: response}) 
            }
            dispatch(refreshProfile(auth.user))
            setOpen(false)
        }
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div className="flex gap-3 ">
                <OutlinedInput 
                    type="number" 
                    containerClass='grow' 
                    onChange={e => setValue(e.target.value)} 
                    value={value} 
                    errors={errors?.value || []}
                    min="0"
                />
                <AccentLoaderButton isLoading={isFetching} className='sm'>
                    <i className='bx bx-check'></i>
                </AccentLoaderButton>
            </div>
        </form>
    )
}

export default CreatePoint
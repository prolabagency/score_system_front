import React from 'react';
import {OutlinedFetchedSelect} from "../ui/Inputs";
import {PrimaryButton} from "../ui/Buttons";
import {useSelector} from "react-redux";

const FilterStaffList = ({className, staffs}) => {

    const auth = useSelector(state => state.auth)

    return (
        <div className={className}>
            <form className='flex justify-end gap-x-3'>
                <OutlinedFetchedSelect
                    name='group'
                    title='Выберите группу'
                    options={{
                        url: '/api/v1/auth/groups/',
                        params: {},
                        headers: {
                            'Authorization': `Token ${auth.user.token}`
                        }
                    }}
                    titleFiled="title"
                    valueFiled="id"
                    errors={staffs.errors?.group || []}
                    onChange={e => {
                        if(e.target.value === '') staffs.setParams({})
                        else staffs.setParams({group: e.target.value})
                    }}
                />
                <PrimaryButton className='sm' type='reset' onClick={e => staffs.setParams({})}>Сброс</PrimaryButton>
            </form>
        </div>
    );
};

export default FilterStaffList;
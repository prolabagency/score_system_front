import React from 'react';
import {OutlinedFetchedSelect, OutlinedInput} from "../ui/Inputs";
import {PrimaryButton} from "../ui/Buttons";
import FilterForm from "../utils/FilterForm";
import {useSelector} from "react-redux";

const FilterUserList = ({className, users}) => {

    const auth = useSelector(state => state.auth)

    return (
        <div className={className}>
            <FilterForm manager={users} className='flex justify-end gap-3'>
                <OutlinedInput
                    type='text'
                    name='search'
                    errors={users.errors?.last_name || []}
                    placeholder='Поиск сотрудника'
                />
                <PrimaryButton className='sm' type='submit'><i className='bx bx-search'></i></PrimaryButton>
            </FilterForm>
        </div>
    );
};

export default FilterUserList;
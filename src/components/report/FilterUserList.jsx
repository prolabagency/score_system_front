import React from 'react';
import {OutlinedFetchedSelect, OutlinedInput, OutlinedSelect} from "../ui/Inputs";
import {PrimaryButton} from "../ui/Buttons";
import FilterForm from "../utils/FilterForm";
import {useSelector} from "react-redux";
import {HEAD_ROLE} from "@/utils/constance.js";
import {MonthManager} from "@/utils/MonthManager.js";

const FilterUserList = ({className, users}) => {

    const auth = useSelector(state => state.auth)
    const monthManager = new MonthManager()

    return (
        <div className={className}>
            <FilterForm manager={users} className='grid md:grid-cols-4 grid-cols-2 gap-y-8 gap-3'>
                <OutlinedInput
                    type='text'
                    name='search'
                    errors={users.errors?.last_name || []}
                    placeholder='Поиск сотрудника'
                />
                <OutlinedInput
                    type='number'
                    name='year'
                    placeholder='Год'
                    errors={users.errors?.year || []}
                    containerClass=''
                />
                <OutlinedSelect name='month' title='Выберите месяц' errors={users.errors?.month || []} containerClass='col-span-2 md:col-span-1'>
                    {monthManager.months.map((month, idx) => <option value={idx + 1} key={idx}>{month}</option>)}
                </OutlinedSelect>
                <PrimaryButton className='sm md:w-min col-span-2 md:col-span-1' type='submit'><i className='bx bx-search'></i></PrimaryButton>
            </FilterForm>
        </div>
    );
};

export default FilterUserList;
import React from 'react';
import FilterForm from "../utils/FilterForm";
import {OutlinedInput, OutlinedSelect} from "../ui/Inputs";
import {PrimaryButton} from "../ui/Buttons";
import {MonthManager} from "../../utils/MonthManager";

const FilterOfHeadForm = ({users, className}) => {

    const monthManager = new MonthManager()

    return (
        <div className={className}>
            <FilterForm manager={users} className='grid md:grid-cols-6 grid-cols-2 gap-y-8 gap-3'>
                <OutlinedInput
                    type='number'
                    name='year'
                    placeholder='Год'
                    errors={users.errors?.year || []}
                    containerClass='md:col-span-2'
                />
                <OutlinedSelect name='month' title='Выберите месяц' errors={users.errors?.month || []}  containerClass='md:col-span-2'>
                    {monthManager.months.map((month, idx) => <option value={idx + 1} key={idx}>{month}</option>)}
                </OutlinedSelect>
                <PrimaryButton className='sm' type='submit'>Фильтр</PrimaryButton>
                <PrimaryButton className='sm' type='reset' onClick={e => users.setParams({})}>Сброс</PrimaryButton>
            </FilterForm>
        </div>
    );
};

export default FilterOfHeadForm;
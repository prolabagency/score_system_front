import React from 'react'
import {OutlinedInput, OutlinedSelect} from '../ui/Inputs'
import { PrimaryButton } from '../ui/Buttons'
import { MonthManager } from '../../utils/MonthManager'
import FilterForm from "../utils/FilterForm";

const FilterPointForm = ({className = '', points}) => {

    const monthManager = new MonthManager()

    return (
        <div className={className}>
            <FilterForm manager={points} className='grid md:grid-cols-6 grid-cols-2 gap-y-8 gap-3'>
                <OutlinedInput
                    type='number'
                    name='year'
                    placeholder='Год'
                    errors={points.errors?.year || []}
                    containerClass='md:col-span-2'
                />
                <OutlinedSelect name='month' title='Выберите месяц' errors={points.errors?.month || []}  containerClass='md:col-span-2'>
                    {monthManager.months.map((month, idx) => <option value={idx + 1} key={idx}>{month}</option>)}
                </OutlinedSelect>
                <PrimaryButton className='sm' type='submit'>Фильтр</PrimaryButton>
                <PrimaryButton className='sm' type='reset' onClick={e => points.setParams({})}>Сброс</PrimaryButton>
            </FilterForm>
        </div>
    )
}

export default FilterPointForm
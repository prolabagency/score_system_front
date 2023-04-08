import React from 'react';
import FilterForm from "../utils/FilterForm.jsx";
import {OutlinedFetchedSelect, OutlinedInput, OutlinedSelect} from "../ui/Inputs.jsx";
import {PrimaryButton} from "../ui/Buttons.jsx";
import {useSelector} from "react-redux";
import {MonthManager} from "../../utils/MonthManager.js";

const FilterOfAveragePoints = ({className, points}) => {

    const auth = useSelector(state => state.auth)
    const monthManager = new MonthManager()

    return (
        <div className={className}>
            <FilterForm manager={points} className='grid grid-cols-2 md:grid-cols-6 gap-3 gap-y-8'>
                <OutlinedInput
                    type='number'
                    name='year'
                    placeholder='Год'
                    errors={points.errors?.year || []}
                    containerClass='col-span-2 md:col-span-4'
                />
                <PrimaryButton className='sm' type='submit'>Фильтр</PrimaryButton>
                <PrimaryButton className='sm' type='reset' onClick={e => points.setParams({})}>Сброс</PrimaryButton>
            </FilterForm>
        </div>
    );
};

export default FilterOfAveragePoints;
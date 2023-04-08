import React from 'react';
import FilterForm from "../utils/FilterForm";
import {OutlinedFetchedSelect, OutlinedInput, OutlinedSelect} from "../ui/Inputs";
import {PrimaryButton} from "../ui/Buttons";
import {MonthManager} from "../../utils/MonthManager";
import {HEAD_ROLE} from "../../utils/constance";
import {useSelector} from "react-redux";

const FilterOfUserPointsForm = ({points, className}) => {

    const monthManager = new MonthManager()
    const auth = useSelector(state => state.auth)

    return (
        <div className={className}>
            <FilterForm manager={points} className='grid md:grid-cols-4 grid-cols-2 gap-y-8 gap-3'>
                <OutlinedFetchedSelect
                    name='head'
                    title='Выберите советника'
                    options={{
                        url: '/api/v1/auth/users/',
                        params: {
                            role: HEAD_ROLE,
                            use_pagination: false,
                        },
                        headers: {
                            'Authorization': `Token ${auth.user.token}`
                        },
                    }}
                    titleFiled="get_full_name"
                    valueFiled="id"
                    errors={points.errors?.head || []}
                    containerClass=''
                />
                <OutlinedInput
                    type='number'
                    name='year'
                    placeholder='Год'
                    errors={points.errors?.year || []}
                    containerClass=''
                />
                <OutlinedSelect name='month' title='Выберите месяц' errors={points.errors?.month || []} containerClass='col-span-2 md:col-span-1'>
                    {monthManager.months.map((month, idx) => <option value={idx + 1} key={idx}>{month}</option>)}
                </OutlinedSelect>
                <div className='flex gap-2 col-span-2 md:col-span-1'>
                    <PrimaryButton className='sm grow' type='submit'>Фильтр</PrimaryButton>
                    <PrimaryButton className='sm grow' type='reset' onClick={e => points.setParams({})}>Сброс</PrimaryButton>
                </div>
            </FilterForm>
        </div>

    );
};

export default FilterOfUserPointsForm;
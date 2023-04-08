import React from 'react';

const FilterForm = ({manager, children, className, ...props}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        let collectedParams = {}
        form.forEach((value, key) => {
            if(!!value) collectedParams = {...collectedParams, [key]: value}
        });
        manager.setParams(collectedParams)
    }

    return (
        <form className={className} onSubmit={e => handleSubmit(e)} {...props}>
            {children}
        </form>
    );
};

export default FilterForm;
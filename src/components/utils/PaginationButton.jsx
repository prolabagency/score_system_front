import React from 'react';
import {Loader} from "../ui/Loaders";
import {PrimaryButton} from "../ui/Buttons";

const PaginationButton = ({manager}) => {
    return (
    !!manager.nextPage
        ? manager.isPaginating
            ?   <Loader />
            :    <div className='mt-5 text-center'><PrimaryButton onClick={e => manager.openNextPage()}>Показать еще</PrimaryButton></div>
        : <></>
    );
};

export default PaginationButton;
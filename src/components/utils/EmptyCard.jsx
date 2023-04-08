import React from 'react';

const EmptyCard = ({manager, className = '', ...props}) => {
    if (!manager.isFetching && manager.data.results.length === 0) {
        return (
            <div className={`card text-center ${className}`} {...props}>
                Ничего не найдено или не существует данных
            </div>
        );
    }
    return (<></>)
};

export default EmptyCard;
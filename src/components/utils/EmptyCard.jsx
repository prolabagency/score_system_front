import React from 'react';

const EmptyCard = ({manager, className = '', ...props}) => {
    const len = manager.data.results?.length ?? 0
    if (!manager.isFetching && len === 0) {
        return (
            <div className={`card text-center ${className}`} {...props}>
                Ничего не найдено или не существует данных
            </div>
        );
    }
    return (<></>)
};

export default EmptyCard;
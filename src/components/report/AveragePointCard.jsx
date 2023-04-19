import React from 'react';

const AveragePointCard = ({className = '', point, ...props}) => {
    return (
        <div className={`card flex justify-evenly ${className}`} {...props}>
            <div>
                <b>Средний балл: </b>
                <span>{point.average_point}</span>
            </div>
            <div>
                <b>Допустимый балл: </b>
                <span>{point.allowable_point}</span>
            </div>
        </div>
    );
};

export default AveragePointCard;
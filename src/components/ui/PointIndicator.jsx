import React from 'react';

const PointIndicator = ({children, className = '', isSatisfied = false, ...props}) => {
    return (
        <b className={`${isSatisfied ? 'text-green-500' : 'text-red-500'} ${className}`} {...props}>{children}</b>
    );
};

export default PointIndicator;
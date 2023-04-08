import React from "react";
import loader from './../../assets/img/white_loading.gif'
import {Link} from "react-router-dom";

export const PrimaryLoaderButton = ({children, className = '', isLoading = false, ...props}) => {
    return (
        <button disabled={isLoading} className={`primary_button ${className}`} {...props}>
            {isLoading
                ? <img src={loader}  style={{ width: '1.3rem', display: 'inline' }} alt=''/>
                : children
            }
        </button>
    )
}

export const AccentLoaderButton = ({children, className = '', isLoading= false, ...props}) => {
    return (
        <button disabled={isLoading} className={`accent_button ${className}`} {...props}>
            {isLoading
                ? <img src={loader}  style={{ width: '1.3rem', display: 'inline' }} alt=''/>
                : children
            }
        </button>
    )
}

export const PrimaryButton = ({children, className = '', ...props}) => {
    return (
        <button className={`primary_button ${className}`} {...props}>{children}</button>
    )
}

export const PrimaryLinkButton = ({children, className = '', ...props}) => {
    return (
        <Link className={`primary_button ${className}`} {...props}>{children}</Link>
    )
}

export function LinkButton({children, className = '', ...props}) {
    return (
        <button className={`link_button ${className}`} {...props}>{children}</button>
    )
}
import React, {useEffect, useState} from 'react'
import userSvg from './../../assets/img/user.svg'
import axios from "./../../api/axios_config";


export const PrimaryInput = ({className = '', containerClass = '', errors = [], ...props}) => {
    return (
       <div className={containerClass}>
           <input
               className={`primary_input ${className}`}
               {...props}
           />
           {errors.map((item, idx) =>
                <div className='text-red-600 ml-1 mt-2' key={idx}>{item}</div>
           )}
       </div>
    )
}

export const OutlinedInput = ({className = '', containerClass = '', errors = [], ...props}) => {
    return (
        <div className={containerClass}>
            <input
                className={`outlined_input ${className}`}
                {...props}
            />
            {errors.map((item, idx) =>
                <div className='text-red-600 ml-1 mt-2' key={idx}>{item}</div>
            )}
        </div>
    )
}

export const UploadAvatarInput = ({className = '', preview = null, errors=[], ...props}) => {

    const [avatar, setAvatar] = useState(null)

    const makeAvatar = (e) => {
        if (e.target.files.length !== 0) {
            const avatarUrl = URL.createObjectURL(e.target.files[0]);
            setAvatar(avatarUrl)  
        } else {
            setAvatar(null)
        }
    }

    return (
        <div className={className}>
            <div className='upload_avatar'>
                <img src={avatar || preview || userSvg} alt='' />
                <label htmlFor="upload_avatar">
                    <i className='bx bx-upload'></i>
                </label>
                <input onInput={e => makeAvatar(e)} type="file" id='upload_avatar' {...props}  />
            </div>
            {errors.map((item, idx) =>
                <div className='text-red-600 ml-1 mt-2' key={idx}>{item}</div>
            )}
        </div>
    )
}

export const OutlinedSelect = ({containerClass, className, children, errors, title = null, ...props}) => {
    return (
        <div className={containerClass}>
            <select className={`outlined_select ${className}`} {...props}>
                {title && <option value="">{title}</option>}
                {children}
            </select>
            {errors.map((item, idx) =>
                <div className='text-red-600 ml-1 mt-2' key={idx}>{item}</div>
            )}
        </div>
    )
}

export const OutlinedFetchedSelect = ({
    className = '',
    containerClass = '',
    options,
    valueFiled,
    titleFiled,
    errors = [],
    title = null,
    ...props
}) => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(options.url, {params: options.params, headers: options.headers})
            .then((response) => {
                setData(response.data)}
            )
        // eslint-disable-next-line
    }, [])

    return (
        <div className={containerClass}>
            <select className={`outlined_select ${className}`} {...props}>
                {title && <option value="">{title}</option>}
                {data.map((item, idx) =>
                    <option key={idx} value={item[valueFiled]}>
                        {item[titleFiled]}
                    </option>
                )}
            </select>
            {errors.map((item, idx) =>
                <div className='text-red-600 ml-1 mt-2' key={idx}>{item}</div>
            )}
        </div>

    )
}
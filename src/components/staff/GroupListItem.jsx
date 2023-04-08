import React from 'react'
import { Link } from 'react-router-dom'

const GroupListItem = ({group, className = '', ...props}) => {
  return (
    <Link
        key={group.id}
        to={'staffs/?' + new URLSearchParams({group: group.id})}
        className={`card block ${className}`}
        {...props}
    >
        {group.title}
    </Link>   
  )
}

export default GroupListItem
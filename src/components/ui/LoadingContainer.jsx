import React from 'react'
import { Loader } from './Loaders'

const LoadingContainer = ({isLoading, children, ...props}) => {
  return (
    <div {...props}>
        {isLoading 
            ? <Loader />
            : children}
    </div>
  )
}

export default LoadingContainer
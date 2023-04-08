import React from 'react'
import { motion } from 'framer-motion'

export const Loader = () => {
    return (
        <div className='flex justify-center items-center'>
          <motion.div 
            className="lds-facebook"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.3}}
          >
            <div></div><div></div><div></div>
          </motion.div>
        </div>
    )
}



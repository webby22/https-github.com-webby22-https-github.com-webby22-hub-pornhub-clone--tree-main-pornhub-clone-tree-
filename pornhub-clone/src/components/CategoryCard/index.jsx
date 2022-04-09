import React from 'react'

import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const CategoryCard = ({ bgImg, title, color }) => {
    return (
        <motion.div className='relative mb-1'
            whileHover={{
                scale: 1.03,
                transition: { duration: .2 },
            }}
            whileTap={{ scale: 0.99 }}
        >
            <LazyLoadImage effect="blur" className='!block max-h-[150px] w-full object-cover rounded' src={bgImg} alt={title} style={{ display: "block !important" }} />
            <div className="absolute h-full w-full  top-0 left-0 rounded opacity-[0.7]" style={{ backgroundColor: color }} ></div>
            <div className='absolute h-full w-full flex items-center justify-center top-0 left-0 text-white text-lg  font-bold z-10'>
                {title}
            </div>
        </motion.div>
    )
}

export default CategoryCard

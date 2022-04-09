import { motion } from 'framer-motion';
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { randomColor } from '../../constant/utiliFunc';

const PornstarCard = ({ name, photo }) => {
    return (
        <motion.div className="mb-3"
            whileHover={{
                scale: 1.03,
                transition: { duration: .2 },
            }}
            whileTap={{ scale: 0.99 }}
        >
            <div className='relative bg-slate-600 rounded'>
                <LazyLoadImage
                    // placeholderSrc='https://www.babepedia.com/pics/Lana%20Rhoades_thumb3.jpg'
                    // placeholder='logasfas'
                    effect="blur"
                    src={photo}
                    className='block w-full h-auto'
                    alt={name}
                />
                <div className="absolute left-0 bottom-0 text-center py-2 shadow w-full text-white font-bold " style={{ backgroundColor: randomColor() }} >
                    {name}
                </div>
            </div>
        </motion.div>
    )
}

export default PornstarCard;

import React from 'react'
import { nFormatter } from '../../constant/utiliFunc'

import { motion } from 'framer-motion';

// lazy load
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';

const VideoCard = ({ duration, title, views, thumbnail, rate, date, scrollPosition }) => {

    return (
        <motion.div
            className='mb-5'
            whileHover={{
                scale: 1.02,
                transition: { duration: .2 },
            }}
            whileTap={{ scale: 0.99 }}
        >
            <div className="relative aspect-video  bg-slate-600 rounded">
                <LazyLoadImage
                    effect="blur"
                    scrollPosition={scrollPosition}
                    placeholderSrc={`${thumbnail?.substr(0, thumbnail.length - 8)}.jpg`}
                    className='!block rounded-lg !w-full !h-auto object-cover'
                    src={thumbnail}
                    alt={title} />
                <div className="absolute right-2  bottom-2 bg-[rgba(0,0,0,0.6)] px-2 rounded text-white font-bold">
                    <i className="fa fa-clock"></i>
                    <span className='ml-2'>
                        {duration}
                    </span>
                </div>
            </div>
            <h3 className='text-[#D8DCDF] font-medium text-lg mt-2'>{title?.length > 40 ? `${title.substr(0, 40)}...` : title}</h3>
            <div className='flex text-[#658294] items-center justify-between text-sm'>
                <div className='flex-grow'>
                    <b>Date:</b>
                    <i className="fa fa-calendar-plus mx-2"></i>
                    <span>{date.substr(0, 10)}</span>
                </div>
                <div className='mx-2' title={`${views} Views`}>
                    <i className="fa fa-eye"></i>
                    <span className='ml-2'>
                        {nFormatter(views)}
                    </span>
                </div>
                <div title={`${rate} Likes`}>
                    <i className="fa fa-thumbs-up text-lg"></i>
                    <span className='ml-1'>
                        {String((rate / 5) * 100).substr(0, 5)}%
                    </span>
                </div>
            </div>
        </motion.div>
    )
}

export default trackWindowScroll(VideoCard)

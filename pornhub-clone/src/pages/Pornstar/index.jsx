import React from 'react'
import { Link } from 'react-router-dom'
import PornstarCard from '../../components/PornstarCard'
import { pornstarts } from '../../constant/pornstar'

const Pornstar = () => {
    return (
        <div className='p-2  bg-[#151B20] h-full'>
            <h2 className='font-bold text-white text-xl mb-4'>Pornstars</h2>
            <div className="flex flex-wrap mb-5 overflow-hidden w-full">
                {pornstarts?.map((item, index) => (
                    <Link to={`/videos/${item?.name}`} key={index} className='block px-1 overflow-hidden w-1/2 lg:w-1/4  xl:w-1/6' >
                        <PornstarCard photo={item?.photo} name={item?.name} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Pornstar

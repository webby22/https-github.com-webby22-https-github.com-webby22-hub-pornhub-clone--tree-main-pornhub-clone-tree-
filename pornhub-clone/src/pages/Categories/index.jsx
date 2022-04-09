import React from 'react'
import { Link } from 'react-router-dom'
import CategoryCard from '../../components/CategoryCard'
import { category } from '../../constant/category'
import { randomColor } from '../../constant/utiliFunc'

const Categories = () => {
    return (
        <div className='p-2 bg-[#151B20] h-full'>
            <h2 className='font-bold text-white text-xl mb-4'>Categories</h2>
            <div className="flex flex-wrap mb-5 overflow-hidden">
                {category?.map((item, id) => (
                    <Link to={`/category/${item?.title}`} key={id} className='block p-1 w-full overflow-hidden md:w-1/3 xl:w-1/6'>
                        <CategoryCard bgImg={item?.bgImg} color={randomColor()} title={item?.title} route={item?.route} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Categories

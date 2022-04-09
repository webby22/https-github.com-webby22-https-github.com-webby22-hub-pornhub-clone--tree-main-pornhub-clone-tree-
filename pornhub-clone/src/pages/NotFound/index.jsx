import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="bg-[#222] text-white shadow overflow-hidden h-screen flex items-center justify-center w-full">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-purple-400">404</h1>
                <h1 className="text-6xl font-medium mb-5">Oops! Page not found</h1>
                <p className="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                <Link to={'/'} className="bg-[#e68d07] text-black font-semibold px-6 py-3 rounded-md mr-6">
                    HOME
                </Link>
            </div >
        </div >
    )
}

export default NotFound

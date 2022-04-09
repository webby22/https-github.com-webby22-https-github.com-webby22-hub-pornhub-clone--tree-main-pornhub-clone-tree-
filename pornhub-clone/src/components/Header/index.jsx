import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navitems } from '../../constant/navitems';
import SearchBar from '../SearchBar';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const toggle = () => setNavOpen(!navOpen);
    return (
        <header className='bg-black p-2'>
            <nav className="bg-black fixed top-0 left-0 w-full h-[70px] z-50 flex items-center justify-between">
                <div className='md:flex-grow-0 flex-grow'>
                    <Link to="/">
                        <img className=' h-auto w-[150px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Pornhub-logo.svg/1280px-Pornhub-logo.svg.png" alt="logo" />
                    </Link>
                </div>
                <div className="hidden md:block flex-grow mx-2">
                    <SearchBar />
                </div>
                <div className="mx-2 ">
                    <button className='h-[50px] w-[50px] rounded bg-[#e68d07] hover:text-white text-lg cursor-pointer '>
                        <i className="fa fa-user"></i>
                    </button>
                </div>
                <div className="block md:hidden mx-2">
                    <button className='h-[50px] w-[50px] rounded bg-[#e68d07] hover:text-white text-lg cursor-pointer ' onClick={toggle}>
                        {navOpen ? <i className="fa fa-times text-2xl"></i> : <i className="fa fa-bars"></i>}
                    </button>
                </div>
                {navOpen && <div className="absolute top-[70px] left-0 w-screen bg-[rgba(0,0,0,0.9)] backdrop-blur" style={{ height: "calc(100vh - 70px)" }}>
                    <div className="flex flex-col p-2">
                        {navitems?.map((item, index) => (
                            <NavLink
                                to={item?.route}
                                key={index}
                                className={({ isActive }) => (isActive ? 'block p-2 rounded text-center bg-[#333] hover:bg-[#e68d07] font-bold hover:text-black text-xl mb-3 text-[#e68d07]' : 'block p-2 rounded text-center text-white bg-[#333] hover:bg-[#e68d07] font-bold hover:text-black text-xl mb-3')}
                                onClick={toggle}
                            >
                                {item?.title}
                            </NavLink>
                        ))}
                    </div>
                </div>}
            </nav>

            <div className="flex md:hidden mt-[70px] mx-2 items-center rounded bg-white">
                <SearchBar />
            </div>
            <div className="hidden md:block my-3 text-white mt-[70px]">
                {navitems?.map((item, index) => (
                    <NavLink to={item?.route} key={index}
                        className={({ isActive }) => (isActive ? 'navItem text-[#e68d07]' : 'navItem')}
                    >
                        {item?.title}
                    </NavLink>
                ))}
            </div>
        </header>
    )
}

export default Header

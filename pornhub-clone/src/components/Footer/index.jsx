import React from 'react'
import { Link } from 'react-router-dom';
import { navitems } from '../../constant/navitems';

const Footer = () => {
    const year = new Date();
    return (
        <footer className="text-center lg:text-left bg-black text-white">
            <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
                <div className="mr-12 hidden lg:block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div className="flex justify-center">
                    <a href="#!" className="mr-6 text-gray-100">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!" className="mr-6 text-gray-100">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#!" className="mr-6 text-gray-100">
                        <t className="fab fa-google"></t>
                    </a>
                    <a href="#!" className="mr-6 text-gray-100">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#!" className="mr-6 text-gray-100">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#!" className="text-gray-100">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid grid-1 md:grid-cols-2 gap-8">
                    <div className="">
                        <h6 className="
                            uppercase
                            font-semibold
                            mb-4
                            flex
                            items-center
                            justify-center
                            md:justify-start
                            ">
                            <img className='w-[200px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Pornhub-logo.svg/1280px-Pornhub-logo.svg.png" alt="" />
                        </h6>
                        <p>
                            The Pornhub team is always updating and adding more porn videos every day. It's all here and 100% free porn. We have a huge free XXX video selection that you can download or stream. Pornhub is the most complete and revolutionary porn tube site. We offer streaming porn videos, XXX photo albums, and the number 1 free sex community on the net.
                        </p>
                    </div>
                    <div className="">
                        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Menu
                        </h6>
                        {navitems?.map((item, index) => (
                            <p className="mb-4" key={index}>
                                <Link to={item?.route} className='text-gray-100' >
                                    {item?.title}
                                </Link>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="text-center p-6 bg-gray-900">
                <span>© {year?.getFullYear()} Copyright:</span>
                <a className="text-gray-100 font-semibold" href="https://pornhub.com/">Pornhub</a>
            </div>
        </footer>
    )
}

export default Footer

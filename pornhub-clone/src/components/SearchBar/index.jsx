import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getVideos } from '../../constant/api';

const SearchBar = () => {
    const [query, setQuery] = useState();
    const [result, setResult] = useState([])
    const navigate = useNavigate();
    const inputChange = e => {
        setQuery(e.target.value);
        const getResult = async () => {
            const { data } = await axios(getVideos({ query }));
            setResult(data.videos.map(i => ({
                title: i?.title,
                id: i?.id,
            })));
        }
        getResult();
    }
    return (
        <form className='flex w-full items-center rounded bg-white' onSubmit={(e) => {
            e.preventDefault();
            navigate(`/search/${query}`);
            setResult([]);
        }}>
            <div className="relative w-full rounded bg-white">
                <input className='h-[50px] w-full font-medium px-6 outline-none bg-transparent border-0 text-lg bold ' type="text" placeholder='Search from 13,298,798 videos' onChange={(e) => inputChange(e)} value={query} />
                {query && <button className='absolute top-0 right-0 h-[50px] w-[50px] text-xl cursor-pointer  text-black' onClick={() => setQuery("")} >
                    <i className="fa fa-times"></i>
                </button>}
                {result?.length !== 0 && query && <div className="absolute top-[70px] z-30 rounded  p-2 w-full backdrop-blur bg-[rgba(0,0,0,0.8)]">
                    <h3 className="text-white mb-3 font-bold text-xl">Searching for {query}</h3>
                    <div className="max-h-[250px] overflow-y-scroll">
                        {result?.map(i => (
                            <Link to={`/search/${i?.title}`} key={i?.id} className='block text-white mb-3'
                                onClick={() => {
                                    setResult([]);
                                    setQuery(i.title);
                                }} >
                                {i?.title.length > 50 ? `${i?.title.substr(0, 50)}...` : i?.title}
                            </Link>
                        ))}
                    </div>
                </div>}
            </div>
            <button className='h-[50px] w-[60px] rounded cursor-pointer text-lg bg-[#e68d07] hover:text-white transition-all ' type='submit'>
                <i className="fa fa-search"></i>
            </button>
        </form>
    )
}

export default SearchBar

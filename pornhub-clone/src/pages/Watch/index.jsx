import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import VideoCard from '../../components/VideoCard';
import { getSingleVideo, getVideos } from '../../constant/api';

// skeleton
import Skeleton from 'react-loading-skeleton'
import { nFormatter } from '../../constant/utiliFunc';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Watch = () => {
    const { id } = useParams();
    const [video, setVideo] = useState();
    const [sideVideos, setSideVideos] = useState();
    const [bottomVideo, setBottomVideo] = useState()
    const [preview, setPreview] = useState();
    const [keywords, setKeywords] = useState();
    useEffect(() => {
        const getVideo = async () => {
            const { data } = await axios(getSingleVideo(id));
            setVideo(data);
            setKeywords(data?.keywords.split(","));
            setPreview(data?.thumbs);
        }
        return getVideo();
    }, [id]);

    useEffect(() => {
        const getVideo = async () => {
            if (keywords) {
                const { data } = await axios(getVideos({ query: keywords[0], total: 11 }));
                setSideVideos(data?.videos);
            }
        }
        return getVideo();
    }, [keywords]);
    useEffect(() => {
        const getVideo = async () => {
            if (keywords) {
                const { data } = await axios(getVideos({ query: keywords[1], total: 21 }));
                setBottomVideo(data?.videos);
            }
        }
        return getVideo();
    }, [keywords]);

    return (
        <div className='p-2 bg-[#151B20] text-white min-h-screen'>

            <div className="lg:flex">
                <div className="lg:flex-grow p-2">
                    <Skeleton height={200} />
                    {video && <iframe className='aspect-video w-full rounded' title={video?.title} allowFullScreen src={video?.embed} frameBorder="0"></iframe>}
                    <h2 className="font-bold text-2xl my-2">{video?.title}</h2>
                    <div className='flex my-2 text-[#658294] items-center justify-between text-sm'>
                        <div className='flex-grow'>
                            <b>Date:</b>
                            <i className="fa fa-calendar-plus mx-2"></i>
                            <span>{video?.added.substr(0, 10)}</span> in
                            <span>{video?.added.substr(10, video?.added.length)}</span>
                        </div>
                        <div className='mx-2' title={`${video?.views} Views`}>
                            <i className="fa fa-eye"></i>
                            <span className='ml-2'>
                                {nFormatter(video?.views)}
                            </span>
                        </div>
                        <div title={`${video?.rate} Likes`}>
                            <i className="fa fa-thumbs-up text-lg"></i>
                            <span className='ml-1'>
                                {String((video?.rate / 5) * 100).substr(0, 5)}%
                            </span>
                        </div>
                    </div>
                    <div className="my-2">
                        <b className='text-xl'>Preview:</b>
                        <div className="flex max-w-full gap-3 overflow-x-scroll rounded">
                            {preview?.map((item, index) => item !== "" && (
                                <LazyLoadImage src={item?.src} key={index} className='min-h-[200px] rounded' alt="" />
                            ))}
                        </div>
                    </div>
                    <div className='my-2'>
                        <b className='text-xl'>Keywords:</b>
                        <div className="flex flex-wrap">
                            {keywords?.map((item, index) => item !== "" && (
                                <Link to={`/videos/${item}`} key={index} className='block rounded-full m-1 py-2 px-5 cursor-pointer text-lg bg-[#e68d07] text-white hover:bg-black transition-all '>
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <h2 className="font-bold text-white text-xl mb-4">Similar Videos</h2>
                    <div className="flex flex-wrap flex-col md:flex-row overflow-hidden">
                        {bottomVideo?.map(item => (
                            <Link to={`/watch/${item?.id}`} key={item?.id} className='block px-2 w-full lg:w-1/3 overflow-hidden md:w-1/2' >
                                <VideoCard
                                    thumbnail={item?.default_thumb?.src}
                                    duration={item?.length_min} rate={item?.rate}
                                    views={item?.views}
                                    date={item?.added}
                                    title={item?.title}
                                    route={item?.route}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="lg:max-w-[400px] p-2 ">
                    <h2 className="font-bold text-white text-xl mb-4">Recommended Videos</h2>
                    <div className="flex flex-wrap flex-col md:flex-row overflow-hidden">
                        {sideVideos?.map(item => (
                            <Link to={`/watch/${item?.id}`} key={item?.id} className='block px-2 lg:w-full overflow-hidden md:w-1/2' >
                                <VideoCard
                                    thumbnail={item?.default_thumb?.src}
                                    duration={item?.length_min} rate={item?.rate}
                                    views={item?.views}
                                    date={item?.added}
                                    title={item?.title}
                                    route={item?.route}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Watch

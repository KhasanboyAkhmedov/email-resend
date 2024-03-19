'use client'
import React, { useState } from 'react'
import axios from 'axios';

const Download =  () => {
    const [link, setLink] = useState('');
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    const handleLink = async (e)=>{
        setIsLoading(true)
        e.preventDefault();
        console.log(link)

        const options = {
            method: 'GET',
            url: 'https://social-media-video-downloader.p.rapidapi.com/smvd/get/all',
            params: {
                url: link,
            },
            headers: {
                'X-RapidAPI-Key': 'c750a15cc4msh1cd733017e462e0p17a130jsned3226ca9846',
                'X-RapidAPI-Host': 'social-media-video-downloader.p.rapidapi.com'
            }
        };

        try {
            const {data} = await axios.request(options);
            setData(data)
            
            console.log(data);
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false)
    }

  return (
    <section>
        <div className='flex justify-center flex-col items-center'>
            <form className='flex flex-row w-[40%] my-5'>
                <input  
                type='url'
                value={link}
                onChange={(e)=> setLink(e.target.value)}
                required
                className="border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter link to download"
                />
            <button onClick={handleLink} type='submit' className='mx-2 border border-black px-3 py-2 rounded hover:text-white hover:bg-black' >GET</button> 

            </form>
            {isLoading && 'Loading smth'}
            <div className='my-3 mx-5'>
                {/* {data ? (data.title) : "Loading..."} */}
                {data?.thumbnail}
                <button className='border rounded px-2 py-1 text-black mx-2 hover:text-white hover:bg-black '><a target='_blank' href={data?.links.link}>Download Low Quality</a></button>
            </div>
        </div>
    </section>

  )
}

export default Download
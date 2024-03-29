import React from 'react';
import requests from '../utils/requests';
import { useRouter } from 'next/router';


function Nav() {
    const router = useRouter();
    return (
        <nav className='relative'>
            <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
                {Object.entries(requests).map(([key, { title, url }]) => (
                <h2
                key={key}
                onClick={() => router.push(`/?genre=${key}`)}
                className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-red active:text-red-500'>
                {title}
                </h2>
                ))}
            </div>
            <div className='absolute top-0 right-0 bg-gradient-to-l from-[#000000] h-10 w-1/12' />
            <div className='absolute top-0 left-0 bg-gradient-to-r from-[#000000] h-10 w-1/12' />
        </nav>
    );
}


export default Nav;
import React from 'react';
import MenuIteam from './MenuIteam';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';

export default function Header() {
    return (
        <div className='flex justify-between p-3 max-w-6xl mx-auto justify-between'>
            <div className='flex gap-4'>
                <MenuIteam title="Home" address="/" Icon={AiFillHome} />
                <MenuIteam title="About" address="/about" Icon={BsFillInfoCircleFill} />
            </div>
            <div className='flex gap-2 items-center'>
                <span className='text-2xl font-bold bg-amber-600 px-2 py-1 rounded-lg'>IMDB</span>
                <span className='text-amber-600 text-xl hidden sm:inline'>App</span>
            </div>
        </div>
    )
}

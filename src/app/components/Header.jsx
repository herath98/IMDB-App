import React from 'react';
import MenuIteam from './MenuIteam';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import DarkmoodSwitch from './DarkmoodSwitch';

export default function Header() {
    return (
        <div className='flex  p-3 max-w-6xl mx-auto justify-between'>
            <div className='flex gap-4'>
                <MenuIteam title="Home" address="/" Icon={AiFillHome} />
                <MenuIteam title="About" address="/about" Icon={BsFillInfoCircleFill} />
            </div>
            <div>


                <div className='flex gap-2 items-center'>
                    <DarkmoodSwitch />
                    <Link href='/' className=' text-xl hidden sm:inline'>
                        <span className='text-2xl bg-amber-600 font-bold px-2 py-1 rounded-lg'>IMDB</span>
                        <span className='text-amber-600 text-xl hidden sm:inline'>App</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

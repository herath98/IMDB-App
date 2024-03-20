'use client'
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation';

export default function () {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');  
    return (
       
        <div>
            <div className='flex justify-center p-4 
        lg:text-lg gap-4 text-center bg-amber-600'>
                <Link
                className={`hover:text-black hover:text-lg font-sans
                 ${genre === 'fetchTrending' ? 'text-amber-600' : 'text-white  '}`}
                 href='/'>Tranding</Link>
               
                 <Link
                 className={`hover:text-black hover:text-lg font-sans
                  ${genre === 'fetchtopRated' ? 'text-amber-600' : 'text-white  '}`}
                  href='/'>Top Rated
                  </Link>
            </div>
        </div>
    )
}

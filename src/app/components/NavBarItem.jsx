'use client'
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react';

export default function NavBarItem({title,param}) {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
  
    return (
    <div>
      <Suspense>
      <Link 
        className={`hover:text-yellow-400 font-semibold
                    ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-yellow-400 rounded-lg' : ''}
                    `}
        href={`/?genre=${param}`}>
            {title}
      </Link>
      </Suspense>
    </div>
  )
}

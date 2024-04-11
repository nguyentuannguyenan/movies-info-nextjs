import React from 'react'
import NavBarItem from './NavBarItem'

export default function NavBar() {
  return (
    <div className="flex dark:bg-gray-600 bg-yellow-100 p-4 lg:text-lg justify-center gap-20">
      <NavBarItem title="Trending" param="fetchTrending"/>
      <NavBarItem title="Top Rated" param="fetchTopRated"/>
      
    </div>
    
  )
}

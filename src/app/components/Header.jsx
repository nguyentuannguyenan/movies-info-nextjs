import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from "react-icons/ai"
import { BsInfoCircleFill } from "react-icons/bs";
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';


export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome}/>
        <MenuItem title="about" address="/about" Icon={BsInfoCircleFill}/>
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwitch/>
        <Link href={'/'} className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-yellow-400 py-1 px-2 rounded-lg">
            PHIMMOI
          </span>
          <span className="text-xl font-bold hidden sm:inline">
            DaDen
          </span>
        </Link>
      </div>
    </div>
  )
}

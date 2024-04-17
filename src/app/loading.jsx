import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    <div className="flex justify-center">
      <Image className="h-50 mt-15" src="spinner.svg" alt="loading..." width={200} height={200}/>
    </div>
  )
}

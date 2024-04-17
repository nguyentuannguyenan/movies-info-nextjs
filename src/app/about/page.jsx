import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <div className=" px-5 max-w-6xl mx-auto sm:flex">
      <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
              <Image className="rounded shadow-md" src="/image.png" alt="about" width={500} height={500}/>
          </div>
      </div>
      <div className="sm:w-1/2 p-5 mt-5">
          <div className="text">
              <span className="text-gray-500 border-b-2 border-yellow-500 uppercase dark:text-white">About us</span>
              <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-yellow-500">Our Website</span>
              </h2>
              <p className="text-gray-500 dark:text-white">
              Welcome to Phim Moi Da Den, your one-stop destination for all things movies! At Phim Moi Da Den we're dedicated to providing you with accurate, insightful, and entertaining information about your favorite films. Join us as we dive deep into the fascinating world of cinema, where every movie tells a story worth exploring. This website was developed by Nguyen Tuan Nguyen An, a young software developer from Hanoi, Vietnam.
              </p>
          </div>
      </div>
  </div>
  )
}

import React from 'react'

export default function Page() {
  return (
    <div class=" px-5 max-w-6xl mx-auto sm:flex">
      <div class="sm:w-1/2 p-10">
          <div class="image object-center text-center">
              <img className="rounded shadow-md" src="/image.png"/>
          </div>
      </div>
      <div class="sm:w-1/2 p-5 mt-5">
          <div class="text">
              <span class="text-gray-500 border-b-2 border-yellow-500 uppercase dark:text-white">About us</span>
              <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-yellow-500">Our Website</span>
              </h2>
              <p class="text-gray-500 dark:text-white">
              Welcome to Phim Moi Da Den, your one-stop destination for all things movies! At Phim Moi Da Den we're dedicated to providing you with accurate, insightful, and entertaining information about your favorite films. Join us as we dive deep into the fascinating world of cinema, where every movie tells a story worth exploring. This website was developed by Nguyen Tuan Nguyen An, a young software developer from Hanoi, Vietnam.
              </p>
          </div>
      </div>
  </div>
  )
}

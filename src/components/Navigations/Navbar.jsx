import React from 'react'
import { CiSearch } from "react-icons/ci";
import { TbVector } from "react-icons/tb";

export default function Navbar() {
  return (
    //Tried to Maintain Padding and Margins as per the given Screen Shots..
    <div className='flex border gap-[106px] w-full h-[92px] p-6 items-center'>
      <div>
        <h1 className='text-lg font-semibold'>AI/ML Modle Builder</h1>
      </div>
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
        <CiSearch className="text-black" />
        <input
          type="text"
          placeholder="Search By Name, ID"
          className="bg-transparent outline-none pl-2"
        />
        <div className='flex justify-center items-center gap-1'>
          <TbVector />
          <h1>K</h1>
        </div>
      </div>
    </div>
  )
}

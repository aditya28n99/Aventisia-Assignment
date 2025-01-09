import React from 'react'
import { CiSearch } from "react-icons/ci";
import { TbVector } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegHeart, FaChevronDown } from "react-icons/fa6";

export default function Navbar() {
  return (
    //Tried to Maintain Padding and Margins as per the given Screen Shots..
    <div className='flex border justify-between w-full h-[92px] p-6 items-center bg-white shadow-md'>
      <div>
        <h1 className='text-lg font-semibold'>AI/ML Modle Builder</h1>
      </div>
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
        <CiSearch className="text-black" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none pl-2"
        />
        <div className='flex justify-center items-center gap-1'>
          <TbVector />
          <h1>K</h1>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex gap-4">
          <div className="relative flex border rounded-full p-[10px] text-lg">
            <IoNotificationsOutline />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-300 text-xs font-bold text-black">
              2
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex border rounded-full p-[10px] text-lg">
            <FaRegHeart />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex border py-[10px] text-lg">
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex border rounded-full p-[20px] text-lg bg-gray-500"></div>
          <div>
            <h1 className='font-medium'>Neurotic Spy</h1>
            <h1 className='text-sm text-gray-400'>Neurotic@gmail.com</h1>
          </div>
          <FaChevronDown />
        </div>
      </div>

    </div>
  )
}

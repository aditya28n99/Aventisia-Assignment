'use client';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import {
  Bars3Icon,
} from '@heroicons/react/24/outline'

import { Search, Bell, Heart, ChevronDown } from 'lucide-react';

type NavbarProps = {
  onSidebarToggle: () => void;
};
export default function Navbar({ onSidebarToggle }: Readonly<NavbarProps>) {

  return (
    <div className="sticky top-0 z-40 flex p-[19px] items-center gap-x-4 border-b border-gray-200 bg-white shadow-sm sm:gap-x-6 sm:px-6">
      {/* Sidebar toggle button */}
      <button
        type="button"
        onClick={onSidebarToggle}
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
      </button>

      <div className="flex flex-1 items-center justify-between gap-x-4 lg:gap-x-6">
        {/* Navbar Title */}
        <div className="text-center items-center flex-1 sm:flex-none">
          <h1 className="text-lg font-semibold truncate sm:text-xl">
            AI/ML Model Builder
          </h1>
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex w-full max-w-md items-center bg-[#F3F3FD] px-3 py-1 rounded-lg text-slate-500">
          <Search className="text-slate-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none pl-2 flex-1"
          />
          <div className="flex items-center gap-1 ml-4">
            <h1 className="text-2xl">⌘</h1>
            <h2>K</h2>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          {/* Notification Button */}
          <div className='flex gap-[14px]'>

          <button
            type="button"
            className="relative p-2.5 text-gray-400 hover:text-gray-500 border rounded-full text-lg"
            >
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-300 text-xs font-bold text-black">
              2
            </span>
            <Bell aria-hidden="true" className="h-6 w-6" />
          </button>

          <button
            type="button"
            className="p-2.5 relative text-gray-400 hover:text-gray-500 border rounded-full text-lg"
            >
            <Heart aria-hidden="true" className="h-6 w-6" />
          </button>
          </div>

          {/* Separator */}
          <div
            aria-hidden="true"
            className="hidden lg:block lg:h-10 lg:w-px lg:bg-[#CBD5E1]"
          />

          {/* Profile Dropdown */}
          <Menu as="div" className="relative">
            <MenuButton className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">Open user menu</span>
              <img
                alt="User"
                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/Starbucks_Corporation_Logo_2011.svg-e1657703028844.png?auto=format&q=60&fit=max&w=930"
                className="h-8 w-8 rounded-full bg-gray-200 "
              />
              <span className="hidden lg:flex lg:items-center">
                <span className="ml-4 text-sm font-semibold text-gray-900">
                  <div className="text-left">
                    <h1 className="font-bold text-base">{'Neurotic Spy'}</h1>
                    <h2 className="text-xs text-gray-500">
                      {'Neurotic@taildo.com'}
                    </h2>
                  </div>
                </span>
                <ChevronDown aria-hidden="true" className="ml-2 h-5 w-5 text-gray-400" />
              </span>
            </MenuButton>
            <MenuItems
              className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5"
            >
              <MenuItem>
                <a
                  href="#"
                  onClick={() => console.log('User Signed Out')}
                  className="block px-3 py-1 text-sm text-gray-900 hover:bg-gray-50"
                >
                  {'Sign out'}
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
}

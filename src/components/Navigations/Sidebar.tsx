'use client';

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { RxDashboard, RxLayers, RxActivityLog } from "react-icons/rx";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import Button from './Button';
// import logo from '../../../../public/Aventisia-logo.png'

import { Dispatch, SetStateAction, FC } from 'react';

type SidebarProps = {
  isOpen: boolean; // Indicates if the sidebar is open using true false
  onClose: () => void; // Function to close the sidebar
  setCurrentView: Dispatch<SetStateAction<string>>; // Function to set the current view from switchcase
  currentView: string; // The current active view selected
};

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose, setCurrentView, currentView }) => {
  return (
    <>
      {/* Mobile Sidebar */}
      <Dialog open={isOpen} onClose={onClose} className="relative z-50 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                <button type="button" onClick={onClose} className="-m-2.5 p-2.5">
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                </button>
              </div>
            </TransitionChild>
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
              <div className="flex h-16 shrink-0 items-center">
              <img src={'/Aventisia-logo.png'} alt="Logo" className="w-[166.01px]" />
              </div>
              <div className="flex flex-col gap-7 m-5">
                <div className="flex flex-col gap-2">
                  <h1 className='text-sm'>Model Library</h1>
                  <Button
                    onClick={() => setCurrentView('ModelLibrary')}
                    isActive={currentView === "ModelLibrary"}
                    icon={RxDashboard}>
                    ModelLibrary
                  </Button>
                </div>
                <div className="flex flex-col gap-2">
                  <h1>Extraction Builder</h1>
                  <Button
                    onClick={() => setCurrentView('LabelData')}
                    isActive={currentView === "LabelData"}
                    icon={RxDashboard}>
                    Label Data
                  </Button>
                  <Button
                    onClick={() => setCurrentView('Model')}
                    isActive={currentView === "Model"}
                    icon={RxLayers}>
                    Model
                  </Button>
                  <Button
                    onClick={() => setCurrentView('Test')}
                    isActive={currentView === "Test"}
                    icon={RxActivityLog}>
                    Test
                  </Button>
                </div>
                <div>
                  <h1>Help</h1>
                  <Button
                    onClick={() => setCurrentView('Settings')}
                    isActive={currentView === "Settings"}
                    icon={FiSettings}>
                    Settings
                  </Button>
                  <Button
                    onClick={() => setCurrentView('Support')}
                    isActive={currentView === "Support"}
                    icon={FaChalkboardTeacher}>
                    Support
                  </Button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Static Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-72 w-[264px]">
        <div className="flex grow flex-col drop-shadow-md bg-white overflow-y-auto w-[264px]">
          <div className="flex items-center bg-[#F8FAFC] ">
            <img
              alt="Your Company"
              src={'/Aventisia-logo.png'}
              className="w-[166px] my-4 ml-6"
            />
          </div>
          {/* Add Sidebar navigation */}
          <div className="flex flex-col gap-7 m-5">
            <div className="flex flex-col gap-2">
              <h1 className='text-sm font-semibold'>Model Library</h1>
              <Button
                onClick={() => setCurrentView('ModelLibrary')}
                isActive={currentView === "ModelLibrary"}
                icon={RxDashboard}>
                ModelLibrary
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className='text-sm font-semibold'>Extraction Builder</h1>
              <Button
                onClick={() => setCurrentView('LabelData')}
                isActive={currentView === "LabelData"}
                icon={RxDashboard}>
                Label Data
              </Button>
              <Button
                onClick={() => setCurrentView('Model')}
                isActive={currentView === "Model"}
                icon={RxLayers}>
                Model
              </Button>
              <Button
                onClick={() => setCurrentView('Test')}
                isActive={currentView === "Test"}
                icon={RxActivityLog}>
                Test
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className='text-sm font-semibold'>Help</h1>
              <Button
                onClick={() => setCurrentView('Settings')}
                isActive={currentView === "Settings"}
                icon={FiSettings}>
                Settings
              </Button>
              <Button
                onClick={() => setCurrentView('Support')}
                isActive={currentView === "Support"}
                icon={FaChalkboardTeacher}>
                Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

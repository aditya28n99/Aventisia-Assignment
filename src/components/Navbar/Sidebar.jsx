import React from 'react'
import Aventisia from "../../assets/Aventisia-logo.png"
import { RxDashboard, RxLayers, RxActivityLog } from "react-icons/rx";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

export default function Sidebar({ setCurrentView }) {
    //we are passing the required component from the sidebar to show that on the app landing page. 
    return (
      <div className="flex flex-col border w-[264px]">
        <div className="flex pl-6 bg-slate-100 h-[92px] items-center">
          <img src={Aventisia} alt="Logo" className="w-[166.01px]" />
        </div>
        <div className="flex flex-col gap-7 m-5">
          <div className="flex flex-col gap-2">
            <h1>Model Library</h1>
            <button
                //here with this set view function later we update the state with this prop..
              onClick={() => setCurrentView('ModelLibrary')}
              className="flex gap-2 items-center p-2 rounded-lg hover:bg-blue-700 hover:text-white"
            >
              <RxDashboard />
              <h1>Model Library</h1>
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Extraction Builder</h1>
            <button
              onClick={() => setCurrentView('LabelData')}
              className="flex gap-2 items-center p-2 rounded-lg hover:bg-blue-700 hover:text-white"
            >
              <RxDashboard />
              <h1>Label Data</h1>
            </button>
            <button
              onClick={() => setCurrentView('Model')}
              className="flex gap-2 items-center p-2 rounded-lg hover:bg-blue-700 hover:text-white"
            >
              <RxLayers />
              <h1>Model</h1>
            </button>
            <button
              onClick={() => setCurrentView('Test')}
              className="flex gap-2 items-center p-2 rounded-lg hover:bg-blue-700 hover:text-white"
            >
              <RxActivityLog />
              <h1>Test</h1>
            </button>
          </div>
          <div>
            <h1>Settings</h1>
            <button
              onClick={() => setCurrentView('Settings')}
              className="flex gap-2 items-center p-2 rounded-lg hover:bg-blue-700 hover:text-white"
            >
              <FiSettings />
              <h1>Settings</h1>
            </button>
            <button
              onClick={() => setCurrentView('Support')}
              className="flex gap-2 items-center p-2 rounded-lg hover:bg-blue-700 hover:text-white"
            >
              <FaChalkboardTeacher />
              <h1>Support</h1>
            </button>
          </div>
        </div>
      </div>
    );
  }
  

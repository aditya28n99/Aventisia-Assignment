import React from 'react'
import Aventisia from "../../assets/Aventisia-logo.png"
import { RxDashboard, RxLayers, RxActivityLog } from "react-icons/rx";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import Button from '../Button/Button';

export default function Sidebar({ setCurrentView, currentView }) {

  //we are passing the required component from the sidebar to show that on the app landing page. 
  return (
    <div className="flex flex-col border w-[264px] bg-white text-sm font-medium shadow-md">
      <div className="flex pl-6 bg-slate-100 h-[92px] items-center">
        <img src={Aventisia} alt="Logo" className="w-[166.01px]" />
      </div>
      <div className="flex flex-col gap-7 m-5">
        <div className="flex flex-col gap-2">
          <h1>Model Library</h1>

          {/* <button
            //here with this set view function later we update the state with this prop..
            onClick={() => setCurrentView('ModelLibrary')}
            className="flex gap-2 items-center p-2 rounded-lg hover:bg-blue-700 hover:text-white"
          >
            <RxDashboard />
            <h1>Model Library</h1>
          </button> */}

          {/* Improved code with this button component */}

          <Button
            onClick={() => setCurrentView('ModelLibrary')}
            isActive={currentView === "ModelLibrary"}
            icon={RxDashboard}>
            Model Library

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
  );
}


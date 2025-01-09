import React, { useState } from 'react';
import Sidebar from '../components/Navigations/Sidebar';
import ModelLibrary from '../components/ApplicationLandingScreen/ModelLibrary/ModelLibrary';
import LabelData from '../components/ApplicationLandingScreen/LabelData/LabelData';
import Model from '../components/ApplicationLandingScreen/Model/Model';
import Test from '../components/ApplicationLandingScreen/Test/Test';
import Settings from '../components/ApplicationLandingScreen/Settings/Settings';
import Support from '../components/ApplicationLandingScreen/Support/Support';
import Navbar from '../components/Navigations/Navbar';

export default function ApplicationLandingScreen() {
  //setting up a component state for the screen from sidebar
  const [currentView, setCurrentView] = useState('ModelLibrary');

  // from this switch cases we can make the component routing insted of react router. 
  const renderView = () => {
    switch (currentView) {
      case 'ModelLibrary':
        return <ModelLibrary />;
      case 'LabelData':
        return <LabelData />;
      case 'Model':
        return <Model />;
      case 'Test':
        return <Test />;
      case 'Settings':
        return <Settings />;
      case 'Support':
        return <Support />;
      default:
        return <ModelLibrary />;
    }
  };

  return (
    <div className="flex">
      <Sidebar setCurrentView={setCurrentView} />
      <div className="flex-grow">
        <Navbar/>
        <div className="p-6">{renderView()}</div>
      </div>
    </div>
  );
}

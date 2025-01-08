import React, { useState } from 'react';
import Sidebar from '../components/Navbar/Sidebar';
import ModelLibrary from '../components/ModelLibrary/ModelLibrary';
import LabelData from '../components/LabelData/LabelData';
import Model from '../components/Model/Model';
import Test from '../components/Test/Test';
import Settings from '../components/Settings/Settings';
import Support from '../components/Support/Support';

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
        <div className="p-6">{renderView()}</div>
      </div>
    </div>
  );
}

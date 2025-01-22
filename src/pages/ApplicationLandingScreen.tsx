import LabelData from '@/components/Dashboard/LabelData/LabelData';
import ModelLibrary from '@/components/Dashboard/ModelLibrary/ModelLibrary';
import Navbar from '@/components/Dashboard/Navigations/Navbar';
import Sidebar from '@/components/Dashboard/Navigations/Sidebar';
import React, { useState } from 'react';


const ApplicationLandingScreen: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>('ModelLibrary');

  const renderView = () => {
    switch (currentView) {
      case 'ModelLibrary':
        return <ModelLibrary />;
      case 'LabelData':
        return <LabelData />;
    //   case 'Model':
    //     return <Model />;
    //   case 'Test':
    //     return <Test />;
    //   case 'Settings':
    //     return <Settings />;
    //   case 'Support':
    //     return <Support />;
      default:
        return <ModelLibrary />;
    }
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} setCurrentView={setCurrentView} currentView={currentView}/>
      <div className="lg:pl-72">
      <Navbar onSidebarToggle={() => setSidebarOpen(true)} />
        <div className="flex-grow overflow-auto p-6">
          {renderView()}
        </div>
      </div>
    </div>
  );
};

export default ApplicationLandingScreen;


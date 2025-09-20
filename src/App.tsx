import React, { useState, useEffect } from 'react';
import invitationData from './data/invitation.json';
import FloatingCircles from './components/FloatingCircles';
import InvitationCard from './components/InvitationCard';
import LocationMap from './components/LocationMap';
import AboutMe from './components/AboutMe';
import PhotoGallery from './components/PhotoGallery';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const { birthday, aboutMe, photoGallery } = invitationData;

  const renderSection = () => {
    switch (activeSection) {
      case 0:
        return <InvitationCard data={birthday} />;
      case 1:
        return <LocationMap location={birthday.location} primaryColor={birthday.theme.primaryColor} />;
      case 2:
        return <AboutMe data={aboutMe} primaryColor={birthday.theme.primaryColor} />;
      case 3:
        return <PhotoGallery data={photoGallery} primaryColor={birthday.theme.primaryColor} />;
      default:
        return <InvitationCard data={birthday} />;
    }
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-gray-50 to-black flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin mx-auto" style={{ borderColor: birthday.theme.primaryColor + ' transparent ' + birthday.theme.primaryColor + ' ' + birthday.theme.primaryColor }}></div>
          <p className="text-gray-600 font-medium flex items-center justify-center space-x-2">
            <span>🎉</span>
            <span>Preparando la celebración...</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-gray-50 to-black relative overflow-hidden">
      <FloatingCircles colors={birthday.theme.colors} />
      
      <main className="relative z-10 pb-20">
        {renderSection()}
      </main>

      <Navigation 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        primaryColor={birthday.theme.primaryColor}
      />
    </div>
  );
}

export default App;
import React from 'react';
import { Home, MapPin, Heart, Camera } from 'lucide-react';

interface NavigationProps {
  activeSection: number;
  onSectionChange: (section: number) => void;
  primaryColor: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange, primaryColor }) => {
  const sections = [
    { id: 0, icon: Home, label: 'Invitación', emoji: '🎉' },
    { id: 1, icon: MapPin, label: 'Ubicación', emoji: '📍' },
    { id: 2, icon: Heart, label: 'Acerca de Mí', emoji: '🥳' },
    { id: 3, icon: Camera, label: 'Fotos', emoji: '📸' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          
          return (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'transform scale-110' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <Icon 
                className={`w-6 h-6 transition-colors duration-300 ${
                  isActive ? 'text-current' : 'text-gray-400'
                }`}
                style={{ color: isActive ? primaryColor : undefined }}
              />
              <span className="text-xs">{section.emoji}</span>
              <span 
                className={`text-xs font-medium transition-colors duration-300 ${
                  isActive ? 'text-current' : 'text-gray-400'
                }`}
                style={{ color: isActive ? primaryColor : undefined }}
              >
                {section.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
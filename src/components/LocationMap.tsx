import React from 'react';
import { MapPin, ExternalLink, QrCode } from 'lucide-react';

interface LocationData {
  name: string;
  address: string;
  mapUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface LocationMapProps {
  location: LocationData;
  primaryColor: string;
}

const LocationMap: React.FC<LocationMapProps> = ({ location, primaryColor }) => {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(location.mapUrl)}`;

  const openMap = () => {
    window.open(location.mapUrl, '_blank');
  };

  return (
    <div className="min-h-screen px-6 py-8 flex flex-col justify-center">
      <div className="max-w-sm mx-auto space-y-6 animate-fadeInUp">
        <div className="text-center">
          <div className="relative">
            <MapPin className="w-12 h-12 mx-auto mb-4" style={{ color: primaryColor }} />
            <div className="absolute -top-1 -right-1 text-2xl">📍</div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">🎉 Lugar de la Celebración</h2>
          <p className="text-gray-600">¡Encuéntranos en:</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg space-y-6 border-l-4" style={{ borderColor: primaryColor }}>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center justify-center space-x-2">
              <span>🎉</span>
              <span>{location.name}</span>
            </h3>
            <p className="text-gray-600 flex items-center justify-center space-x-2">
              <span>📍</span>
              <span>{location.address}</span>
            </p>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-gray-50 p-4 rounded-xl border-2 border-dashed" style={{ borderColor: primaryColor + '80' }}>
              <img 
                src={qrCodeUrl} 
                alt="QR Code for location" 
                className="w-32 h-32"
              />
            </div>
            <p className="text-sm text-gray-600 text-center">
              📱 Escanea para llegar al lugar
            </p>
          </div>

          {/* Map Button */}
          <button
            onClick={openMap}
            className="w-full text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{ background: `linear-gradient(to right, ${primaryColor}, ${primaryColor}dd)` }}
          >
            <span>🗺️</span>
            <span>Ir al Lugar</span>
          </button>

          {/* Alternative QR Button */}
          <div className="flex items-center justify-center space-x-2 pt-4 border-t" style={{ borderColor: primaryColor + '20' }}>
            <span className="text-lg">📱</span>
            <span className="text-sm text-gray-500">Apunta tu cámara al código QR para navegar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
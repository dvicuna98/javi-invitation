import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

interface InvitationData {
  childName: string;
  age: number;
  photo: string;
  date: string;
  time: string;
  location: {
    name: string;
    address: string;
  };
  rsvp: {
    contact: string;
    phone: string;
    email: string;
  };
  theme: {
    primaryColor: string;
  };
}

interface InvitationCardProps {
  data: InvitationData;
}

const InvitationCard: React.FC<InvitationCardProps> = ({ data }) => {

    const mainPhoto = `${import.meta.env.BASE_URL}${data.photo}`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8 relative">
      <div className="text-center space-y-6 max-w-sm mx-auto animate-fadeInUp">
        {/* Photo Section */}
        <div className="relative">
          <div 
            className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300 relative"
            style={{ borderColor: data.theme.primaryColor }}
          >
            <img 
              src={data.photo} 
              alt={data.childName}
              className="w-full h-full object-cover"
            />
            {/* Racing stripes overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
          </div>
          <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg animate-bounce border-2 border-yellow-400">
            {data.age}
          </div>
          {/* Racing flag decoration */}
          <div className="absolute -bottom-4 -left-4 w-12 h-8 bg-gradient-to-r from-black via-white to-black opacity-80 rounded transform rotate-12 shadow-lg"></div>
        </div>

        {/* Invitation Text */}
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-wide text-gray-600 font-medium">
            🎉 Estás invitado al cumpleaños de
          </p>
          <h1 
            className="text-4xl font-bold"
            style={{ color: data.theme.primaryColor }}
          >
            {data.childName}
          </h1>
          <h2 className="text-2xl font-light text-gray-700">
            ✨ {data.age} años
          </h2>
        </div>

        {/* Event Details */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg space-y-4 border-l-4" style={{ borderColor: data.theme.primaryColor }}>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800 flex items-center justify-center space-x-2">
              <span>📅</span>
              <span>{data.date}</span>
            </p>
            <p className="text-md text-gray-600 flex items-center justify-center space-x-2">
              <span>🕒</span>
              <span>{data.time}</span>
            </p>
          </div>
          
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: data.theme.primaryColor }} />
            <div className="text-left">
              <p className="font-medium text-gray-800">{data.location.name}</p>
              <p className="text-sm text-gray-600">{data.location.address}</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm text-gray-600 mb-2">📞 Confirmar participación con {data.rsvp.contact}:</p>
            <div className="flex flex-col space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" style={{ color: data.theme.primaryColor }} />
                <span>{data.rsvp.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" style={{ color: data.theme.primaryColor }} />
                <span>{data.rsvp.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
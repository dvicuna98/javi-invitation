import React from 'react';
import { Heart, Star, Baby } from 'lucide-react';

interface AboutMeFact {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface AboutMeData {
  title: string;
  description: string;
  facts: AboutMeFact[];
}

interface AboutMeProps {
  data: AboutMeData;
  primaryColor: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ data, primaryColor }) => {
  return (
    <div className="min-h-screen px-6 py-8">
      <div className="max-w-md mx-auto space-y-6 animate-fadeInUp">
        <div className="text-center">
          <div className="relative">
            <Heart className="w-12 h-12 mx-auto mb-4" style={{ color: primaryColor }} />
            <div className="absolute -top-1 -right-1 text-2xl">✨</div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">🎉 Acerca de Mí</h2>
          <p className="text-gray-600">{data.description}</p>
        </div>

        <div className="space-y-4">
          {data.facts.map((fact, index) => (
            <div
              key={fact.id}
              className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 animate-slideInFromBottom"
              style={{ borderColor: primaryColor }}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-50 to-gray-50 flex items-center justify-center text-2xl border-2" style={{ borderColor: primaryColor + '40' }}>
                    {fact.icon}
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {fact.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {fact.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-gray-50 rounded-2xl p-6 text-center border" style={{ borderColor: primaryColor + '40' }}>
          <div className="flex justify-center space-x-2 mb-3">
            <span className="text-2xl">👨‍👩‍👦</span>
            <span className="text-2xl">💕</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">❤️ Con Amor de la Familia</h3>
          <p className="text-sm text-gray-600">
Javier es la alegría de nuestro hogar. Cada día nos sorprende con su humor y su hermosa sonrisa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
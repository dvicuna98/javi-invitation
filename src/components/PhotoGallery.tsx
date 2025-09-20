import React from 'react';
import { Camera, Upload, ExternalLink, Share2 } from 'lucide-react';

interface PhotoGalleryData {
  driveLink: string;
  description: string;
  instructions: string;
}

interface PhotoGalleryProps {
  data: PhotoGalleryData;
  primaryColor: string;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ data, primaryColor }) => {
  const openDrive = () => {
    window.open(data.driveLink, '_blank');
  };

  const shareLink = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Fotos de la Fiesta de Cumpleaños',
          text: '¡Mira y sube fotos de la fiesta de cumpleaños de Carolina!',
          url: data.driveLink,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(data.driveLink);
      alert('¡Enlace copiado al portapapeles!');
    }
  };

  return (
    <div className="min-h-screen px-6 py-8 flex flex-col justify-center">
      <div className="max-w-sm mx-auto space-y-6 animate-fadeInUp">
        <div className="text-center">
          <div className="relative">
            <Camera className="w-12 h-12 mx-auto mb-4" style={{ color: primaryColor }} />
            <div className="absolute -top-1 -right-1 text-2xl">📸</div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">📸 Fotos de la Celebración</h2>
          <p className="text-gray-600">{data.description}</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg space-y-6 border-l-4" style={{ borderColor: primaryColor }}>
          {/* Photo Upload Illustration */}
          <div className="bg-gradient-to-br from-yellow-50 to-gray-50 rounded-xl p-8 text-center border" style={{ borderColor: primaryColor + '40' }}>
            <div className="flex justify-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center transform rotate-6 border-2" style={{ borderColor: primaryColor + '40' }}>
                <span className="text-2xl">🎉</span>
              </div>
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center transform -rotate-3 border-2" style={{ borderColor: primaryColor + '40' }}>
                <span className="text-2xl">📸</span>
              </div>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">🎉 ¡Comparte los Momentos de la Celebración!</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {data.instructions}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={openDrive}
              className="w-full text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{ background: `linear-gradient(to right, ${primaryColor}, ${primaryColor}dd)` }}
            >
              <span>📸</span>
              <span>Ver Álbum de la Celebración</span>
            </button>

            <button
              onClick={shareLink}
              className="w-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>🚀</span>
              <span>Compartir Álbum</span>
            </button>
          </div>

          {/* Instructions */}
          <div className="bg-yellow-50 rounded-xl p-4 text-center border" style={{ borderColor: primaryColor + '40' }}>
            <h4 className="font-medium text-gray-800 mb-2">📸 Cómo Subir Fotos</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <p>1. Haz clic en "Ver Álbum de la Celebración"</p>
              <p>2. Inicia sesión con Google si se solicita</p>
              <p>3. Haz clic en el botón "+" para agregar fotos</p>
              <p>4. Selecciona las mejores fotos desde tu dispositivo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
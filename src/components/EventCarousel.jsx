import React, { useState } from 'react';
import PropTypes from 'prop-types';
import telaEvento from '../assets/image/tela-evento.png'; // Ajuste o caminho conforme necessário

const EventCarousel = ({ events, onNext, onPrev, showDescription = false }) => {
  const [showImageModal, setShowImageModal] = useState(false);

  const handleEventClick = () => {
    setShowImageModal(true);
  };

  const closeModal = () => {
    setShowImageModal(false);
  };

  return (
    <div className="mb-10">
      {/* Modal para exibir a imagem */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-white rounded-lg max-w-4xl max-h-screen overflow-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Detalhes do Evento</h3>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <img 
                src={telaEvento} 
                alt="Detalhes do evento" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Eventos em destaque</h2>
        <div className="flex space-x-2">
          <button 
            onClick={onPrev}
            className="p-2 rounded-full bg-white border border-gray-300 text-gray-700 hover:bg-purple-50 hover:border-purple-300"
            aria-label="Eventos anteriores"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={onNext}
            className="p-2 rounded-full bg-white border border-gray-300 text-gray-700 hover:bg-purple-50 hover:border-purple-300"
            aria-label="Próximos eventos"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div 
            key={event.id} 
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:border-purple-300 transition-colors h-full flex flex-col cursor-pointer"
            onClick={handleEventClick}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{event.title || event.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{event.date}</p>
                {event.period && <p className="text-sm text-gray-500">{event.period}</p>}
              </div>
              {event.online && (
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md font-medium">
                  Evento online
                </span>
              )}
            </div>
            
            {showDescription && event.description && (
              <div className="mb-4 flex-grow">
                <p className="text-gray-600 text-sm line-clamp-3">{event.description}</p>
              </div>
            )}
            
            <div className="flex items-center text-gray-600 mt-auto">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm">{event.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

EventCarousel.propTypes = {
  events: PropTypes.array.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  showDescription: PropTypes.bool
};

EventCarousel.defaultProps = {
  showDescription: false
};

export default EventCarousel;
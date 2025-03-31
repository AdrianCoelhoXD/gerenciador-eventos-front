import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">      
        <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Bem-vindo ao Eventopia</h1>
        <p className="text-lg text-gray-700 max-w-2xl">
          A plataforma perfeita para organizar ou encontrar eventos incríveis
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Card para Organizar Evento */}
        <Link 
          to="/organize-event" 
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-300"
        >
          <div className="p-8 flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-6">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Organize um Evento</h2>
            <p className="text-gray-700 text-center">
              Crie e gerencie seu próprio evento de forma simples e eficiente
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Começar
            </button>
          </div>
        </Link>
        
        {/* Card para Encontrar Evento */}
        <Link 
          to="/find-events" 
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-300"
        >
          <div className="p-8 flex flex-col items-center">
            <div className="bg-purple-100 p-4 rounded-full mb-6">
              <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Encontre um Evento</h2>
            <p className="text-gray-700 text-center">
              Descubra eventos incríveis perto de você e participe
            </p>
            <button className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Explorar
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
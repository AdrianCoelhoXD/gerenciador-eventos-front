import { useState, useEffect } from 'react';
import { user, events as mockEvents } from '../data/mockData.js';
import { useCarousel } from '../hooks/eventCarousel.js';
import EventCarousel from '../components/EventCarousel.jsx';
import Footer from '../components/Footer';
import Header from '../components/Header.jsx';
import Dropdown from '../components/DropDown.jsx';
import useEventFilters from '../hooks/useEventFilters';
import axios from 'axios';

export default function Home() {
  // Carrossel para eventos fictícios (em destaque)
  const { visibleItems: visibleMockEvents, next: nextMockEvents, prev: prevMockEvents } = useCarousel(mockEvents);

  // Estado para eventos reais do banco de dados
  const [realEvents, setRealEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { visibleItems: visibleRealEvents, next: nextRealEvents, prev: prevRealEvents } = useCarousel(realEvents);

  // Filtros
  const { activeFilters, handleFilterSelect, clearFilters } = useEventFilters();

  // Filtros disponíveis
  const filters = [
    { type: 'location', label: 'Local' },
    { type: 'date', label: 'Data' },
    { type: 'price', label: 'Preço' },
    { type: 'category', label: 'Categoria' },
  ];

  // Buscar eventos reais do backend ao carregar a página
  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get('http://localhost:3000/api/events'); 
        // Validar os dados recebidos
        const events = response.data;
        const validEvents = events.filter(
          (event) => event.name && event.date && event.location
        );
        if (validEvents.length !== events.length) {
          console.warn('Alguns eventos foram ignorados por falta de campos obrigatórios (name, date, location).');
        }
        setRealEvents(validEvents);
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
        setError('Não foi possível carregar os eventos. Tente novamente mais tarde.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cabeçalho */}
      <Header user={user} />

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Seção de Título */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Os melhores eventos</h1>
          <p className="text-lg text-gray-600">Confira os eventos que vão ocorrer no Brasil</p>
          <p className="text-gray-500 mt-2">
            Descubra eventos de seu interesse ou crie os seus próprios utilizando a Eventopia
          </p>
          <div className="border-b border-gray-200 mt-4"></div>
        </section>

        {/* Barra de Pesquisa Aprimorada */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md border-2 border-purple-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h2 className="text-xl font-bold text-gray-800">Pesquisar por eventos</h2>
            <div className="flex items-center gap-3">
              {activeFilters.location && (
                <span className="inline-flex items-center px-3 py-1 bg-purple-50 rounded-full text-sm font-medium text-purple-700 border border-purple-200">
                  {activeFilters.location.label}
                  <button
                    type="button"
                    className="ml-1.5 p-0.5 rounded-full hover:bg-purple-100"
                    onClick={() => handleFilterSelect('location')(null)}
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              )}
              <button
                className="text-sm font-medium text-gray-500 hover:text-purple-600 flex items-center"
                onClick={clearFilters}
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Limpar
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {filters.map((filter) => (
              <Dropdown
                key={filter.type}
                type={filter.type}
                label={filter.label}
                onSelect={handleFilterSelect(filter.type)}
                selectedOption={activeFilters[filter.type]}
                className="min-w-[120px]"
              />
            ))}
            <button className="flex items-center px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-purple-400 hover:bg-purple-50">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filtros
            </button>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center shadow-md hover:shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Encontrar
            </button>
          </div>
        </section>

        {/* Seção de Eventos em Destaque (Fictícios) */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Eventos em Destaque</h2>
          {visibleMockEvents.length > 0 ? (
            <EventCarousel events={visibleMockEvents} onNext={nextMockEvents} onPrev={prevMockEvents} />
          ) : (
            <p className="text-gray-500">Nenhum evento em destaque disponível.</p>
          )}
        </section>

          {/* Seção de Todos os Eventos (Reais do Banco de Dados) */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Todos os Eventos</h2>
        {isLoading ? (
          <p className="text-gray-500">Carregando eventos...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : visibleRealEvents.length > 0 ? (
          <div>
            <EventCarousel events={visibleRealEvents} onNext={nextRealEvents} onPrev={prevRealEvents} showDescription={true} />
          </div>
        ) : (
          <p className="text-gray-500">Nenhum evento disponível no momento.</p>
        )}
      </section>

        {/* Botão Ver Mais */}
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-white border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium shadow-sm hover:shadow-md">
            Ver mais eventos
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
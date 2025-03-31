import { Link } from 'react-router-dom';

export default function Home() {
  // Dados do usuário logado
  const user = {
    name: "Adrian Coelho",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-purple-600">Eventopia</Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/about" className="text-gray-700 hover:text-purple-600">Sobre Nós</Link>
              <Link to="/find-events" className="text-gray-700 hover:text-purple-600">Encontrar Eventos</Link>
              <Link to="/organize-event" className="text-gray-700 hover:text-purple-600">Organizar Eventos</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm font-medium text-gray-700">{user.name}</span>
            </div>
          </div>
        </div>
      </header>

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
              {/* Filtro Ativo */}
              <span className="inline-flex items-center px-3 py-1 bg-purple-50 rounded-full text-sm font-medium text-purple-700 border border-purple-200">
                Online
                <button type="button" className="ml-1.5 p-0.5 rounded-full hover:bg-purple-100">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </span>
              
              {/* Botão Limpar */}
              <button className="text-sm font-medium text-gray-500 hover:text-purple-600 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Limpar
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Dropdown Local */}
            <div className="relative">
              <button className="flex items-center px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-purple-400 hover:bg-purple-50">
                Local
                <svg className="w-4 h-4 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            {/* Dropdown Data */}
            <div className="relative">
              <button className="flex items-center px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-purple-400 hover:bg-purple-50">
                Data
                <svg className="w-4 h-4 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            {/* Dropdown Preço */}
            <div className="relative">
              <button className="flex items-center px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-purple-400 hover:bg-purple-50">
                Preço
                <svg className="w-4 h-4 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            {/* Dropdown Categoria */}
            <div className="relative">
              <button className="flex items-center px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-purple-400 hover:bg-purple-50">
                Categoria
                <svg className="w-4 h-4 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            {/* Dropdown Formato */}
            <div className="relative">
              <button className="flex items-center px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-purple-400 hover:bg-purple-50">
                Formato
                <svg className="w-4 h-4 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            {/* Checkbox Com submissão */}
            <label className="flex items-center space-x-2 cursor-pointer px-3 py-2 bg-white rounded-lg border border-gray-300 hover:border-purple-400 hover:bg-purple-50">
              <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" />
              <span className="text-gray-700">Com submissão</span>
            </label>
            
            {/* Botão Filtros */}
            <button className="flex items-center px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-purple-400 hover:bg-purple-50">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filtros
            </button>
          </div>

          {/* Botão Encontrar - Destaque */}
          <div className="mt-6 flex justify-end">
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center shadow-md hover:shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Encontrar
            </button>
          </div>
        </section>

        {/* Seção de Eventos em Destaque */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Eventos em destaque</h2>
          
          {/* Evento 1 */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-200 hover:border-purple-300 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-md font-medium mb-2">
                  SUBMISSÕES ABERTAS
                </span>
                <h3 className="text-xl font-bold text-gray-900">EXERCISION</h3>
                <p className="text-gray-500">2025 | 28-30 MAI</p>
              </div>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md font-medium">
                Evento online
              </span>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              CAED-Jus 2025 - Congresso Internacional de Altos Estudos em Direito
            </h4>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>quarta-feira, 28 maio</span>
            </div>
          </div>

          {/* Evento 2 */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-200 hover:border-purple-300 transition-colors">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              XV Encontro Nacional de Educação Matemática
            </h3>
            <div className="flex items-center text-gray-600 mb-2">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>segunda-feira, 28 julho</span>
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Manaus, AM</span>
            </div>
          </div>

          {/* Evento 3 */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-200 hover:border-purple-300 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">II Congresso Brasileiro de Empreendedorismo</h3>
              </div>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md font-medium">
                Evento online
              </span>
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>domingo, 25 maio</span>
            </div>
          </div>

          {/* Evento 4 */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:border-purple-300 transition-colors">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Congresso Nacional de Saúde e Transformação Digital
            </h3>
            <div className="flex items-center text-gray-600 mb-2">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>sexta-feira, 11 abril</span>
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Evento online</span>
            </div>
          </div>

          {/* Botão Ver Mais */}
          <div className="mt-8 text-center">
            <button className="px-6 py-3 bg-white border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium shadow-sm hover:shadow-md">
              Ver mais eventos
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
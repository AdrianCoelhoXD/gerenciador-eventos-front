import { FaGithub, FaLinkedin, FaCode, FaServer, FaPalette, FaUsers } from 'react-icons/fa';
import TeamImage from './assets/image/nois.png';
import Header from './components/Header'; // Importação do Header
import Footer from './components/Footer'; // Importação do Footer

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Vitor Platini",
      role: "Frontend Developer",
      bio: "Especialista em React e Tailwind CSS, responsável pela interface do usuário.",
      github: "vitorplatini",
      linkedin: "vitorplatini"
    },
    {
      name: "Maria Eduarda",
      role: "Backend Developer",
      bio: "Desenvolveu a API RESTful e a integração com o banco de dados.",
      github: "MariaEduardaEloy",
      linkedin: "MariaEduardaEloy"
    },
    {
      name: "Adrian",
      role: "Full Stack Developer",
      bio: "Trabalhou em ambas as extremidades e na arquitetura geral do sistema.",
      github: "AdrianCoelhoXD",
      linkedin: "Adrian-Coelho-Bezerra"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Adiciona o Header aqui */}
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre a Eventopia</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Uma plataforma de gerenciamento de eventos criada por estudantes de Sistemas de Informação para colocar em prática nossos conhecimentos.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Our Story */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa História</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-4">
                Como estudantes de Sistemas de Informação, sempre buscamos projetos desafiadores para aplicar o que aprendemos em sala de aula.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                A Eventopia nasceu da necessidade de criar uma aplicação web completa, integrando frontend e backend, utilizando as tecnologias mais modernas do mercado.
              </p>
              <p className="text-lg text-gray-600">
                Nosso objetivo foi desenvolver uma plataforma intuitiva para criação e gerenciamento de eventos, testando nossas habilidades em React, Tailwind CSS, Vite, Node.js e bancos de dados.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <img 
                src={TeamImage}
                alt="Equipe trabalhando" 
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tecnologias Utilizadas</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: <FaCode className="text-4xl mb-2 text-purple-600" />, name: "React", desc: "Biblioteca frontend" },
              { icon: <FaPalette className="text-4xl mb-2 text-purple-600" />, name: "Tailwind CSS", desc: "Framework CSS" },
              { icon: <FaCode className="text-4xl mb-2 text-purple-600" />, name: "Vite", desc: "Build tool" },
              { icon: <FaServer className="text-4xl mb-2 text-purple-600" />, name: "Node.js", desc: "Backend JavaScript" },
              { icon: <FaServer className="text-4xl mb-2 text-purple-600" />, name: "Express", desc: "Framework backend" },
              { icon: <FaServer className="text-4xl mb-2 text-purple-600" />, name: "MongoDB", desc: "Banco de dados" },
            ].map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center">{tech.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{tech.name}</h3>
                <p className="text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Members */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Equipe</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Um grupo de estudantes apaixonados por tecnologia e desenvolvimento de software.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-purple-100 flex items-center justify-center">
                  <FaUsers className="text-6xl text-purple-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a 
                      href={`https://github.com/${member.github}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-purple-600"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                    <a 
                      href={`https://linkedin.com/in/${member.linkedin}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-purple-600"
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Goals */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12 border border-purple-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Objetivos do Projeto</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Aprendizado Prático",
                desc: "Aplicar conceitos aprendidos em sala de aula em um projeto real."
              },
              {
                title: "Stack Moderna",
                desc: "Trabalhar com as tecnologias mais demandadas pelo mercado."
              },
              {
                title: "Trabalho em Equipe",
                desc: "Desenvolver habilidades de colaboração e versionamento de código."
              },
              {
                title: "Ciclo Completo",
                desc: "Experienciar todas as etapas do desenvolvimento de software."
              },
              {
                title: "Problemas Reais",
                desc: "Resolver desafios comuns no desenvolvimento web moderno."
              },
              {
                title: "Portfólio",
                desc: "Criar um projeto significativo para nossos portfólios."
              }
            ].map((item, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Gostou do nosso projeto?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Estamos abertos a feedbacks e sugestões para melhorar nossa plataforma!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://github.com/AdrianCoelhoXD/gerenciador-eventos-front" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center justify-center shadow-md hover:shadow-lg"
            >
              <FaGithub className="mr-2" /> Ver no GitHub
            </a>
            <a 
              href="/"
              className="px-6 py-3 bg-white border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium flex items-center justify-center shadow-sm hover:shadow-md"
            >
              Contate-nos
            </a>
          </div>
        </section>
      </main>

      {/* Adiciona o Footer aqui */}
      <Footer />
    </div>
  );
}
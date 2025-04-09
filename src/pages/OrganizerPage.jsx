// src/pages/OrganizerPage.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

const OrganizerPage = () => {
  const { logout } = useAuth();
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingEvent, setEditingEvent] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    description: "",
    date: "",
    location: "",
    participants: 0,
  });
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/events/my-events", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setEvents(response.data);
    } catch (err) {
      console.error("Erro ao buscar eventos:", err);
      if (err.response?.status === 401) {
        logout();
      } else {
        showNotification("Falha ao carregar eventos", "error");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const showNotification = (message, type = "success") => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: "", type: "" }), 3000);
  };

  const handleDelete = async (eventId) => {
    try {
      await axios.delete(`http://localhost:3000/api/events/${eventId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      showNotification("Evento deletado com sucesso!");
      setEvents(events.filter((event) => event._id !== eventId));
    } catch (err) {
      console.error("Erro ao deletar evento:", err);
      if (err.response?.status === 401) {
        logout();
      } else {
        showNotification("Falha ao deletar evento", "error");
      }
    }
  };

  const handleEdit = (event) => {
    setEditingEvent(event._id);
    setEditFormData({
      name: event.name,
      description: event.description || "",
      date: event.date ? event.date.split("T")[0] : "",
      location: event.location || "",
      participants: event.participants || 0,
    });
  };

  const handleEditSubmit = async (eventId) => {
    try {
      await axios.patch(
        `http://localhost:3000/api/events/${eventId}`,
        editFormData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      showNotification("Evento atualizado com sucesso!");
      setEditingEvent(null);
      fetchEvents();
    } catch (err) {
      console.error("Erro ao atualizar evento:", err);
      if (err.response?.status === 401) {
        logout();
      } else {
        showNotification("Falha ao atualizar evento", "error");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  if (isLoading) return <div className="text-center py-8 text-gray-600">Carregando...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Notificação */}
      {notification.show && (
        <div
          className={`fixed top-16 right-4 p-4 rounded-md shadow-lg z-50 ${
            notification.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {notification.message}
        </div>
      )}

      {/* Conteúdo Principal */}
      <main className="flex-grow bg-white p-6 md:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Título e Botão */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Meus Eventos</h1>
            <Link
              to="/organize-event"
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-sm"
            >
              Criar Novo Evento
            </Link>
          </div>

          {/* Mensagem de Nenhum Evento ou Lista de Eventos */}
          {events.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg mb-4">Nenhum evento criado ainda.</p>
              <Link
                to="/organize-event"
                className="text-blue-600 hover:underline text-base font-medium"
              >
                Criar meu primeiro evento
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <div
                  key={event._id}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  {editingEvent === event._id ? (
                    <div className="space-y-4">
                      <input
                        type="text"
                        name="name"
                        value={editFormData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Nome do Evento"
                      />
                      <textarea
                        name="description"
                        value={editFormData.description}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Descrição"
                        rows="3"
                      />
                      <input
                        type="date"
                        name="date"
                        value={editFormData.date}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        name="location"
                        value={editFormData.location}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Localização"
                      />
                      <input
                        type="number"
                        name="participants"
                        value={editFormData.participants}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Número de Participantes"
                      />
                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleEditSubmit(event._id)}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300"
                        >
                          Salvar
                        </button>
                        <button
                          onClick={() => setEditingEvent(null)}
                          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all duration-300"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-xl font-semibold text-gray-800 mb-3">{event.name}</h2>
                      {event.description && (
                        <p className="text-gray-600 mb-4">{event.description}</p>
                      )}
                      <div className="space-y-2 text-sm text-gray-700">
                        {event.date && (
                          <p>
                            <span className="font-medium">Data:</span>{" "}
                            {new Date(event.date).toLocaleDateString()}
                          </p>
                        )}
                        {event.location && (
                          <p>
                            <span className="font-medium">Local:</span>{" "}
                            {event.location}
                          </p>
                        )}
                        <p>
                          <span className="font-medium">Participantes:</span>{" "}
                          {event.participants}
                        </p>
                        <p>
                          <span className="font-medium">Organizador:</span>{" "}
                          {event.organizerName}
                        </p>
                        <p>
                          <span className="font-medium">E-mail:</span>{" "}
                          {event.organizerEmail}
                        </p>
                      </div>
                      <div className="mt-5 flex space-x-3">
                        <button
                          onClick={() => handleEdit(event)}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleDelete(event._id)}
                          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300"
                        >
                          Deletar
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OrganizerPage;
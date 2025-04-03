// src/pages/OrganizeEvent.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OrganizeEvent = () => {
  const [eventName, setEventName] = useState("");
  const [participants, setParticipants] = useState("");
  const [organizerName, setOrganizerName] = useState("");
  const [organizerEmail, setOrganizerEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validação simples
    if (!eventName || !participants || !organizerName || !organizerEmail) {
      setError("Preencha todos os campos!");
      setIsLoading(false);
      return;
    }

    try {
      // Envia os dados para o backend
      await axios.post(
        "http://localhost:3000/api/events",
        {
          name: eventName,
          participants: parseInt(participants),
          organizerName,
          organizerEmail,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Token JWT do login
          },
        }
      );

      // Redireciona para a página do organizador após criar o evento
      navigate("/organizer");
    } catch (err) {
      setError(err.response?.data?.message || "Erro ao criar evento.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Criar Evento</h1>
        
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 text-sm rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nome do Evento *
            </label>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Número de Participantes *
            </label>
            <input
              type="number"
              min="1"
              value={participants}
              onChange={(e) => setParticipants(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nome do Organizador *
            </label>
            <input
              type="text"
              value={organizerName}
              onChange={(e) => setOrganizerName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-mail do Organizador *
            </label>
            <input
              type="email"
              value={organizerEmail}
              onChange={(e) => setOrganizerEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Criando..." : "Criar Evento"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrganizeEvent;
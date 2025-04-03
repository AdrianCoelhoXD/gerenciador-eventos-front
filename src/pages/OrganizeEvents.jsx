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
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      navigate("/organizer");
    } catch (err) {
      setError(err.response?.data?.message || "Erro ao criar evento.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      {/* Parte azul - visível apenas em telas médias/grandes (sm:block) */}
      <div className="hidden sm:block sm:w-1/2 bg-blue-600"></div>

      {/* Parte do formulário */}
      <div className="w-full sm:w-1/2 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-md space-y-4">
          <h1 className="text-2xl font-bold text-center text-gray-800">Criar Evento</h1>
          
          {error && (
            <div className="p-3 bg-red-100 text-red-700 text-sm rounded-md">
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
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
    </div>
  );
};

export default OrganizeEvent;
// src/pages/OrganizerPage.jsx
import { useState, useEffect } from "react";
import axios from "axios";

const OrganizerPage = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/events", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setEvents(response.data);
      } catch (err) {
        console.error("Erro ao buscar eventos:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (isLoading) return <div>Carregando...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">Meus Eventos</h1>
      
      {events.length === 0 ? (
        <p>Nenhum evento criado ainda.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div key={event._id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{event.name}</h2>
              <p>Participantes: {event.participants}</p>
              <p>Organizador: {event.organizerName}</p>
              <p>E-mail: {event.organizerEmail}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrganizerPage;